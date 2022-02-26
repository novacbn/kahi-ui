import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

import {mediaquery, mediaqueries} from "./mediaquery";

export enum VIEWPORT_NAMES {
    mobile = "mobile",

    tablet = "tablet",

    desktop = "desktop",

    widescreen = "widescreen",
}

interface IViewportDimensions {
    max: string;

    min: string;
}

export type IViewportValues = Record<keyof typeof VIEWPORT_NAMES, boolean>;

export type IViewportStore = Readable<boolean>;

function get_viewport_variables(viewport: keyof typeof VIEWPORT_NAMES): IViewportDimensions {
    const computed = getComputedStyle(document.documentElement);

    // HACK: The "infinity" number is needed as a quick hack to disable
    // maximum resolution conditional
    return {
        max:
            viewport === "widescreen"
                ? `${Number.MAX_SAFE_INTEGER}px`
                : computed.getPropertyValue(`--viewports-${viewport}-maximum`),
        min: computed.getPropertyValue(`--viewports-${viewport}-minimum`),
    };
}

function format_viewport_query(values: IViewportDimensions): string {
    return `(min-width:${values.min}) and (max-width:${values.max})`;
}

export function viewport(viewport: keyof typeof VIEWPORT_NAMES): IViewportStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    const values = get_viewport_variables(viewport);
    const query = format_viewport_query(values);

    return mediaquery(query);
}

export function viewports(viewports: Partial<IViewportValues> = {}): IViewportStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    const entries = Object.entries(viewports);
    if (entries.length > 1) {
        const queries = entries
            .map((entry) => {
                const [viewport, enabled] = entry;
                if (!enabled) return null;

                const values = get_viewport_variables(viewport as keyof typeof VIEWPORT_NAMES);
                return format_viewport_query(values);
            })
            .filter((query) => !!query);

        return mediaqueries(queries as string[]);
    }

    const entry = entries[0];
    if (!entry) {
        throw new TypeError("bad argument #0 to 'viewports' (must at least provide 1 viewport)");
    }

    return viewport(entry[0] as keyof typeof VIEWPORT_NAMES);
}
