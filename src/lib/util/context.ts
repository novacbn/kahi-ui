import {getContext, hasContext, setContext} from "svelte";

/**
 * Represents the return value of [[make_scoped_context]]
 */
export interface IContextScope<T> {
    get(): T | undefined;

    has(): boolean;

    set(value: T | undefined): void;
}

/**
 * Returns Svelte Context Scoped helpers
 *
 * ```javascript
 * const MY_CONTEXT = Symbol.for("my-context");
 *
 * const [get_context, has_context, set_context] = make_scoped_context(MY_CONTEXT);
 * ```
 *
 * @param symbol
 * @returns
 */
export function make_scoped_context<T>(symbol: Symbol): IContextScope<T> {
    return {
        get() {
            return getContext(symbol);
        },

        has() {
            return hasContext(symbol);
        },

        set(value) {
            setContext(symbol, value);
        },
    };
}
