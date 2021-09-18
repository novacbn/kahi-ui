<script lang="ts">
    import type {
        DESIGN_ALIGNMENT_ARGUMENT,
        DESIGN_ALIGNMENT_X_ARGUMENT,
        DESIGN_ALIGNMENT_Y_ARGUMENT,
    } from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT} from "../../../types/orientations";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        orientation?: DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT;

        alignment?: DESIGN_ALIGNMENT_ARGUMENT;
        alignment_x?: DESIGN_ALIGNMENT_X_ARGUMENT;
        alignment_y?: DESIGN_ALIGNMENT_Y_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
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
