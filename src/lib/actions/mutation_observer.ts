import type {IActionHandle} from "./actions";

/**
 *
 */
export type IMutationObserverAction = IActionHandle<IMutationObserverOptions>;

/**
 *
 */
export type IMutationObserverCallback = (mutations: MutationRecord[]) => void;

/**
 *
 */
export interface IMutationObserverOptions {
    /**
     *
     */
    on_mutate: IMutationObserverCallback;

    /**
     *
     */
    options?: MutationObserverInit;
}

/**
 *
 *
 * @param element
 * @param options
 * @returns
 */
export function mutation_observer(
    element: HTMLElement,
    options: IMutationObserverOptions
): IMutationObserverAction {
    let {on_mutate, options: mutation_options} = options;

    const observer = new MutationObserver((mutations) => {
        on_mutate(mutations);
    });

    observer.observe(element, mutation_options);

    return {
        update(options: IMutationObserverOptions) {
            ({on_mutate, options: mutation_options} = options);

            observer.disconnect();
            observer.observe(element, mutation_options);
        },

        destroy() {
            observer.disconnect();
        },
    };
}
