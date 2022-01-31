<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_X_BREAKPOINT} from "../../../types/orientations";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLHRElement | HTMLSpanElement;

        palette?: PROPERTY_PALETTE;
        orientation?: PROPERTY_ORIENTATION_X_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let orientation: $$Props["orientation"] = undefined;
</script>

{#if $$slots["default"]}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        class="divider"
        role="separator"
        {...map_data_attributes({orientation, palette})}
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
    </span>
{:else}
    <hr
        bind:this={element}
        {...map_global_attributes($$props)}
        class="divider"
        {...map_data_attributes({orientation, palette})}
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
{/if}
