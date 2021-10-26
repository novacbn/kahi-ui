<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_TABLE} from "../../../types/variations";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLTableElement;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_TABLE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<table
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette, sizing, variation})}
>
    <slot />
</table>
