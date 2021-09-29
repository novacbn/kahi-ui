import type {IActionHandle} from "./actions";

/**
 *
 */
export type IIntersectionObserverAction = IActionHandle<IIntersectionObserverOptions>;

/**
 *
 */
export type IIntersectionObserverCallback = (intersections: IntersectionObserverEntry[]) => void;

/**
 *
 */
export interface IIntersectionObserverOptions {
    /**
     *
     */
    on_intersect: IIntersectionObserverCallback;

    /**
     *
     */
    root?: IntersectionObserverInit["root"];

    /**
     *
     */
    root_margin?: IntersectionObserverInit["rootMargin"];

    /**
     *
     */
    threshold?: IntersectionObserverInit["threshold"];
}

/**
 *
 *
 * @param element
 * @param options
 * @returns
 */
export function intersection_observer(
    element: HTMLElement,
    options: IIntersectionObserverOptions
): IIntersectionObserverAction {
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
}
