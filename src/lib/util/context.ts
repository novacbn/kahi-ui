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
 * const [get_context, has_context, set_context] = make_scoped_context("my-context");
 * ```
 *
 * @param symbol
 * @returns
 */
export function make_scoped_context<T>(identifier: string): IContextScope<T> {
    const symbol = Symbol.for(`kahi-ui-${identifier}`);

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
