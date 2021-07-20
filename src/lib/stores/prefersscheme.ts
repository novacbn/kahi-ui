import type {Readable} from "svelte/store";

import {mediaquery} from "./mediaquery";

export type IPrefersSchemeStore = Readable<boolean>;

function format_scheme_query(scheme: string): string {
    return `(prefers-color-scheme: ${scheme})`;
}

export function prefersscheme(scheme: "dark" | "light"): IPrefersSchemeStore {
    const query = format_scheme_query(scheme);

    return mediaquery(query);
}

export const prefersdark = () => prefersscheme("dark");

export const preferslight = () => prefersscheme("light");
