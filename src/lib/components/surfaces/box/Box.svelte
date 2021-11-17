<script lang="ts">
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import type {PROPERTY_ELEVATION} from "../../../types/elevations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SHAPE} from "../../../types/shapes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions: IForwardedActions;
        element?: HTMLDivElement;

        elevation?: PROPERTY_ELEVATION;
        palette?: PROPERTY_PALETTE;
        shape?: PROPERTY_SHAPE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = [];
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let elevation: $$Props["elevation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let shape: $$Props["shape"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="box {_class}"
    {...map_data_attributes({elevation, palette, shape})}
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
