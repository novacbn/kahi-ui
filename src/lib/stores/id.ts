import {getContext, setContext} from "svelte";
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export type IIDStore = Writable<string>;

export const CONTEXT_ID = Symbol.for("kahi-ui-id");

export function id(default_value: string): IIDStore {
    return writable(default_value);
}

export function get_id_context(context_id: Symbol = CONTEXT_ID): IIDStore | undefined {
    return getContext<IIDStore | undefined>(context_id);
}

export function make_id_context(default_value: string, context_id: Symbol = CONTEXT_ID): IIDStore {
    const store = id(default_value);

    setContext<IIDStore>(context_id, store);
    return store;
}
