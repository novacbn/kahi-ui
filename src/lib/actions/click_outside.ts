import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[click_outside]]
 */
export type IClickOutsideAction = IAction<Element, IClickOutsideOptions, IClickOutsideHandle>;

/**
 * Represents the Svelte Action handle returned by [[click_outside]]
 */
export type IClickOutsideHandle = Required<IActionHandle<IClickOutsideOptions>>;

/**
 * Represents the typing for the [[IClickOutsideOptions.on_click_outside]] callback
 */
export type IClickOutsideCallback = (event: MouseEvent) => void;

/**
 * Represents the options passable to the [[click_outside]] Svelte Action
 */
export interface IClickOutsideOptions {
    /**
     * Represents CSS selectors used as an ignore list of elements that can
     * trigger the [[IClickOutsideOptions.ignore]] callback
     */
    ignore?: string;

    /**
     * Represents the event callback called whenever target element
     * was clicked outside of its children
     */
    on_click_outside: IClickOutsideCallback;
}

/**
 * Listens to [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) events in the entire
 * document, calling the passed [[IClickOutsideOptions.on_click_outside]] callback whenever document element
 * is clicked and is not a child of the targetted element
 *
 * @param element
 * @param options
 * @returns
 */
export const click_outside: IClickOutsideAction = (element, options) => {
    let {ignore, on_click_outside} = options;

    function on_click(event: MouseEvent): void {
        const target = event.target as HTMLElement;

        if (ignore && target.matches(ignore)) return;
        if (!document.contains(target) || element.contains(target)) return;

        on_click_outside(event);
    }

    document.addEventListener("click", on_click);

    return {
        destroy() {
            document.removeEventListener("click", on_click);
        },

        update(options: IClickOutsideOptions) {
            ({ignore, on_click_outside} = options);
        },
    };
};
