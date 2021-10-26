<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import {
        map_aria_attributes,
        map_attributes,
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

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <button
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({disabled})}
        on:click
    >
        <slot />
    </button>
</MenuItem>
