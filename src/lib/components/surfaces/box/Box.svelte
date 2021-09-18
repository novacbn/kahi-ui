<script lang="ts">
    import type {DESIGN_ELEVATION_ARGUMENT} from "../../../types/elevations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_SHAPE_ARGUMENT} from "../../../types/shapes";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        elevation?: DESIGN_ELEVATION_ARGUMENT;
        palette?: DESIGN_PALETTE_ARGUMENT;
        shape?: DESIGN_SHAPE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
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
    export let shape: $$Props["shape"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="box {_class}"
    {...map_data_attributes({elevation, palette, shape})}
>
    <slot />
</div>
