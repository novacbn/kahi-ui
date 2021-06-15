import type SvelteComponentDev from "*.svelte";
import type {SvelteComponent} from "svelte";
import {getContext, setContext} from "svelte";
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export type IComponentStore = Writable<string | SvelteComponent | SvelteComponentDev>;

export const CONTEXT_COMPONENT = Symbol.for("kahi-ui-component");

export function component(
    default_value: string | SvelteComponent | SvelteComponentDev
): IComponentStore {
    return writable(default_value);
}

export function get_component_context(): IComponentStore {
    const store = getContext<IComponentStore | undefined>(CONTEXT_COMPONENT);
    if (!store) {
        throw new Error(
            "bad dispatch to 'get_component_context' (Svelte Context not previously set)"
        );
    }

    return store;
}

export function make_component_context(
    default_value: string | SvelteComponent | SvelteComponentDev
): IComponentStore {
    const store = component(default_value);

    setContext<IComponentStore>(CONTEXT_COMPONENT, store);
    return store;
}
