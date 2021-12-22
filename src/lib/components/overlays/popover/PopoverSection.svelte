<script lang="ts">
    import type {
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {
        IMarginProperties,
        IPaddingProperties,
        PROPERTY_SPACING_BREAKPOINT,
    } from "../../../types/spacings";
    import type {PROPERTY_TRANSITION_NAMES} from "../../../types/transitions";
    import {TOKENS_TRANSITION_NAMES} from "../../../types/transitions";

    import {auto_focus} from "../../../actions/auto_focus";
    import {click_inside} from "../../../actions/click_inside";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import {
        CONTEXT_POPOVER_FOCUS_TARGET,
        CONTEXT_POPOVER_ID,
        CONTEXT_POPOVER_LOADING,
        CONTEXT_POPOVER_ONCE,
        CONTEXT_POPOVER_STATE,
    } from "./PopoverGroup.svelte";

    type $$Events = {
        animationend: AnimationEvent;

        animationstart: AnimationEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        animation?: PROPERTY_TRANSITION_NAMES;

        placement?: PROPERTY_PLACEMENT;

        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
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

    export let animation: $$Props["animation"] = undefined;

    export let placement: $$Props["placement"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;

    const _popover_id = CONTEXT_POPOVER_ID.get();
    const _popover_state = CONTEXT_POPOVER_STATE.get();

    const _popover_focus_target = CONTEXT_POPOVER_FOCUS_TARGET.get();

    const _popover_loading = CONTEXT_POPOVER_LOADING.get();
    const _popover_once = CONTEXT_POPOVER_ONCE.get();

    function on_once(): void {
        if (_popover_once && $_popover_once && _popover_state && $_popover_state) {
            $_popover_state = false;
        }
    }
</script>

<section
    bind:this={element}
    {...map_global_attributes($$props)}
    class="{_popover_id ? 't-r-a-n-s-i-t-i-o-n' : ''} {_class}"
    {...map_data_attributes({
        animation: _popover_id ? animation ?? TOKENS_TRANSITION_NAMES.clip : undefined,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        direction: _popover_id ? placement : undefined,
        placement,
        spacing,
    })}
    use:click_inside={{
        ignore: _popover_id ? `label[for="${$_popover_id}"]` : undefined,
        on_click_inside: on_once,
    }}
    use:auto_focus={{
        enabled: _popover_state && $_popover_state,
        target: _popover_focus_target ? $_popover_focus_target : null,
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
    on:animationend
    on:animationstart
>
    <!-- NOTE: Bit confusing, but basically checking if the `Popover` is active / state unavailable or loading mode isn't lazy -->
    {#if !_popover_id || (_popover_state && $_popover_state) || !_popover_loading || $_popover_loading !== TOKENS_BEHAVIOR_LOADING.lazy}
        <slot />
    {/if}
</section>
