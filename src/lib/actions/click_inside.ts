import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[click_inside]]
 */
export type IClickInsideAction = IAction<
    Document | HTMLElement,
    IClickInsideOptions,
    IClickInsideHandle
>;

/**
 * Represents the Svelte Action handle returned by [[click_inside]]
 */
export type IClickInsideHandle = Required<IActionHandle<IClickInsideOptions>>;

/**
 * Represents the typing for the [[IClickInsideOptions.on_click_inside]] callback
 */
export type IClickInsideCallback = (event: MouseEvent) => void;

/**
 * Represents the options passable to the [[click_inside]] Svelte Action
 */
export interface IClickInsideOptions {
    /**
     * Represents CSS selectors used as an ignore list of elements that can
     * trigger the [[IClickInsideOptions.on_click_inside]] callback
     */
    ignore?: string;

    /**
     * Represents the event callback called whenever target element
     * was clicked inside of its inner content
     */
    on_click_inside: IClickInsideCallback;
}

/**
 * Listens to the [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event
 * in the attached element.
 *
 * @param element
 * @param options
 * @returns
 */
export const click_inside: IClickInsideAction = (element, options) => {
    let {ignore, on_click_inside} = options;

    function on_click(event: MouseEvent): void {
        const target = event.target as Element;

        if (ignore && target.matches(ignore)) return;

        on_click_inside(event);
    }

    // @ts-expect-error - HACK: `Document` typing just doesn't have it typed properly
    element.addEventListener("click", on_click);

    return {
        destroy() {
            // @ts-expect-error - HACK: `Document` typing just doesn't have it typed properly
            element.removeEventListener("click", on_click);
        },

        update(options: IClickInsideOptions) {
            ({ignore, on_click_inside} = options);
        },
    };
};
