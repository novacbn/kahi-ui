import {query_first_focusable_element, query_last_focusable_element} from "../util/element";
import {focus_next} from "../util/keybind";

import type {IAction, IActionHandle} from "./actions";
import type {IKeybindEvent} from "./keybind";

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
     * Represents if focus trapping is enabled for the attached element
     */
    enabled?: boolean;

    /**
     * Represents the initial element to wrap back around whenever
     */
    target?: HTMLElement | string | null;
}

/**
 * Listens to the [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) for when loses
 * complete focus (i.e. all child elements are no focused), refocusing to the very first focusable or targeted element
 *
 * @param element
 * @param options
 * @returns
 */
export const trap_focus: ITrapFocusAction = (element, options) => {
    let {enabled, target} = options;

    function on_bind(event: IKeybindEvent): void {
        if (!enabled) return;

        if (!event.detail.active) return;

        const first_element = query_target();
        if (!first_element) return;

        const {activeElement: active_element} = document;
        const last_element = query_last_focusable_element(element);

        if (active_element === last_element || !element.contains(active_element)) {
            first_element.focus();
            event.preventDefault();
        }
    }

    function query_target(): HTMLElement | null {
        if (target) {
            return typeof target === "string" ? element.querySelector<HTMLElement>(target) : target;
        }

        return query_first_focusable_element(element);
    }

    const handle = focus_next(document, {on_bind});

    return {
        destroy() {
            handle.destroy();
        },

        update(options: Partial<ITrapFocusOptions>) {
            ({enabled, target} = options);
        },
    };
};
