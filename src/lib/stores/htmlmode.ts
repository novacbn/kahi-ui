import type {Writable} from "svelte/store";
import {derived, readable, writable} from "svelte/store";

import {mutation_observer} from "../actions/mutation_observer";

import {IS_SERVER} from "../util/environment";

type IHTMLModeValues = "dark" | "light" | "";

export type IHTMLModeStore = Writable<IHTMLModeValues>;

function get_html_mode(): IHTMLModeValues {
    const mode = document.documentElement.getAttribute("data-mode");
    if (mode && mode !== "dark" && mode !== "light") {
        throw new TypeError(
            `bad dispatch to 'get_html_mode' (value '${mode}' from '<html data-mode>' is not valid)`
        );
    }

    // HACK: By using an empty string here, TypeScript thinks that it is
    // returning untyped strings here
    return (mode ?? "") as IHTMLModeValues;
}

export function htmlmode(): IHTMLModeStore {
    if (IS_SERVER) return readable("") as IHTMLModeStore;

    const {subscribe, update} = writable<IHTMLModeValues>("", (set) => {
        function on_mutate(mutations: MutationRecord[]): void {
            const mutation = mutations.find(
                (mutation) =>
                    mutation.type === "attributes" && mutation.attributeName === "data-mode"
            );

            if (mutation) {
                set(get_html_mode());
            }
        }

        const action = mutation_observer(document.documentElement, {
            on_mutate,
            attributes: true,
        });

        set(get_html_mode());
        return () => action.destroy();
    });

    function set_attribute(value: string): void {
        if (value) document.documentElement.setAttribute("data-mode", value);
        else document.documentElement.removeAttribute("data-mode");
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

export const htmldark = () => derived(htmlmode(), (mode) => mode === "dark");

export const htmllight = () => derived(htmlmode(), (mode) => mode === "light");
