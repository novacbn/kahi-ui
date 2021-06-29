import {getContext, setContext} from "svelte";
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export type IStateStore = Writable<boolean>;

export const CONTEXT_STATE = Symbol.for("kahi-ui-state");

export function state(default_value: boolean): IStateStore {
    return writable<boolean>(default_value);
}

export function get_state_context(): IStateStore | undefined {
    return getContext<IStateStore | undefined>(CONTEXT_STATE);
}

export function make_state_context(default_value: boolean): IStateStore {
    const store = state(default_value);

    setContext<IStateStore>(CONTEXT_STATE, store);
    return store;
}
