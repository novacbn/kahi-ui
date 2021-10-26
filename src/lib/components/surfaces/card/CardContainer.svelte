<script lang="ts">
    import type {PROPERTY_ELEVATION} from "../../../types/elevations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_SURFACE} from "../../../types/variations";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        elevation?: PROPERTY_ELEVATION;
        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_SURFACE;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let elevation: $$Props["elevation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="card {_class}"
    {...map_data_attributes({elevation, palette, sizing, variation})}
>
    <slot />
</div>
