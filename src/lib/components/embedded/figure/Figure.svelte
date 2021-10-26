<script lang="ts">
    import type {PROPERTY_FIT} from "../../../types/fit";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_SHAPE} from "../../../types/shapes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        fit?: PROPERTY_FIT;
        shape?: PROPERTY_SHAPE;
        size?: PROPERTY_SIZING;
        variation?: "icon";
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let fit: $$Props["fit"] = undefined;
    export let shape: $$Props["shape"] = undefined;
    export let size: $$Props["size"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<figure
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({fit, shape, size, variation})}
>
    <slot />
</figure>
