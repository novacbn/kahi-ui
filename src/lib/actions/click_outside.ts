import type {IActionHandle} from "./actions";

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
export function click_outside(
    element: HTMLElement,
    options: IClickOutsideOptions
): IClickOutsideHandle {
    console.log({element, options});
    let {on_click_outside} = options;

    function on_click(event: MouseEvent) {
        const target = event.target as Node;

        if (document.contains(target) && !element.contains(target)) on_click_outside(event);
    }

    document.addEventListener("click", on_click);

    return {
        update(options: IClickOutsideOptions) {
            ({on_click_outside} = options);
        },

        destroy() {
            document.removeEventListener("click", on_click);
        },
    };
}
