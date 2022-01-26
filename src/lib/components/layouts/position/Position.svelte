<script lang="ts">
    import type {PROPERTY_ALIGNMENT_X, PROPERTY_ALIGNMENT_Y} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {
        IMarginProperties,
        IPaddingProperties,
        PROPERTY_SPACING_BREAKPOINT,
    } from "../../../types/spacings";
    import type {PROPERTY_VARIATION_POSITION_AUGMENT} from "../../../types/variations";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        placement?: PROPERTY_PLACEMENT;

        alignment_x?: PROPERTY_ALIGNMENT_X;
        alignment_y?: PROPERTY_ALIGNMENT_Y;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;

        variation?: PROPERTY_VARIATION_POSITION_AUGMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let placement: $$Props["placement"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

    export let variation: $$Props["variation"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="position {_class}"
    {...map_data_attributes({
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        placement,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
        variation,
    })}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    <slot />
</div>
