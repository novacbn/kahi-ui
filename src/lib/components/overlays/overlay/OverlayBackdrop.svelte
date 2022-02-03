<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import type {IForwardedActions} from "../../../actions/forward_actions";

    import {scrolllock} from "../../../stores/scrolllock";

    import {IS_BROWSER} from "../../../util/environment";

    import Backdrop from "../backdrop/Backdrop.svelte";

    import {
        CONTEXT_OVERLAY_DISMISSIBLE,
        CONTEXT_OVERLAY_ID,
        CONTEXT_OVERLAY_STATE,
    } from "./OverlayGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    const _overlay_dismissible = CONTEXT_OVERLAY_DISMISSIBLE.get();
    const _overlay_id = CONTEXT_OVERLAY_ID.get();
    const _overlay_state = CONTEXT_OVERLAY_STATE.get();

    const _scrolllock = scrolllock();

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let palette: $$Props["palette"] = undefined;

    if (!_overlay_state) {
        throw new ReferenceError(
            "bad initialization to `Overlay.Backdrop` (failed to get `overlay_state` Svelte Store from context)"
        );
    }

    $: if (IS_BROWSER) $_scrolllock = $_overlay_state ?? false;
</script>

<Backdrop
    {...$$props}
    bind:element
    class="overlay--backdrop {_class}"
    for={_overlay_dismissible && $_overlay_dismissible && _overlay_id ? $_overlay_id : undefined}
    {palette}
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
