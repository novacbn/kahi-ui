import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

import type {IContextScope} from "./context";
import {make_scoped_context} from "./context";

/**
 * Represents the return value of [[make_scoped_store]]
 */
export interface IStoreScope<ValueType, StoreType = Writable<ValueType>>
    extends IContextScope<StoreType> {
    create(default_value: ValueType): StoreType;
}

/**
 * Returns Svelte Context Scoped Svelte Store helpers
 *
 * ```javascript *
 * const MY_STORE_CONTEXT = Symbol.for("my-store");
 *
 * const [create_store, get_context, has_context, set_context] = make_scoped_store(MY_STORE_CONTEXT);
 * ```
 *
 * @param symbol
 * @returns
 */
export function make_scoped_store<ValueType, StoreType = Writable<ValueType>>(
    symbol: Symbol,
    make_store?: (default_value: ValueType) => StoreType
): IStoreScope<ValueType, StoreType> {
    const {get, has, set} = make_scoped_context<StoreType>(symbol);

    return {
        get,
        has,
        set,

        create(default_value) {
            const store = make_store
                ? make_store(default_value)
                : // @ts-expect-error - HACK: for now I guess developers need to be aware of the pitfall
                  (writable<ValueType>(default_value) as StoreType);

            set(store);
            return store;
        },
    };
}
