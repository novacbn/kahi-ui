import {action_activate} from "../util/keybind";
import type {IAction, IActionHandle} from "./actions";
import type {IKeybindEvent, IKeybindHandle} from "./keybind";

/**
 * Represents the Svelte Action initializer signature for [[behavior_button]]
 */
export type IBehaviorButtonAction = IAction<
    HTMLElement,
    IBehaviorButtonOptions,
    IBehaviorButtonHandle
>;

/**
 * Represents the Svelte Action handle returned by [[behavior_button]]
 */
export type IBehaviorButtonHandle = Required<IActionHandle<IBehaviorButtonOptions>>;

/**
 * Represents the options passable to the [[behavior_button]] Svelte Action
 */
export interface IBehaviorButtonOptions {
    /**
     * Represents if button behavior is to be emulated
     */
    enabled?: boolean;
}

/**
 * Emulates Button behavior on the given element, e.g. spacebar to click
 *
 * @param element
 * @param options
 * @returns
 */
export const behavior_button: IBehaviorButtonAction = (element, options) => {
    let {enabled} = options;

    let activate_handle: IKeybindHandle | null = null;

    function on_bind(event: IKeybindEvent): void {
        if (!event.detail.active) return;

        event.preventDefault();
        element.click();
    }

    function attach_events(): void {
        if (!activate_handle) activate_handle = action_activate(element, {on_bind});
    }

    function detach_events(): void {
        if (activate_handle) {
            activate_handle.destroy();
            activate_handle = null;
        }
    }

    if (enabled) attach_events();

    return {
        destroy() {
            if (enabled) detach_events();
        },

        update(options: IBehaviorButtonOptions) {
            ({enabled} = options);

            if (enabled) attach_events();
            else detach_events();
        },
    };
};
