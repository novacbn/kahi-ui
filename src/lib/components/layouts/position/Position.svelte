<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {
        DESIGN_PLACEMENT_ARGUMENT,
        DESIGN_PLACEMENT_X_ARGUMENT,
    } from "../../../types/placements";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        variation?: "floated" | "raised";

        alignment_x?: DESIGN_PLACEMENT_X_ARGUMENT;
        placement?: DESIGN_PLACEMENT_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let variation: $$Props["variation"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let placement: $$Props["placement"] = undefined;
</script>

<div
    class="position"
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({
        "alignment-x": alignment_x,
        placement,
        variation,
    })}
>
    <slot />
</div>
