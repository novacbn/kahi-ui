<script lang="ts">
    import type {DESIGN_FIT_ARGUMENT} from "../../../types/fit";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_SHAPE_ARGUMENT} from "../../../types/shapes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../types/sizes";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        fit?: DESIGN_FIT_ARGUMENT;
        shape?: DESIGN_SHAPE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        variation?: "icon";
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

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
