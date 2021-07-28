<script lang="ts">
    import type {DESIGN_ELEVATION_ARGUMENT} from "../../../lib/types/elevations";
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";
    import type {DESIGN_FILL_TOGGLE_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        elevation?: DESIGN_ELEVATION_ARGUMENT;
        palette?: DESIGN_PALETTE_ARGUMENT;
        variation?: DESIGN_FILL_TOGGLE_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let elevation: $$Props["elevation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="card {_class}"
    {...map_data_attributes({elevation, palette, variation})}
>
    <slot />
</div>
