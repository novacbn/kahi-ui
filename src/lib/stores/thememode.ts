import type {Readable} from "svelte/store";
import {derived, readable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

import {htmlmode} from "./htmlmode";
import {prefersdark, preferslight} from "./prefersscheme";

export type IThemeModeStore = Readable<boolean>;

export function darkmode(): IThemeModeStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    const dark_preference = prefersdark();
    const html_mode = htmlmode();

    return derived([dark_preference, html_mode], ([$preference_store, $mode_store]) => {
        return (!$mode_store && $preference_store) || $mode_store === "dark";
    });
}

export function lightmode(): IThemeModeStore {
    if (!IS_BROWSER) return readable<boolean>(true);

    const light_preference = preferslight();
    const html_mode = htmlmode();

    return derived([light_preference, html_mode], ([$preference_store, $mode_store]) => {
        return (!$mode_store && $preference_store) || $mode_store === "light";
    });
}
