<script lang="ts">
    import type {PROPERTY_ANIMATION_FEEDBACK} from "../../../types/animations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_POSITION} from "../../../types/positions";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLSpanElement;

        animation?: PROPERTY_ANIMATION_FEEDBACK;
        palette?: PROPERTY_PALETTE;
        /** @deprecated Use `Position` Component instead. */
        position?: PROPERTY_POSITION;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let animation: $$Props["animation"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    /** @deprecated Use `Position` Component instead. */
    export let position: $$Props["position"] = undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="dot {_class}"
    {...map_data_attributes({animation, palette, position})}
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
/>
