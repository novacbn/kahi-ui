import type {IActionHandle} from "./actions";

/**
 *
 */
export type IIntersectionObserverAction = IActionHandle<IInsectionObserverOptions>;

/**
 *
 */
export type IIntersectionObserverCallback = (intersections: IntersectionObserverEntry[]) => void;

/**
 *
 */
export interface IInsectionObserverOptions {
    /**
     *
     */
    on_intersect: IIntersectionObserverCallback;

    /**
     *
     */
    options?: IntersectionObserverInit;
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
    options: IInsectionObserverOptions
): IIntersectionObserverAction {
    let {on_intersect, options: intersection_options} = options;

    let observer = new IntersectionObserver((intersections) => {
        on_intersect(intersections);
    }, intersection_options);

    observer.observe(element);

    return {
        update(options: IInsectionObserverOptions) {
            ({on_intersect, options: intersection_options} = options);

            // NOTE: Unlike `MutationObserver`, we can't init with new options
            // without creating a new instance
            observer.disconnect();
            observer = new IntersectionObserver((intersections) => {
                on_intersect(intersections);
            }, intersection_options);

            observer.observe(element);
        },

        destroy() {
            observer.disconnect();
        },
    };
}
