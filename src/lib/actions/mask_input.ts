import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[mask_input]]
 */
export type IMaskInputAction = IAction<
    HTMLInputElement | HTMLTextAreaElement,
    IMaskInputOptions,
    IMaskInputHandle
>;

/**
 * Represents the Svelte Action handle returned by [[mask_input]]
 */
export type IMaskInputHandle = Required<IActionHandle<IMaskInputOptions>>;

/**
 * Represents the typing for the [[IMaskInputOptions.on_mask_input]] callback
 */
export type IMaskInputCallback = (event: IMaskInputEvent) => void;

/**
 * Represents the typing used for the event passed to [[IMaskInputCallback]]
 */
export type IMaskInputEvent = CustomEvent<{value: string}>;

/**
 * Represents the options passable to the [[mask_input]] Svelte Action
 */
export interface IMaskInputOptions {
    /**
     *
     */
    enabled?: boolean;

    /**
     *
     */
    pattern?: string | RegExp;

    /**
     *
     */
    on_mask_input?: IMaskInputCallback;
}

/**
 *
 * @returns
 */
function compile_pattern(pattern?: string | RegExp): RegExp | null {
    // NOTE: `<input pattern={string}>` uses the `u` flag to properly
    // handle Unicode, so we should match the behavior here. Ditto
    // w/ implicit line start and end anchoring
    if (typeof pattern === "string") return new RegExp(`^${pattern}$`, "u");
    return pattern ?? null;
}

/**
 *
 *
 * @param element
 * @param options
 * @returns
 */
export const mask_input: IMaskInputAction = (element, options) => {
    let {enabled, pattern, on_mask_input} = options;

    let expression = compile_pattern(pattern);
    let value = element.value;

    function mask_value(new_value: string): void {
        const selection_end = element.selectionEnd ?? 0;
        const selection_start = element.selectionStart ?? 0;

        element.value = value;

        element.selectionEnd = selection_end - (new_value.length - value.length);
        element.selectionStart = selection_start - (new_value.length - value.length);
    }

    function on_input(event: Event): void {
        const new_value = element.value;

        if (on_mask_input) {
            const detail: IMaskInputEvent["detail"] = {value: new_value};
            const custom_event: IMaskInputEvent = new CustomEvent("maskinput", {
                cancelable: true,
                detail,
            });

            on_mask_input(custom_event);

            if (custom_event.cancelBubble) custom_event.stopPropagation();
            if (custom_event.defaultPrevented) mask_value(new_value);
        }

        if (expression && new_value && !expression.test(new_value)) {
            mask_value(new_value);
        }

        value = element.value;
    }

    function detach_events() {
        element.removeEventListener("input", on_input);
    }

    function attach_events() {
        element.addEventListener("input", on_input);
    }

    if (enabled) attach_events();

    return {
        destroy() {
            if (enabled) detach_events();
        },

        update(options: IMaskInputOptions) {
            ({enabled, pattern, on_mask_input} = options);

            expression = compile_pattern(pattern);

            if (enabled) attach_events();
            else detach_events();
        },
    };
};
