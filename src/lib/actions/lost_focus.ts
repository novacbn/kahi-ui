import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[lost_focus]]
 */
export type ILostFocusAction = IAction<Document | Element, ILostFocusOptions, ILostFocusHandle>;

/**
 * Represents the Svelte Action handle returned by [[lost_focus]]
 */
export type ILostFocusHandle = Required<IActionHandle<ILostFocusOptions>>;

/**
 * Represents the callback function passable to [[ILostFocusOptions.on_lost_focus]]
 */
export type ILostFocusCallback = () => void;

/**
 * Represents the options passable to the [[lost_focus]] Svelte Action
 */
export interface ILostFocusOptions {
    /**
     * Represents CSS selectors used as an ignore list of elements that can
     * trigger the [[IClickInsideOptions.ignore]] callback
     */
    ignore?: string;

    /**
     * Represents if focus trapping is enabled for the attached element
     */
    enabled?: boolean;

    /**
     * Represents the callback dispatched whenever focus is lost
     */
    on_lost_focus: ILostFocusCallback;
}

/**
 * Listens to the [`blur`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) and
 * [`focusin`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) events on the
 * current tab. When the tab its self loses focuses or a non-child element inside the parent `element` is
 * focused, the callback is called.
 *
 * @param element
 * @param options
 * @returns
 */
export const lost_focus: ILostFocusAction = (element, options) => {
    let {enabled, ignore, on_lost_focus} = options;

    function on_blur(event: FocusEvent): void {
        on_lost_focus();
    }

    function on_focus_in(event: FocusEvent): void {
        const target = event.target as Element | null;
        if (element.contains(target) || (ignore && target?.matches(ignore))) return;

        on_lost_focus();
    }

    function detach_events(): void {
        window.removeEventListener("blur", on_blur);
        window.removeEventListener("focusin", on_focus_in);
    }

    function attach_events(): void {
        window.addEventListener("blur", on_blur);
        window.addEventListener("focusin", on_focus_in);
    }

    if (enabled) attach_events();

    return {
        destroy() {
            detach_events();
        },

        update(options) {
            ({enabled, ignore, on_lost_focus} = options);

            if (enabled) attach_events();
            else detach_events();
        },
    };
};
