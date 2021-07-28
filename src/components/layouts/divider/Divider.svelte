<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT} from "../../../lib/types/orientations";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLHRElement | HTMLSpanElement;

        palette?: DESIGN_PALETTE_ARGUMENT;
        orientation?: DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let orientation: $$Props["orientation"] = undefined;
</script>

{#if $$slots["default"]}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        role="separator"
        {...map_data_attributes({orientation, palette})}
    >
        <slot />
    </span>
{:else}
    <hr
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({orientation, palette})}
    />
{/if}
