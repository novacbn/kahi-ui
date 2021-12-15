<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";

    import Button from "../../interactables/button/Button.svelte";

    import {CONTEXT_OVERLAY_ID} from "./OverlayGroup.svelte";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        palette?: PROPERTY_PALETTE;
        variation?: PROPERTY_VARIATION_BUTTON;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let tabindex: $$Props["tabindex"] = 0;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _overlay_id = CONTEXT_OVERLAY_ID.get();

    if (!_overlay_id) {
        throw new ReferenceError(
            "bad initialization to `Overlay.Button` (failed to get `overlay_id` Svelte Store from context)"
        );
    }
</script>

<Button
    bind:element
    for={$_overlay_id}
    {actions}
    {active}
    {disabled}
    {palette}
    {variation}
    {tabindex}
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
</Button>
