<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_X_BREAKPOINT} from "../../../types/orientations";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLHRElement | HTMLSpanElement;

        palette?: PROPERTY_PALETTE;
        orientation?: PROPERTY_ORIENTATION_X_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

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
