import {writable} from "svelte-local-storage-store";
import type {Writable} from "svelte/store";
import {readable} from "svelte/store";

export type IPreferenceThemeStore = Writable<"dark" | "light" | "">;

export function preferencetheme(): IPreferenceThemeStore {
    // @ts-expect-error - HACK: Readable allows for optional callback
    if (typeof window === "undefined") return readable("");

    return writable<"dark" | "light" | "">("preferences.theme", "");
}
