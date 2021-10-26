<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_POSITION} from "../../../types/positions";
    import type {PROPERTY_SHAPE} from "../../../types/shapes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        palette?: PROPERTY_PALETTE;
        /** @deprecated */
        position?: PROPERTY_POSITION;
        shape?: PROPERTY_SHAPE;
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
    /** @deprecated */
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
