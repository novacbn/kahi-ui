<script lang="ts">
    import type {PROPERTY_FIT} from "../../../types/fit";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_SHAPE} from "../../../types/shapes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import Figure from "../../embedded/figure/Figure.svelte";

    // NOTE: We could just use `Figure["$$props_def"]` and alias `$$Props` to it. But
    // it's marked as internal, and we might as well write it all out here anyway for clarity

    type $$Props = {
        element?: HTMLElement;

        fit?: PROPERTY_FIT;
        shape?: PROPERTY_SHAPE;
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
</script>

<Figure bind:element {...$$props} {fit} {shape}>
    <slot />
</Figure>
