<script lang="ts">
    import type {DESIGN_FIT_ARGUMENT} from "../../../types/fit";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_SHAPE_ARGUMENT} from "../../../types/shapes";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import Figure from "../../embedded/figure/Figure.svelte";

    // NOTE: We could just use `Figure["$$props_def"]` and alias `$$Props` to it. But
    // it's marked as internal, and we might as well write it all out here anyway for clarity

    type $$Props = {
        element?: HTMLElement;

        fit?: DESIGN_FIT_ARGUMENT;
        shape?: DESIGN_SHAPE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    export let fit: $$Props["fit"] = undefined;
    export let shape: $$Props["shape"] = undefined;
</script>

<Figure bind:element {...$$props} {fit} {shape}>
    <slot />
</Figure>
