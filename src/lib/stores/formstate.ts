import {getContext, setContext} from "svelte";
import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";

export type IFormStateValue = string | string[];

export interface IFormStateStore extends Writable<IFormStateValue> {
    clear(): void;

    push_value(value: string): void;

    remove_value(value: string): void;
}

export const CONTEXT_FORM_STATE = Symbol.for("kahi-ui-form-state");

export function formstate(default_value: IFormStateValue): IFormStateStore {
    const store = writable(default_value);
    const {set, subscribe, update} = store;

    return {
        set,
        subscribe,
        update,

        clear() {
            set("");
        },

        push_value(value) {
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

        remove_value(value) {
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

export function get_formstate_context(
    context_id: Symbol = CONTEXT_FORM_STATE
): IFormStateStore | undefined {
    return getContext<IFormStateStore | undefined>(context_id);
}

export function make_formstate_context(
    default_value: IFormStateValue,
    context_id: Symbol = CONTEXT_FORM_STATE
): IFormStateStore {
    const store = formstate(default_value);

    setContext<IFormStateStore>(context_id, store);
    return store;
}
