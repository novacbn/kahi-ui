<script lang="ts">
    import type {DESIGN_ANIMATION_ARGUMENT} from "../../../lib/types/animations";
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_POSITION_ARGUMENT} from "../../../lib/types/positions";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        animation?: DESIGN_ANIMATION_ARGUMENT;
        palette?: DESIGN_PALETTE_ARGUMENT;
        position?: DESIGN_POSITION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let animation: $$Props["animation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let position: $$Props["position"] = undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="dot {_class}"
    {...map_data_attributes({animation, palette, position})}
/>
