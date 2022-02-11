<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
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

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
</script>

<nav
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="menu {_class}"
    {...map_data_attributes({orientation, palette, sizing})}
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
</nav>
