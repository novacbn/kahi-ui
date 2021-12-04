import type {IActionHandle} from "./actions";
import {intersection_observer} from "./intersection_observer";

/**
 * Represents the Svelte Action handle returned by [[clipping]]
 */
export type IClippingHandle = Required<IActionHandle<IClippingOptions>>;

/**
 * Represents the typing for the [[IClippingOptions.on_clip]] callback
 */
export type IClippingCallback = (clippings: IClippingEntries) => void;

/**
 * Represents sides of viewport that are being clipped passed into [[IClippingOptions.on_clip]]
 */
export interface IClippingEntries {
    /**
     * Represents if the target element is clipping the bottom of the viewport
     */
    bottom: boolean;

    /**
     * Represents if any of the viewport's sides are being clipped
     */
    is_clipping: boolean;

    /**
     * Represents if the target element is clipping the left of the viewport
     */
    left: boolean;

    /**
     * Represents if the target element is clipping the right of the viewport
     */
    right: boolean;

    /**
     * Represents if the target element is clipping the top of the viewport
     */
    top: boolean;
}

/**
 * Represents the options passable to the [[clipping]] Svelte Action
 */
export interface IClippingOptions {
    /**
     * Represents the event callback called whenever the target element is clipping / not clipping a viewport side
     */
    on_clip: IClippingCallback;
}

/**
 * Listens to an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver), calling the
 * [[IClippingOptions.on_clip]] callback whenever the target element starts to leave / enter the viewport
 *
 * @param element
 * @param options
 * @returns
 */
export function clipping(element: HTMLElement, options: IClippingOptions): IClippingHandle {
    let {on_clip} = options;

    function on_intersect(intersections: IntersectionObserverEntry[]): void {
        const clippings = intersections.reduce<IClippingEntries>(
            (accum, intersection) => {
                const {
                    boundingClientRect: bounding_client_rect,
                    intersectionRect: intersection_rect,
                } = intersection;

                if (bounding_client_rect.top < intersection_rect.top) accum.top = true;
                if (bounding_client_rect.left < intersection_rect.left) accum.left = true;
                if (bounding_client_rect.bottom > intersection_rect.bottom) accum.bottom = true;
                if (bounding_client_rect.right > intersection_rect.right) accum.right = true;

                return accum;
            },
            {
                bottom: false,
                is_clipping: false,
                left: false,
                right: false,
                top: false,
            }
        );

        clippings.is_clipping =
            clippings.bottom || clippings.left || clippings.right || clippings.top;
        on_clip(clippings);
    }

    const action = intersection_observer(element, {
        on_intersect,
        threshold: [1],
    });

    return {
        update(options: IClippingOptions) {
            ({on_clip} = options);
        },

        destroy() {
            action.destroy();
        },
    };
}
