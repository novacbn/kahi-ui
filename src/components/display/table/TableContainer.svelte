<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";
    import type {DESIGN_TABLE_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLTableElement;

        palette?: DESIGN_PALETTE_ARGUMENT;
        variation?: DESIGN_TABLE_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<table
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette, variation})}
>
    <slot />
</table>
