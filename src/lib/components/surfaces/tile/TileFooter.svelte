<script lang="ts">
    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;
</script>

<footer
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        orientation,
    })}
>
    <slot />
</footer>
