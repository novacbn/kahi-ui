<script lang="ts">
    /**
     * TODO: Satisfy ARIA warnings from the Compiler by making non-optional properties
     */

    import type {ARIA_CURRENT_ARGUMENT} from "../../../types/aria";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLAnchorElement;

        active?: boolean;
        current?: ARIA_CURRENT_ARGUMENT;
        disabled?: boolean;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let download: $$Props["download"] = "";
    export let href: $$Props["href"] = "";
    export let rel: $$Props["rel"] = "";
    export let target: $$Props["target"] = "";

    export let palette: $$Props["palette"] = undefined;
</script>

<a
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_aria_attributes({pressed: active, current, disabled})}
    {...map_data_attributes({palette})}
    {download}
    {href}
    {rel}
    {target}
    on:click
>
    <slot />
</a>
