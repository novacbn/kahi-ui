<script lang="ts">
    // TODO: Add direct support for end-developers to provide custom sizing
    // e.g. `<Mosaic sizing="240px">`
    //
    // Should be a basic conditional check which use just sets `--sizing: XXX;` via style property

    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {
        PROPERTY_SPACING_BREAKPOINT,
        IMarginProperties,
        IPaddingProperties,
    } from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        sizing?: PROPERTY_SIZING_BREAKPOINT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
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

    export let sizing: $$Props["sizing"] = undefined;

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
    class="mosaic {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        sizing,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
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
