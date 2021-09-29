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
    attributes?: MutationObserverInit["attributes"];

    /**
     *
     */
    attribute_filter?: MutationObserverInit["attributeFilter"];

    /**
     *
     */
    attribute_old_value?: MutationObserverInit["attributeOldValue"];

    /**
     *
     */
    character_data?: MutationObserverInit["characterData"];

    /**
     *
     */
    character_data_old_value?: MutationObserverInit["characterDataOldValue"];

    /**
     *
     */
    child_list?: MutationObserverInit["childList"];

    /**
     *
     */
    on_mutate: IMutationObserverCallback;

    /**
     *
     */
    subtree?: MutationObserverInit["subtree"];
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
    let {
        attributes,
        attribute_filter,
        attribute_old_value,
        character_data,
        character_data_old_value,
        child_list,
        on_mutate,
        subtree,
    } = options;

    const observer = new MutationObserver((mutations) => {
        on_mutate(mutations);
    });

    observer.observe(element, {
        attributes,
        attributeFilter: attribute_filter,
        attributeOldValue: attribute_old_value,
        characterData: character_data,
        characterDataOldValue: character_data_old_value,
        childList: child_list,
        subtree,
    });

    return {
        update(options: IMutationObserverOptions) {
            ({
                attributes,
                attribute_filter,
                attribute_old_value,
                character_data,
                character_data_old_value,
                child_list,
                on_mutate,
                subtree,
            } = options);

            observer.disconnect();
            observer.observe(element, {
                attributes,
                attributeFilter: attribute_filter,
                attributeOldValue: attribute_old_value,
                characterData: character_data,
                characterDataOldValue: character_data_old_value,
                childList: child_list,
                subtree,
            });
        },

        destroy() {
            observer.disconnect();
        },
    };
}
