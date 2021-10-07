<script lang="ts">
    import type {DESIGN_ANIMATION_ARGUMENT} from "../../../types/animations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_POSITION_ARGUMENT} from "../../../types/positions";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        animation?: DESIGN_ANIMATION_ARGUMENT;
        palette?: DESIGN_PALETTE_ARGUMENT;
        /** @deprecated */
        position?: DESIGN_POSITION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let animation: $$Props["animation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    /** @deprecated */
    export let position: $$Props["position"] = undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="dot {_class}"
    {...map_data_attributes({animation, palette, position})}
/>
