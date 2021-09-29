import type {Writable} from "svelte/store";
import {readable, writable} from "svelte/store";

import {mutation_observer} from "../actions/mutation_observer";

import {IS_SERVER} from "../util/environment";

export type IHTMLPaletteStore = Writable<string>;

export function htmlpalette(): IHTMLPaletteStore {
    if (IS_SERVER) return readable("") as IHTMLPaletteStore;

    const {subscribe, update} = writable("", (set) => {
        function on_mutate(mutations: MutationRecord[]): void {
            const mutation = mutations.find(
                (mutation) =>
                    mutation.type === "attributes" && mutation.attributeName === "data-palette"
            );
            if (mutation) set(document.documentElement.getAttribute("data-palette") ?? "");
        }

        const action = mutation_observer(document.documentElement, {
            on_mutate,
            options: {
                attributes: true,
            },
        });

        set(document.documentElement.getAttribute("data-palette") ?? "");
        return () => action.destroy();
    });

    function set_attribute(value: string): void {
        if (value) document.documentElement.setAttribute("data-palette", value);
        else document.documentElement.removeAttribute("data-palette");
    }

    return {
        set: set_attribute,
        subscribe,

        update(callback) {
            update((old_value) => {
                const new_value = callback(old_value);

                set_attribute(new_value);
                return new_value;
            });
        },
    };
}
