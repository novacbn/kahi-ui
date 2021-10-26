<script lang="ts">
    import type {PROPERTY_ALIGNMENT_X} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        variation?: "floated" | "raised";

        alignment_x?: PROPERTY_ALIGNMENT_X;
        placement?: PROPERTY_PLACEMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let variation: $$Props["variation"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let placement: $$Props["placement"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="position {_class}"
    {...map_data_attributes({
        "alignment-x": alignment_x,
        placement,
        variation,
    })}
>
    <slot />
</div>
