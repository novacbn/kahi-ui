<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    import type {IForwardedActions} from "../../../actions/forward_actions";

    import Backdrop from "../backdrop/Backdrop.svelte";

    import {CONTEXT_OVERLAY_ID} from "./OverlayGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;
    } & IHTML5Properties &
        IGlobalProperties;

    const _overlay_id = CONTEXT_OVERLAY_ID.get();

    export let element: $$Props["element"] = undefined;

    if (!_overlay_id) {
        throw new ReferenceError(
            "bad initialization to `Overlay.Backdrop` (failed to get `overlay_id` Svelte Store from context)"
        );
    }
</script>

<Backdrop
    {...$$props}
    bind:element
    for={$_overlay_id}
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
