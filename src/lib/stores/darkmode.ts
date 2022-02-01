import type {Readable} from "svelte/store";
import {derived, readable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

import {htmlpalette} from "./htmlpalette";
import {prefersdark} from "./prefersscheme";

export type IDarkModeStore = Readable<boolean>;

export function darkmode(): IDarkModeStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    const dark_store = prefersdark();
    const palette_store = htmlpalette();

    return derived([dark_store, palette_store], ([$dark_store, $palette_store]) => {
        return (!$palette_store && $dark_store) || $palette_store === "dark";
    });
}
