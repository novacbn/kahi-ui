import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

export type IMediaQueryStore = Readable<boolean>;

export function mediaquery(query: string): IMediaQueryStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    return readable<boolean>(false, (set) => {
        function on_change(event: MediaQueryListEvent) {
            set(event.matches);
        }

        const list = matchMedia(query);
        set(list.matches);

        list.addEventListener("change", on_change);
        return () => list.removeEventListener("change", on_change);
    });
}

export function mediaqueries(queries: string[]): IMediaQueryStore {
    if (!IS_BROWSER) return readable<boolean>(false);

    return readable<boolean>(false, (set) => {
        function has_match() {
            for (const list of lists) {
                if (list.matches) return true;
            }

            return false;
        }

        function on_change(event: MediaQueryListEvent) {
            set(has_match());
        }

        const lists = queries.map((query) => matchMedia(query));
        set(has_match());

        for (const list of lists) list.addEventListener("change", on_change);
        return () => {
            for (const list of lists) list.removeEventListener("change", on_change);
        };
    });
}
