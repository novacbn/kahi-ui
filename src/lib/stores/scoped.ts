import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

import type {IContextScope} from "../util/context";
import {make_scoped_context} from "../util/context";

/**
 * Represents the second optional argument of [[make_scoped_store]] for handling custom stores
 */
export type IStoreMap<ValueType, StoreType = Writable<ValueType>> = (
    default_value?: ValueType
) => StoreType;

/**
 * Represents the return value of [[make_scoped_store]]
 */
export interface IStoreScope<ValueType, StoreType = Writable<ValueType>>
    extends IContextScope<StoreType> {
    create(default_value?: ValueType, inherit?: boolean): StoreType | null;
}

/**
 * Returns Svelte Context Scoped Svelte Store helpers
 *
 * ```javascript
 * const {create, has, get, set} = make_scoped_store("my-store");
 * ```
 *
 * @param symbol
 * @returns
 */
export function make_scoped_store<ValueType, StoreType = Writable<ValueType>>(
    identifier: string,
    default_value?: ValueType,
    map_store?: IStoreMap<ValueType, StoreType>
): IStoreScope<ValueType, StoreType> {
    const {get, has, set} = make_scoped_context<StoreType>(identifier);

    return {
        get,
        has,
        set,

        create(value, inherit = false) {
            if (inherit && has()) return get() ?? null;

            value = value !== undefined ? value : default_value;
            if (value === undefined) return null;

            const store = map_store
                ? map_store(value)
                : // @ts-expect-error - HACK: for now I guess developers need to be aware of the pitfall
                  (writable<ValueType>(value) as StoreType);

            set(store);
            return store;
        },
    };
}
