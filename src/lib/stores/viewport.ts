import type {Readable} from "svelte/store";

import {mediaquery, mediaqueries} from "./mediaquery";

export enum VIEWPORT_NAMES {
    mobile = "mobile",

    tablet = "tablet",

    desktop = "desktop",

    widescreen = "widescreen",
}

interface IViewportValues {
    max: string;

    min: string;
}

export type IViewportStoreOptions = Record<keyof typeof VIEWPORT_NAMES, boolean>;

export type IViewportStore = Readable<boolean>;

function get_viewport_variables(viewport: keyof typeof VIEWPORT_NAMES): IViewportValues {
    const computed = getComputedStyle(document.documentElement);

    return {
        max: computed.getPropertyValue(`--viewport-${viewport}-max`),
        min: computed.getPropertyValue(`--viewport-${viewport}-min`),
    };
}

function format_viewport_query(values: IViewportValues): string {
    return `(min-width: ${values.min}) and (max-width: ${values.max})`;
}

export function viewport(viewport: keyof typeof VIEWPORT_NAMES): IViewportStore {
    const values = get_viewport_variables(viewport);
    const query = format_viewport_query(values);

    return mediaquery(query);
}

export function viewports(options: Partial<IViewportStoreOptions> = {}): IViewportStore {
    const entries = Object.entries(options);
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
