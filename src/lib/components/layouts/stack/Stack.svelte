<script lang="ts">
    import type {
        DESIGN_ALIGNMENT_ARGUMENT,
        DESIGN_ALIGNMENT_X_ARGUMENT,
        DESIGN_ALIGNMENT_Y_ARGUMENT,
    } from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_ORIENTATION_VERTICAL_ARGUMENT} from "../../../types/orientations";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {
        DESIGN_SPACING_ARGUMENT,
        IMarginProperties,
        IPaddingProperties,
    } from "../../../types/spacings";
    import type {DESIGN_FLEX_VARIATION_ARGUMENT} from "../../../types/variations";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        orientation?: DESIGN_ORIENTATION_VERTICAL_ARGUMENT;
        variation?: DESIGN_FLEX_VARIATION_ARGUMENT;

        alignment?: DESIGN_ALIGNMENT_ARGUMENT;
        alignment_x?: DESIGN_ALIGNMENT_X_ARGUMENT;
        alignment_y?: DESIGN_ALIGNMENT_Y_ARGUMENT;

        spacing?: DESIGN_SPACING_ARGUMENT;
        spacing_x?: DESIGN_SPACING_ARGUMENT;
        spacing_y?: DESIGN_SPACING_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let orientation: $$Props["orientation"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="stack {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        orientation,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
        variation,
    })}
>
    <slot />
</div>
