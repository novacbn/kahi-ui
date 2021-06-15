import type {Readable} from "svelte/store";
import {derived, readable} from "svelte/store";
import {IS_BROWSER} from "../util/environment";

import {debounce} from "../util/functional";

export interface IViewportStoreOptions {
    desktop: boolean;

    mobile: boolean;

    tablet: boolean;

    widescreen: boolean;
}

export interface IViewportValues {
    max: string;

    min: string;
}

export type IViewportStore = Readable<boolean>;

function get_viewport_values() {
    const computed = getComputedStyle(document.documentElement);

    return {
        mobile: {
            max: computed.getPropertyValue("--viewport-mobile-max"),
            min: computed.getPropertyValue("--viewport-mobile-min"),
        },

        tablet: {
            max: computed.getPropertyValue("--viewport-tablet-max"),
            min: computed.getPropertyValue("--viewport-tablet-min"),
        },

        desktop: {
            max: computed.getPropertyValue("--viewport-desktop-max"),
            min: computed.getPropertyValue("--viewport-desktop-min"),
        },

        widescreen: {
            max: computed.getPropertyValue("--viewport-widescreen-max"),
            min: computed.getPropertyValue("--viewport-widescreen-min"),
        },
    };
}

function match_viewport(values: IViewportValues): MediaQueryList {
    return matchMedia(`(min-width: ${values.min}) and (max-width: ${values.max})`);
}

function viewport(values: IViewportValues): IViewportStore {
    // @ts-expect-error - Callback function is optional
    if (!IS_BROWSER) return readable<boolean>(false);

    return readable<boolean>(false, (set) => {
        function on_change(event: MediaQueryListEvent) {
            set(event.matches);
        }

        const query = match_viewport(values);
        set(query.matches);

        query.addEventListener("change", on_change);
        return () => query.removeEventListener("change", on_change);
    });
}

export function viewports(options: Partial<IViewportStoreOptions> = {}): IViewportStore {
    // @ts-expect-error - HACK: Callback function is optional
    if (!IS_BROWSER) return readable<boolean>(false);

    const {desktop = false, mobile = false, tablet = false, widescreen = false} = options;
    const values = get_viewport_values();

    const desktop_store = desktop ? viewport(values.desktop) : null;
    const mobile_store = mobile ? viewport(values.mobile) : null;
    const tablet_store = tablet ? viewport(values.tablet) : null;
    const widescreen_store = widescreen ? viewport(values.widescreen) : null;

    // NOTE: Whenever one Viewport store changes, it updates the derived store to inverse of its
    // old value. But then the newly entered Viewport's store will change to `true`. Causing
    // the following to happen in a single frame `true->false->true`. Potentially leading
    // consuming Components to re-render / re-calculate things.
    //
    // So we need to debounce it, which can also delay things to 100ms or more (depending on Browser)
    let value: boolean = false;
    const on_update = debounce(
        ([$desktop_store, $mobile_store, $tablet_store, $widescreen_store], set) => {
            value = !!$desktop_store || !!$mobile_store || !!$tablet_store || !!$widescreen_store;

            set(value);
        }
    );

    // HACK: It would look cleaner if the debounced callback was just hoisted into the `derived`
    // function, instead of being a variable. However in `derived` doesn't apparently filter out
    // returns of `void` (e.g. no returns at all). So we need cache the previous value and return
    // that until the debounced callback calls the setter its self

    // @ts-expect-error - HACK: ?
    return derived(
        [desktop_store, mobile_store, tablet_store, widescreen_store],
        ([$desktop_store, $mobile_store, $tablet_store, $widescreen_store], set) => {
            on_update([$desktop_store, $mobile_store, $tablet_store, $widescreen_store], set);

            return value;
        }
    );
}
