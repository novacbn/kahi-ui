import type {IKeybindCallback, IKeybindHandle} from "../actions/keybind";
import {keybind} from "../actions/keybind";

/**
 * Represents an already predefined shortcut keybind
 */
type IKeybindShortcut = (
    element: Document | HTMLElement,
    {on_bind}: {on_bind: IKeybindCallback}
) => IKeybindHandle;

/**
 * Represents a keybind used for focusing on the next available focusable element
 * @param element
 * @param options
 * @returns
 */
export const focus_next: IKeybindShortcut = (element, {on_bind}) =>
    keybind(element, {
        on_bind,
        binds: ["tab", "shift+tab"],
        repeat: true,
    });
