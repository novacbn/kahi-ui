import type {Writable} from "svelte/store";
import {readable, writable} from "svelte/store";

import {IS_BROWSER} from "../util/environment";

export type IScrollLockStore = Writable<boolean>;

export function scrolllock(target?: HTMLElement): IScrollLockStore {
    // TODO: Look into programatically preventing scrolling in all non-decendent Elements

    // @ts-expect-error - HACK: Callback function is optional
    if (!IS_BROWSER) return readable<boolean>(false);

    let overflow: string;
    if (!target) target = document.documentElement;

    const {set, subscribe, update} = writable(false, () => {
        return () => {
            // @ts-expect-error - HACK: The parent scope understood that I validated the default target...
            if (typeof overflow !== "undefined") target.style.overflow = overflow;
        };
    });

    function update_lock(value: boolean): void {
        // @ts-expect-error - HACK: The parent scope understood that I validated the default target...
        if (value) ({overflow} = target.style);
        // @ts-expect-error
        target.style.overflow = value ? "hidden" : overflow;
    }

    return {
        subscribe,

        set(value) {
            update_lock(value);
            set(value);
        },

        update(callback) {
            update((value) => {
                value = callback(value);

                update_lock(value);
                return value;
            });
        },
    };
}
