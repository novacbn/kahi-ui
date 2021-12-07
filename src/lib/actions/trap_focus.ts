import {query_focusable_element} from "../util/element";

import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[trap_focus]]
 */
export type ITrapFocusAction = IAction<Document | HTMLElement, ITrapFocusOptions, ITrapFocusHandle>;

/**
 * Represents the Svelte Action handle returned by [[trap_focus]]
 */
export type ITrapFocusHandle = Required<IActionHandle<ITrapFocusOptions>>;

/**
 * Represents the options passable to the [[trap_focus]] Svelte Action
 */
export interface ITrapFocusOptions {
    /**
     * Represents the first element to wrap back around whenever focus escapes attached element
     */
    first?: HTMLElement | string | null;

    /**
     * Represents if focus trapping is enabled for the attached element
     */
    enabled?: boolean;

    /**
     * Represents the last element used to as a landmark to detect whenever the focus
     * "escapes" the attached element
     */
    last?: HTMLElement | string | null;
}

/**
 * Listens to the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) for when
 * the "Tab" or "Shift+Tab" key combinations are pressed, focusing behaviors work in normal sequential order. But
 * when the next / prev element to be focused is outside of the attached element, the first / last focusable element
 * found or [[ITrapFocusOptions.first]] / [[ITrapFocusOptions.last]] if configured, instead
 *
 * @param element
 * @param options
 * @returns
 */
export const trap_focus: ITrapFocusAction = (element, options) => {
    let {first, enabled, last} = options;

    function on_key_down(event: KeyboardEvent): void {
        if (!enabled || event.key !== "Tab") return;

        const first_element = query_target(false);
        const last_element = query_target(true);

        if (!first_element || !last_element) return;

        const {activeElement: active_element} = document;
        if (event.shiftKey) {
            if (active_element === first_element || !element.contains(active_element)) {
                event.preventDefault();
                last_element.focus();
            }
        } else {
            if (active_element === last_element || !element.contains(active_element)) {
                event.preventDefault();
                first_element.focus();
            }
        }
    }

    function query_target(is_last: boolean): HTMLElement | null {
        const target = is_last ? last : first;
        if (target) {
            return typeof target === "string" ? element.querySelector<HTMLElement>(target) : target;
        }

        return query_focusable_element(element, {last: is_last});
    }

    window.addEventListener("keydown", on_key_down);

    return {
        destroy() {
            window.removeEventListener("keydown", on_key_down);
        },

        update(options) {
            ({first, enabled, last} = options);
        },
    };
};
