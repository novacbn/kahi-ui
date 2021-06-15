import type {Readable} from "svelte/store";
import {derived} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

import {attribute} from "./attribute";
import {prefersdark} from "./prefersscheme";

export type IDarkModeStore = Readable<boolean>;

export function darkmode(): IDarkModeStore {
    // @ts-expect-error - Callback function is optional
    if (!IS_BROWSER) return readable<boolean>(false);

    const attribute_store = attribute(document.documentElement, "data-palette");
    const dark_store = prefersdark();

    return derived([attribute_store, dark_store], ([$attribute_store, $dark_store]) => {
        return (!$attribute_store && $dark_store) || $attribute_store === "dark";
    });
}
