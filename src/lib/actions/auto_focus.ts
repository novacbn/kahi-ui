import {query_focusable_element} from "../util/element";

import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[auto_focus]]
 */
export type IAutoFocusAction = IAction<Document | HTMLElement, IAutoFocusOptions, IAutoFocusHandle>;

/**
 * Represents the Svelte Action handle returned by [[auto_focus]]
 */
export type IAutoFocusHandle = Omit<Required<IActionHandle<IAutoFocusOptions>>, "destroy">;

/**
 * Represents the options passable to the [[auto_focus]] Svelte Action
 */
export interface IAutoFocusOptions {
    /**
     * Represents if auto focusing is enabled for the attached element
     */
    enabled?: boolean;

    /**
     * Represents the initial element to focus on
     */
    target?: HTMLElement | string | null;
}

/**
 * When [[IAutoFocusOptions.enabled]] is set to `true`, focuses the first found
 * focusable element or the [[IAutoFocusOptions.target]] option if configured. Returns
 * focus to the previously focused element when disabled
 *
 * @param element
 * @param options
 * @returns
 */
export const auto_focus: IAutoFocusAction = (element, options) => {
    let {enabled, target} = options;
    let previous_element: HTMLElement | null = null;

    function capture_focus(): void {
        const queried_element = query_target();
        if (queried_element) {
            previous_element = document.activeElement as HTMLElement;

            queried_element.focus();
        }
    }

    function query_target(): HTMLElement | null {
        if (target) {
            return typeof target === "string" ? element.querySelector<HTMLElement>(target) : target;
        }

        return query_focusable_element(element);
    }

    async function restore_focus(): Promise<void> {
        if (previous_element) {
            previous_element.focus();
            previous_element = null;

            return;
        }

        const active_element = document.activeElement as HTMLElement | null;
        if (active_element) active_element.blur();
    }

    if (enabled) capture_focus();

    return {
        update(options) {
            ({enabled, target} = options);

            if (enabled) capture_focus();
            else restore_focus();
        },
    };
};
