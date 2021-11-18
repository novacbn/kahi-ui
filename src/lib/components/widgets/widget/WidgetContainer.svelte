<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y} from "../../../types/orientations";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {
        IMarginProperties,
        IPaddingProperties,
        PROPERTY_SPACING_BREAKPOINT,
    } from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        orientation?: PROPERTY_ORIENTATION_Y;
        sizing?: PROPERTY_SIZING;
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

    export let orientation: $$Props["orientation"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="widget {_class}"
    {...map_data_attributes({
        orientation,
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
