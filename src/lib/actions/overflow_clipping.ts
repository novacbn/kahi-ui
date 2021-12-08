import type {IActionHandle} from "./actions";

/**
 * Represents the Svelte Action handle returned by [[overflow_clipping]]
 */
export type IOverflowClippingHandle = Required<IActionHandle<IOverflowClippingOptions>>;

/**
 * Represents the typing for the [[IOverflowClippingOptions.on_clip]] callback
 */
export type IOverflowClippingCallback = (entry: IOverflowClippingEntry) => void;

/**
 * Represnts overflow content clipping information dispatched to [[IOverflowClippingOptions.on_clip]]
 */
export interface IOverflowClippingEntry {
    /**
     * Represents if the horizontal (left-to-right) content is clipping
     */
    horizontal: boolean;

    /**
     * Represents if the vertical (top-to-bottom) content is clipping
     */
    vertical: boolean;
}

/**
 * Represents the options passable to the [[overflow_clipping]] Svelte Action
 */
export interface IOverflowClippingOptions {
    /**
     * Represents if overflow clipping is currently being tracked
     */
    enabled?: boolean;

    /**
     * Represents the event callback called whenever the attached element's
     * overflow clipping values changes
     */
    on_clip: IOverflowClippingCallback;
}

/**
 * Uses the [MutationObserver API]() and [ResizeObserver API]() to detect inner content changes and
 * changes to the attached element's dimensions, checking if overflow clipping changes each time.
 *
 * @param element
 * @param options
 * @returns
 */
export function overflow_clipping(
    element: HTMLElement,
    options: IOverflowClippingOptions
): IOverflowClippingHandle {
    let {enabled, on_clip} = options;

    let cache: IOverflowClippingEntry | null = null;
    let mutation_observer: MutationObserver | null = null;
    let resize_observer: ResizeObserver | null = null;

    function update_clipping() {
        const entry: IOverflowClippingEntry = {
            horizontal: element.scrollWidth > element.clientWidth,
            vertical: element.scrollHeight > element.clientHeight,
        };

        if (!cache || cache.horizontal !== entry.horizontal || cache.vertical !== entry.vertical) {
            cache = entry;
            on_clip(entry);
        }
    }

    function on_mutate(entries: MutationRecord[]): void {
        update_clipping();
    }

    function on_resize(entries: ResizeObserverEntry[]): void {
        update_clipping();
    }

    function attach_events(): void {
        detach_events();

        mutation_observer = new MutationObserver(on_mutate);
        mutation_observer.observe(element, {
            childList: true,
            subtree: true,
        });

        resize_observer = new ResizeObserver(on_resize);
        resize_observer.observe(element);
    }

    function detach_events(): void {
        if (mutation_observer) {
            mutation_observer.disconnect();
            mutation_observer = null;
        }

        if (resize_observer) {
            resize_observer.unobserve(element);
            resize_observer = null;
        }
    }

    if (enabled) {
        update_clipping();
        attach_events();
    }

    return {
        destroy() {
            detach_events();
        },

        update(options: IOverflowClippingOptions) {
            ({enabled, on_clip} = options);

            if (enabled) {
                update_clipping();
                attach_events();
            }
        },
    };
}
