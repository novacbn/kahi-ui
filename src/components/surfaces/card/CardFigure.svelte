<script lang="ts">
    import type {DESIGN_FIT_ARGUMENT} from "../../../lib/types/fit";
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_SHAPE_ARGUMENT} from "../../../lib/types/shapes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";

    import Figure from "../../embedded/figure/Figure.svelte";

    // NOTE: We could just use `Figure["$$props_def"]` and alias `$$Props` to it. But
    // it's marked as internal, and we might as well write it all out here anyway for clarity

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

<Figure bind:element {...$$props} {fit} {shape} {size} {variation}>
    <slot />
</Figure>
