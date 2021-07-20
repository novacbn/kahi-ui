import type {Writable} from "svelte/store";
import {readable, writable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

export type IAttributeStore = Writable<string>;

export function attribute(
    element: HTMLElement,
    attribute: string,
    default_value?: string
): IAttributeStore {
    // @ts-expect-error - HACK: Callback function is optional
    if (!IS_BROWSER) return readable(default_value ?? "");
    if (default_value) element.setAttribute(attribute, default_value);

    const {set, subscribe, update} = writable<string>(default_value ?? "", (set) => {
        function set_value() {
            const value = element.getAttribute(attribute);

            set(value ?? "");
        }

        const observer = new MutationObserver((mutations, observer) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes" && mutation.attributeName === attribute)
                    set_value();
            }
        });

        set_value();

        observer.observe(element, {attributes: true});
        return () => observer.disconnect();
    });

    return {
        subscribe,

        set(value) {
            if (value) element.setAttribute(attribute, value);
            else element.removeAttribute(attribute);

            set(value);
        },

        update(callback) {
            update((value) => {
                value = callback(value);

                if (value) element.setAttribute(attribute, value);
                else element.removeAttribute(attribute);

                return value;
            });
        },
    };
}

export const htmlpalette = () =>
    !IS_BROWSER
        ? (readable("") as IAttributeStore)
        : attribute(document.documentElement, "data-palette", "");
