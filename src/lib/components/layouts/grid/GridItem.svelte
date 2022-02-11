<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_POINTS_BREAKPOINT} from "../../../types/points";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        span?: PROPERTY_POINTS_BREAKPOINT;
        span_x?: PROPERTY_POINTS_BREAKPOINT;
        span_y?: PROPERTY_POINTS_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let span: $$Props["span"] = undefined;
    export let span_x: $$Props["span_x"] = undefined;
    export let span_y: $$Props["span_y"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="grid--item {_class}"
    {...map_data_attributes({
        span,
        span_x,
        span_y,
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
