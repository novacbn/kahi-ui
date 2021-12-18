import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

import type {IContextScope} from "../util/context";
import {make_scoped_context} from "../util/context";

/**
 * Represents the second optional argument of [[make_scoped_store]] for handling custom stores
 */
export type IStoreMap<ValueType, StoreType = Writable<ValueType | undefined>> = (
    default_value?: ValueType
) => StoreType;

/**
 * Represents the return value of [[make_scoped_store]]
 */
export interface IStoreScope<ValueType, StoreType = Writable<ValueType | undefined>>
    extends IContextScope<StoreType> {
    create(default_value?: ValueType): StoreType;
}

/**
 * Returns Svelte Context Scoped Svelte Store helpers
 *
 * ```javascript *
 * const MY_STORE_CONTEXT = Symbol.for("my-store");
 *
 * const {create, has, get, set} = make_scoped_store(MY_STORE_CONTEXT);
 * ```
 *
 * @param symbol
 * @returns
 */
export function make_scoped_store<ValueType, StoreType = Writable<ValueType | undefined>>(
    identifier: string,
    map_store?: IStoreMap<ValueType, StoreType>
): IStoreScope<ValueType, StoreType> {
    const {get, has, set} = make_scoped_context<StoreType>(identifier);

    return {
        get,
        has,
        set,

        create(default_value) {
            const store = map_store
                ? map_store(default_value)
                : // @ts-expect-error - HACK: for now I guess developers need to be aware of the pitfall
                  (writable<ValueType>(default_value) as StoreType);

            set(store);
            return store;
        },
    };
}
