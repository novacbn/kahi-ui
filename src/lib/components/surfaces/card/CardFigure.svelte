<script lang="ts">
    import type {PROPERTY_FIT} from "../../../types/fit";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_SHAPE} from "../../../types/shapes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        fit?: PROPERTY_FIT;
        shape?: PROPERTY_SHAPE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let fit: $$Props["fit"] = undefined;
    export let shape: $$Props["shape"] = undefined;
</script>

<figure
    bind:this={element}
    {...map_global_attributes($$props)}
    class="card--figure {_class}"
    {...map_data_attributes({fit, shape})}
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
</figure>
