import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[behavior_anchor]]
 */
export type IBehaviorAnchorAction = IAction<
    HTMLElement,
    IBehaviorAnchorOptions,
    IBehaviorAnchorHandle
>;

/**
 * Represents the Svelte Action handle returned by [[behavior_anchor]]
 */
export type IBehaviorAnchorHandle = Required<IActionHandle<IBehaviorAnchorOptions>>;

/**
 * Represents the options passable to the [[behavior_anchor]] Svelte Action
 */
export interface IBehaviorAnchorOptions {
    /**
     * Represents if anchor behavior is to be emulated
     */
    enabled?: boolean;
}

/**
 * Emulates Anchor behavior on the given element, e.g. disabled can't open links
 *
 * @param element
 * @param options
 * @returns
 */
export const behavior_anchor: IBehaviorAnchorAction = (element, options) => {
    let {enabled} = options;

    function on_click(event: MouseEvent): void {
        if (element.hasAttribute("disabled") || element.hasAttribute("aria-disabled")) {
            event.preventDefault();
        }
    }

    function attach_events(): void {
        element.addEventListener("click", on_click);
    }

    function detach_events(): void {
        element.removeEventListener("click", on_click);
    }

    if (enabled) attach_events();

    return {
        destroy() {
            if (enabled) detach_events();
        },

        update(options: IBehaviorAnchorOptions) {
            ({enabled} = options);

            if (enabled) attach_events();
            else detach_events();
        },
    };
};
