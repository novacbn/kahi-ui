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
    binds: ["enter", "space"],
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
