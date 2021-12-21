import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";

/**
 * Represents the values containable in [[IStateStore]]
 */
export type IStateValue = string | string[];

/**
 * Represents the Svelte Store created by [[state]]
 */
export interface IStateStore extends Writable<IStateValue> {
    /**
     * Resets the Svelte Store to an empty string
     */
    clear(): void;

    /**
     * Pushes a value to the Svelte Store
     *
     * **NOTE**: If the Store is an empty string, then the value is set as a string
     * **NOTE**: If the Store is a non-empty string, then the Store is set to an Array containing previous value and new value
     * **NOTE**: If the Store is an array, then the value is pushed into the array
     *
     * @param value
     */
    push(value: string): void;

    /**
     * Removes a value from the Svelte Store
     *
     * **NOTE**: If the Store is an array, then the value is removed. If the array is N = 1, then the Store is set to a string with remaining value
     * **NOTE**: If the Store is a non-empty string, then the Store is set to an empty string
     * @param value
     */
    remove(value: string): void;
}

/**
 *
 * @param default_value
 * @returns
 */
export function state(default_value: IStateValue = ""): IStateStore {
    const store = writable(default_value);
    const {set, subscribe, update} = store;

    return {
        set,
        subscribe,
        update,

        clear() {
            set("");
        },

        push(value) {
            let cache = get(store);
            if (cache.includes(value)) return;

            if (cache) {
                if (typeof cache === "string") cache = [cache, value];
                else cache.push(value);

                set([...cache]);
            } else {
                cache = value;
                set(value);
            }
        },

        remove(value) {
            let cache = get(store);
            if (cache) {
                if (typeof cache === "string") {
                    if (cache === value) set("");
                } else {
                    const index = cache.indexOf(value);
                    if (index > -1) {
                        cache = [...cache];
                        cache.splice(index, 1);

                        set(cache.length > 1 ? cache : cache[0]);
                    }
                }
            }
        },
    };
}
