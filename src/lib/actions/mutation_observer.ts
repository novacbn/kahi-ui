import type {IActionHandle} from "./actions";

/**
 * Represents the Svelte Action handle returned by [[mutation_observer]]
 */
export type IMutationObserverHandle = Required<IActionHandle<IMutationObserverOptions>>;

/**
 * Represents the typing for the [[IMutationObserverOptions.on_mutate]] callback
 */
export type IMutationObserverCallback = (mutations: MutationRecord[]) => void;

/**
 * Represents the options passable to the [[mutation_observer]] Svelte Action
 */
export interface IMutationObserverOptions {
    /**
     * Set to true if mutations to target's attributes are to be observed. Can be omitted if
     * attributeOldValue or attributeFilter is specified
     */
    attributes?: MutationObserverInit["attributes"];

    /**
     * Set to a list of attribute local names (without namespace) if not all attribute mutations need
     * to be observed and attributes is true or omitted
     */
    attribute_filter?: MutationObserverInit["attributeFilter"];

    /**
     * Set to true if attributes is true or omitted and target's attribute value before the
     * mutation needs to be recorded
     */
    attribute_old_value?: MutationObserverInit["attributeOldValue"];

    /**
     * Set to true if mutations to target's data are to be observed. Can be omitted if
     * characterDataOldValue is specified
     */
    character_data?: MutationObserverInit["characterData"];

    /**
     * Set to true if characterData is set to true or omitted and target's data before the
     * mutation needs to be recorded
     */
    character_data_old_value?: MutationObserverInit["characterDataOldValue"];

    /**
     * Set to true if mutations to target's children are to be observed
     */
    child_list?: MutationObserverInit["childList"];

    /**
     * Represents the event callback called whenever target element or children (if [[IMutationObserverOptions.child_list]] is `true`) has mutation
     */
    on_mutate: IMutationObserverCallback;

    /**
     * Set to true if mutations to not just target, but also target's descendants are to be observed.
     */
    subtree?: MutationObserverInit["subtree"];
}

/**
 * Represents a Svelte Action that encapsulates the [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
 * Web API to easily integrate into Svelte
 *
 * @param element
 * @param options
 * @returns
 */
export function mutation_observer(
    element: HTMLElement,
    options: IMutationObserverOptions
): IMutationObserverHandle {
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
