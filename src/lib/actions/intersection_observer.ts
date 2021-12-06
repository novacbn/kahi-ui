import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[intersection_observer]]
 */
export type IIntersectionObserverAction = IAction<
    HTMLElement,
    IIntersectionObserverOptions,
    IIntersectionObserverHandle
>;

/**
 * Represents the Svelte Action handle returned by [[intersection_observer]]
 */
export type IIntersectionObserverHandle = Required<IActionHandle<IIntersectionObserverOptions>>;

/**
 * Represents the typing for the [[IIntersectionObserverOptions.on_intersect]] callback
 */
export type IIntersectionObserverCallback = (intersections: IntersectionObserverEntry[]) => void;

/**
 * Represents the options passable to the [[intersection_observer]] Svelte Action
 */
export interface IIntersectionObserverOptions {
    /**
     * Represents the event callback called whenever target element has intersected the [[IIntersectionObserverOptions.root]]
     */
    on_intersect: IIntersectionObserverCallback;

    /**
     * An Element or Document object which is an ancestor of the intended target, whose bounding rectangle will be considered the
     * viewport. Any part of the target not visible in the visible area of the root is not considered visible
     */
    root?: IntersectionObserverInit["root"];

    /**
     * A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively
     * shrinking or growing the root for calculation purposes
     */
    root_margin?: IntersectionObserverInit["rootMargin"];

    /**
     * Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total
     * bounding box area for the observed target. A value of 0.0 means that even a single visible pixel counts as the target being
     * visible. 1.0 means that the entire target element is visible
     */
    threshold?: IntersectionObserverInit["threshold"];
}

/**
 * Represents a Svelte Action that encapsulates the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
 * Web API to easily integrate into Svelte
 *
 * @param element
 * @param options
 * @returns
 */
export const intersection_observer: IIntersectionObserverAction = (element, options) => {
    let {on_intersect, root, root_margin, threshold} = options;

    let observer = new IntersectionObserver(
        (intersections) => {
            on_intersect(intersections);
        },
        {
            root,
            rootMargin: root_margin,
            threshold,
        }
    );

    observer.observe(element);

    return {
        update(options: IIntersectionObserverOptions) {
            ({on_intersect, root, root_margin, threshold} = options);

            // NOTE: Unlike `MutationObserver`, we can't init with new options
            // without creating a new instance
            observer.disconnect();
            observer = new IntersectionObserver(
                (intersections) => {
                    on_intersect(intersections);
                },
                {
                    root,
                    rootMargin: root_margin,
                    threshold,
                }
            );

            observer.observe(element);
        },

        destroy() {
            observer.disconnect();
        },
    };
};
