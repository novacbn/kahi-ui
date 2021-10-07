<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_POSITION_ARGUMENT} from "../../../types/positions";
    import type {DESIGN_SHAPE_ARGUMENT} from "../../../types/shapes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        palette?: DESIGN_PALETTE_ARGUMENT;
        position?: DESIGN_POSITION_ARGUMENT;
        shape?: DESIGN_SHAPE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let palette: $$Props["palette"] = undefined;
    export let position: $$Props["position"] = undefined;
    export let shape: $$Props["shape"] = undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="badge {_class}"
    {...map_data_attributes({palette, position, shape})}
>
    <slot />
</span>
