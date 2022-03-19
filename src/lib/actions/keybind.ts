import {pick} from "../util/functional";
import type {IAction, IActionHandle} from "./actions";

/**
 * Represents the Svelte Action initializer signature for [[keybind]]
 */
export type IKeybindAction = IAction<Document | Element, IKeybindOptions, IKeybindHandle>;

/**
 * Represents an already predefined shortcut keybind
 */
export type IKeybindShortcutAction = (
    element: Document | HTMLElement,
    {on_bind}: {on_bind: IKeybindCallback}
) => IKeybindHandle;

/**
 * Represents the Svelte Action handle returned by [[keybind]]
 */
export type IKeybindHandle = Required<IActionHandle<IKeybindOptions>>;

/**
 * Represents the typing for the [[IKeybindOptions.on_bind]] callback
 */
export type IKeybindCallback = (event: IKeybindEvent) => void;

interface IParsedBinds {
    binds: {bind: string; keys: Set<string>}[];
    keys: Set<string>;
}

/**
 * Represents the [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
 * supplied to [[IKeybindOptions.on_bind]] when dispatched
 */
export interface IKeybindEvent extends CustomEvent {
    detail: {
        /**
         * Represents if the keybind combination was activated or deactivated
         */
        active: boolean;

        /**
         * Represents when activated and [[IKeybindOptions.repeat]] is `true`, if
         * the keybind is being continuously held down
         */
        repeat: boolean;
    };
}

/**
 * Represents the options passable to the [[keybind]] Svelte Action
 */
export interface IKeybindOptions {
    /**
     * Represents the key combinations that trigger the bind
     *
     * **NOTE**: `keybind` accepts lowercase [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) keys
     *
     * ```javascript
     * import {keybind} from "@kahi-ui/framework";
     *
     * // Supports single key combinations
     * const action = keybind(..., {binds: "control+s"});
     *
     * // Also supports multiple key combinations for a single bind
     * const action = keybind(..., {binds: ["control+k", "control+/"]});
     * ```
     */
    binds: string | string[];

    /**
     * Represents if the keybind callback is called multiple times when
     * the combination is continuously held down
     *
     * ```javascript
     * import {keybind} from "@kahi-ui/framework";
     *
     * function on_bind(event) {
     *     if (!event.detail.active) console.log("I was deactivated!");
     *     else if (!event.detail.repeat) console.log("I was activated!");
     *
     *     console.log("I was activated, again!");
     * }
     *
     * const action = keybind(..., {repeat: true, on_bind});
     * ```
     */
    repeat?: boolean;

    /**
     * Represents whenever [[IKeybindOptions.repeat]] is `true`, how many
     * times in milliseconds should the [[IKeybindOptions.on_bind]] callback should
     * be called on repeats
     *
     * **DEFAULT**: 0ms
     *
     * ```javascript
     * import {keybind} from "@kahi-ui/framework";
     *
     * const action = keybind(..., {repeat: true, repeat_throttle: 100});
     * ```
     */
    repeat_throttle?: number;

    /**
     * Represents the callback being called whenever the keybind is activated / deactivated
     *
     * ```javascript
     * import {keybind} from "@kahi-ui/framework";
     *
     * function on_bind(event) {
     *     console.log("The bind was", event.detail.active ? "activated!" : "deactivated!");
     * }
     *
     * const action = keybind(..., {on_bind});
     * ```
     */
    on_bind: IKeybindCallback;

    /**
     * Represents if throttled repeat calls should have automatic
     * cancellation (e.g. `event.preventDefault` / `event.stopPropagation`)
     */
    throttle_cancel?: boolean;
}

/**
 *
 * @internal
 *
 * @param binds
 * @returns
 */
function parse_binds(binds: string | string[]): IParsedBinds {
    if (typeof binds === "string") binds = [binds];

    const bind_map = binds.map((bind, index) => {
        const keys = split_keys(bind);

        return {
            bind: bind.toLowerCase(),
            keys: new Set(keys),
        };
    });

    const key_lookup = new Set(bind_map.map((bind, index) => Array.from(bind.keys.keys())).flat());

    return {
        binds: bind_map,
        keys: key_lookup,
    };
}

/**
 *
 * @internal
 *
 * @param bind
 * @returns
 */
function split_keys(bind: string): string[] {
    return bind
        .split(/(\w+|\+)\+/)
        .filter((key) => !!key)
        .map((key) => key.toLowerCase());
}

