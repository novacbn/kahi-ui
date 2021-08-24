import {throttle} from "../util/functional";

import type {IActionHandle} from "./actions";

/**
 * Represents the Svelte Action handle returned by [[keybind]] is called
 */
export type IKeybindAction = IActionHandle<IKeybindOptions>;

/**
 * Represents the typing for the [[IKeybindOptions.on_bind]] callback
 */
export type IKeybindCallback = (event: IKeybindEvent) => void;

interface IBindState {
    is_active(): boolean;

    update(key: string, state: boolean): void;
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
 * Represents the options passable to the [[click_outside]] Svelte Action
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
}

/**
 * Holds the internal active state for multiple keybind combinations, when updated
 *
 * ```javascript
 * const state = bindstate(["control+k", "control+/"]);
 *
 * // We're updating the internal state that `ctrl` key was pressed
 * state.update("control", true);
 *
 * // However, the bind is still not active
 * console.log(state.is_active()); // `false`
 *
 * // Now by telling the bind state that the `k` key was pressed
 * state.update("k", true);
 *
 * // We can see the bind is now active
 * console.log(state.is_active()); // `true`
 *
 * // And then, we turn off the bind again by saying the `ctrl` key was released
 * state.update("control", false);
 * console.log(state.is_active()); // `false`
 * ```
 *
 * @internal
 *
 * @param binds
 * @returns
 */
function bindstate(binds: string | string[]): IBindState {
    const lookups = (typeof binds === "string" ? [binds] : binds).map((bind) => {
        const entries = bind.split("+").map<[string, boolean]>((key) => [key, false]);

        return new Map(entries);
    });

    return {
        is_active() {
            return (
                lookups.find((lookup) => {
                    for (const [, active] of lookup) {
                        if (!active) return false;
                    }

                    return true;
                }) !== undefined
            );
        },

        update(key, state) {
            key = key.toLowerCase();

            for (const lookup of lookups) {
                if (lookup.has(key)) lookup.set(key, state);
            }
        },
    };
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
export function keybind(element: HTMLElement, options: IKeybindOptions): IKeybindAction {
    let {binds, repeat = false, repeat_throttle = 0, on_bind} = options;

    let cache = false;
    let state = bindstate(binds);
    let throttled_on_bind = repeat_throttle > 0 ? throttle(on_bind, repeat_throttle) : on_bind;

    function make_key_listener(is_down: boolean): (event: KeyboardEvent) => void {
        return (event) => {
            if (event.repeat && !repeat) return;
            state.update(event.key, is_down);

            const active = state.is_active();
            if (cache !== active || repeat) {
                const detail: IKeybindEvent["detail"] = {active, repeat: event.repeat};
                const custom_event: IKeybindEvent = new CustomEvent("bind", {
                    cancelable: true,
                    detail,
                });

                (event.repeat ? throttled_on_bind : on_bind)(custom_event);

                if (custom_event.cancelBubble) custom_event.stopPropagation();
                if (custom_event.defaultPrevented) custom_event.preventDefault();

                cache = active;
            }
        };
    }

    const on_key_down = make_key_listener(true);
    const on_key_up = make_key_listener(false);

    element.addEventListener("keydown", on_key_down);
    element.addEventListener("keyup", on_key_up);

    return {
        destroy() {
            element.removeEventListener("keydown", on_key_down);
            element.removeEventListener("keyup", on_key_up);
        },

        update(options) {
            ({binds, repeat = false, repeat_throttle = 0, on_bind} = options);

            state = bindstate(binds);
            throttled_on_bind = repeat_throttle > 0 ? throttle(on_bind, repeat_throttle) : on_bind;
        },
    };
}
