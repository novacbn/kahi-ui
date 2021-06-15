import {getContext, setContext} from "svelte";
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export type IIDStore = Writable<string>;

export const CONTEXT_ID = Symbol.for("kahi-ui-id");

export function id(default_value: string): IIDStore {
    return writable(default_value);
}

export function get_id_context(): IIDStore {
    const store = getContext<Writable<string> | undefined>(CONTEXT_ID);
    if (!store) {
        throw new Error("bad dispatch to 'get_id_context' (Svelte Context not previously set)");
    }

    return store;
}

export function make_id_context(default_value: string): IIDStore {
    const store = id(default_value);

    setContext<IIDStore>(CONTEXT_ID, store);
    return store;
}
