import type {IActionHandle} from "./actions";

/**
 * Represents the options passable to the [[click_outside]] Svelte Action
 */
export interface IClickOutsideOptions {
    /**
     * Represents the event callback called whenever target element
     * was clicked outside of its children
     */
    on_click_outside: (event: MouseEvent) => void;
}

export type IClickOutsideAction = IActionHandle<IClickOutsideOptions>;

/**
 * Listens to `click` events in the entire document, calling the passed [[IClickOutsideOptions.on_click_outside]]
 * callback whenever document element is clicked and is not a child of the targetted element
 *
 * @param element
 * @param options
 * @returns
 */
export function click_outside(
    element: HTMLElement,
    options: IClickOutsideOptions
): IClickOutsideAction {
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
