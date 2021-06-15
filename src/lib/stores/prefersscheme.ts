import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

export type IPrefersSchemeStore = Readable<boolean>;

export function prefersscheme(scheme: "dark" | "light"): IPrefersSchemeStore {
    // @ts-expect-error - HACK: Callback function is optional
    if (!IS_BROWSER) return readable<boolean>(false);

    return readable<boolean>(false, (set) => {
        function on_change(event: MediaQueryListEvent) {
            set(event.matches);
        }

        const query = matchMedia(`(prefers-color-scheme: ${scheme})`);
        set(query.matches);

        query.addEventListener("change", on_change);
        return () => query.removeEventListener("change", on_change);
    });
}

export const prefersdark = () => prefersscheme("dark");

export const preferslight = () => prefersscheme("light");
