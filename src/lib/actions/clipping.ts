import type {IActionHandle} from "./actions";
import {intersection_observer} from "./intersection_observer";

/**
 *
 */
export type IClippingAction = IActionHandle<IClippingOptions>;

/**
 *
 */
export type IClippingCallback = (clippings: IClippingEntry) => void;

/**
 *
 */
export interface IClippingEntry {
    /**
     *
     */
    bottom: boolean;

    /**
     *
     */
    is_clipping: boolean;

    /**
     *
     */
    left: boolean;

    /**
     *
     */
    right: boolean;

    /**
     *
     */
    top: boolean;
}

/**
 *
 */
export interface IClippingOptions {
    /**
     *
     */
    on_clip: IClippingCallback;
}

/**
 *
 *
 * @param element
 * @param options
 * @returns
 */
export function clipping(element: HTMLElement, options: IClippingOptions): IClippingAction {
    let {on_clip} = options;

    function on_intersect(intersections: IntersectionObserverEntry[]): void {
        const clippings = intersections.reduce<IClippingEntry>(
            (accum, intersection) => {
                const {
                    boundingClientRect: bounding_client_rect,
                    intersectionRect: intersection_rect,
                } = intersection;

                if (bounding_client_rect.top < intersection_rect.top) accum.top = true;
                if (bounding_client_rect.left < intersection_rect.left) accum.left = true;
                if (bounding_client_rect.bottom > intersection_rect.bottom) accum.bottom = true;
                if (bounding_client_rect.right > intersection_rect.right) accum.right = true;
                if (!intersection.isIntersecting) accum.is_clipping = true;

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
