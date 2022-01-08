import type {IKeybindCallback, IKeybindHandle, IKeybindOptions} from "../actions/keybind";
import {keybind} from "../actions/keybind";

/**
 * Represents an already predefined shortcut keybind
 */
type IKeybindShortcut = (
    element: Document | HTMLElement,
    {on_bind}: {on_bind: IKeybindCallback}
) => IKeybindHandle;

/**
 * Returns a `keybind`-like factory with preconfigured options
 * @param factory_options
 * @returns
 */
function make_shortcut_factory(
    factory_options: Omit<IKeybindOptions, "on_bind">
): IKeybindShortcut {
    return (element, {on_bind}) => {
        const {destroy, update} = keybind(element, {...factory_options, on_bind});

        return {
            destroy,

            update({on_bind}) {
                update({...factory_options, on_bind});
            },
        };
    };
}

/**
 * Represents a keybind used for activating the currently focused element
 * @param element
 * @param options
 * @returns
 */
export const action_activate = make_shortcut_factory({
    binds: ["enter", " "],
});

/**
 * Represents a keybind used for closing / exiting the currently active Component
 * @param element
 * @param options
 * @returns
 */
export const action_exit = make_shortcut_factory({
    binds: ["escape"],
});

/**
 * Represents a keybind used for submitting the currently focused element
 * @param element
 * @param options
 * @returns
 */
export const action_submit = make_shortcut_factory({
    binds: ["enter"],
});

/**
 * Represents a keybind used for navigating to the next available navigation option downwards
 * @param element
 * @param options
 * @returns
 */
export const navigate_down = make_shortcut_factory({
    binds: ["arrowdown"],
    repeat: true,
    repeat_throttle: 250,
});

/**
 * Represents a keybind used for navigating to the next available navigation option leftwards
 * @param element
 * @param options
 * @returns
 */
export const navigate_left = make_shortcut_factory({
    binds: ["arrowleft"],
    repeat: true,
    repeat_throttle: 250,
});

/**
 * Represents a keybind used for navigating to the next available navigation option rightwards
 * @param element
 * @param options
 * @returns
 */
export const navigate_right = make_shortcut_factory({
    binds: ["arrowright"],
    repeat: true,
    repeat_throttle: 250,
});

/**
 * Represents a keybind used for navigating to the next available navigation option upwards
 * @param element
 * @param options
 * @returns
 */
export const navigate_up = make_shortcut_factory({
    binds: ["arrowup"],
    repeat: true,
    repeat_throttle: 250,
});