/**
 * Listens to [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) and
 * [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) events whenever the
 * targetted element has focus. Whenever a keybind combination passed to [[IKeybindOptions.binds]] is
 * pressed, [[IKeybindOptions.on_bind]] is then dispatched
 *
 * ```svelte
 * <script>
 *     import {keybind} from "@kahi-ui/framework";
 *
 *     function on_bind(event) {
 *         console.log("The bind was", event.detail.active ? "activated!" : "deactivated!");
 *     }
 * </script>
 *
 * <input type="text" placeholder="Hello World" use:keybind={{binds: "control+enter", on_bind}} />
 * ```
 *
 * @param element
 * @param options
 * @returns
 */
export const keybind: IKeybindAction = (element, options) => {
    let {binds, repeat = false, repeat_throttle = 0, throttle_cancel = false, on_bind} = options;

    let {binds: bind_map, keys: key_lookup} = parse_binds(binds);
    let key_state: Map<string, boolean> = new Map();
    let previous_active: boolean = false;
    let previous_timestamp: number = Number.MIN_SAFE_INTEGER;

    function is_active(): boolean {
        for (const bind of bind_map) {
            let active = true;
            for (const key of bind.keys) {
                if (!key_state.get(key)) {
                    active = false;
                    break;
                }
            }

            if (active) return true;
        }

        return false;
    }

    function make_key_listener(is_down: boolean): (event: KeyboardEvent) => void {
        return (event) => {
            const key = event.key.toLowerCase();
            if (!key_lookup.has(key) || (event.repeat && !repeat)) return;

            key_state.set(key, is_down);
            const active = is_active();

            if (previous_active !== active || (active && repeat)) {
                const detail: IKeybindEvent["detail"] = {active, repeat: event.repeat};
                const custom_event: IKeybindEvent = new CustomEvent("bind", {
                    cancelable: true,
                    detail,
                });

                const timestamp = Date.now();
                if (
                    event.repeat &&
                    repeat &&
                    repeat_throttle > 0 &&
                    timestamp - previous_timestamp < repeat_throttle
                ) {
                    if (throttle_cancel) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                } else {
                    on_bind(custom_event);

                    if (custom_event.cancelBubble) event.stopPropagation();
                    if (custom_event.defaultPrevented) event.preventDefault();

                    previous_timestamp = timestamp;
                }

                previous_active = active;
            }
        };
    }

    const on_key_down = make_key_listener(true);
    const on_key_up = make_key_listener(false);

    // @ts-expect-error - HACK: `Document` just doesn't have the event properly typed
    element.addEventListener("keydown", on_key_down);
    // @ts-expect-error
    element.addEventListener("keyup", on_key_up);

    return {
        destroy() {
            // @ts-expect-error
            element.removeEventListener("keydown", on_key_down);
            // @ts-expect-error
            element.removeEventListener("keyup", on_key_up);
        },

        update(options) {
            ({
                binds,
                repeat = false,
                repeat_throttle = 0,
                throttle_cancel = false,
                on_bind,
            } = options);

            ({binds: bind_map, keys: key_lookup} = parse_binds(binds));

            // NOTE: Need to remove previous keys that are now unbound, to clean up memory
            key_state = pick(key_state, key_lookup);
        },
    };
};

/**
 * Returns a `keybind`-like factory with preconfigured options
 * @param factory_options
 * @returns
 */
export function make_keybind_shortcut(
    factory_options: Omit<IKeybindOptions, "on_bind">
): IKeybindShortcutAction {
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
export const action_activate = make_keybind_shortcut({
    binds: ["enter", " "],
});

/**
 * Represents a keybind used for closing / exiting the currently active Component
 * @param element
 * @param options
 * @returns
 */
export const action_exit = make_keybind_shortcut({
    binds: ["escape"],
});

/**
 * Represents a keybind used for submitting the currently focused element
 * @param element
 * @param options
 * @returns
 */
export const action_submit = make_keybind_shortcut({
    binds: ["enter"],
});

/**
 * Represents a keybind used for navigating to the next available navigation option downwards
 * @param element
 * @param options
 * @returns
 */
export const navigate_down = make_keybind_shortcut({
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
export const navigate_left = make_keybind_shortcut({
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
export const navigate_right = make_keybind_shortcut({
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
export const navigate_up = make_keybind_shortcut({
    binds: ["arrowup"],
    repeat: true,
    repeat_throttle: 250,
});
