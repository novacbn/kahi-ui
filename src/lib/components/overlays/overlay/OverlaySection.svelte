<script lang="ts">
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {auto_focus} from "../../../actions/auto_focus";
    import {click_inside} from "../../../actions/click_inside";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";
    import {trap_focus} from "../../../actions/trap_focus";

    import {map_global_attributes} from "../../../util/attributes";

    import {
        CONTEXT_OVERLAY_FOCUS_FIRST,
        CONTEXT_OVERLAY_FOCUS_LAST,
        CONTEXT_OVERLAY_FOCUS_TARGET,
        CONTEXT_OVERLAY_ID,
        CONTEXT_OVERLAY_LOADING,
        CONTEXT_OVERLAY_ONCE,
        CONTEXT_OVERLAY_STATE,
    } from "./OverlayGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;
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

    const _overlay_id = CONTEXT_OVERLAY_ID.get();
    const _overlay_state = CONTEXT_OVERLAY_STATE.get();

    const _overlay_focus_first = CONTEXT_OVERLAY_FOCUS_FIRST.get();
    const _overlay_focus_last = CONTEXT_OVERLAY_FOCUS_LAST.get();
    const _overlay_focus_target = CONTEXT_OVERLAY_FOCUS_TARGET.get();

    const _overlay_loading = CONTEXT_OVERLAY_LOADING.get();
    const _overlay_once = CONTEXT_OVERLAY_ONCE.get();

    function on_once(): void {
        if (_overlay_once && $_overlay_once && _overlay_state && $_overlay_state) {
            $_overlay_state = false;
        }
    }
</script>

<section
    bind:this={element}
    {...map_global_attributes($$props)}
    use:click_inside={{
        ignore: _overlay_id ? `label[for="${$_overlay_id}"]` : undefined,
        on_click_inside: on_once,
    }}
    use:trap_focus={{
        enabled: _overlay_state && $_overlay_state,
        first: _overlay_focus_first ? $_overlay_focus_first : null,
        last: _overlay_focus_last ? $_overlay_focus_last : null,
    }}
    use:auto_focus={{
        enabled: _overlay_state && $_overlay_state,
        target: _overlay_focus_target ? $_overlay_focus_target : null,
    }}
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
    <!-- TODO: `Transition` support for `loading=lazy` -->
    {#if (_overlay_state && $_overlay_state) || !_overlay_loading || $_overlay_loading !== TOKENS_BEHAVIOR_LOADING.lazy}
        <slot />
    {/if}
</section>
