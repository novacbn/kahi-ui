<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import MenuItem from "./MenuItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLIElement;

        active?: boolean;
        disabled?: boolean;

        download?: string;
        href: string;
        rel?: string;
        target?: string;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"];
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <a
        {...map_global_attributes($$props)}
        {...map_aria_attributes({pressed: active, current: active ? "page" : undefined, disabled})}
        {...map_data_attributes({palette})}
        {download}
        {href}
        {rel}
        {target}
        on:click
    >
        <slot />
    </a>
</MenuItem>
