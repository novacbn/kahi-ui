<script lang="ts">
    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {PROPERTY_DIRECTIONS} from "../../../types/directions";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
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
    import {trap_focus} from "../../../actions/trap_focus";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import {
        CONTEXT_OVERLAY_FOCUS_FIRST,
        CONTEXT_OVERLAY_FOCUS_LAST,
        CONTEXT_OVERLAY_FOCUS_TARGET,
        CONTEXT_OVERLAY_ID,
        CONTEXT_OVERLAY_LOADING,
        CONTEXT_OVERLAY_ONCE,
        CONTEXT_OVERLAY_STATE,
    } from "./OverlayGroup.svelte";

    type $$Events = {
        transitionend: TransitionEvent;

        transitionstart: TransitionEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        animation?: PROPERTY_TRANSITION_NAMES;
        direction?: PROPERTY_DIRECTIONS;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
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
    export let direction: $$Props["direction"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

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

    $: _animatable = _overlay_id && $_overlay_id;
    $: _enabled = _overlay_state && $_overlay_state;
</script>

<section
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="overlay--section {_overlay_id ? 'transition' : ''} {_class}"
    {...map_data_attributes({
        animation: _animatable ? animation ?? TOKENS_TRANSITION_NAMES.scale : undefined,
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        behavior: _animatable ? "explicit" : "",
        direction: _animatable ? direction : undefined,
        orientation,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
    })}
    use:click_inside={{
        ignore: _overlay_id ? `label[for="${$_overlay_id}"]` : undefined,
        on_click_inside: on_once,
    }}
    use:trap_focus={{
        enabled: _enabled,
        first: _overlay_focus_first ? $_overlay_focus_first : null,
        last: _overlay_focus_last ? $_overlay_focus_last : null,
    }}
    use:auto_focus={{
        enabled: _enabled,
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
    on:transitionend
    on:transitionstart
>
    <!-- NOTE: Bit confusing, but basically checking if the `Overlay` is active / state unavailable or loading mode isn't lazy -->
    {#if !_overlay_id || (_overlay_state && $_overlay_state) || !_overlay_loading || $_overlay_loading !== TOKENS_BEHAVIOR_LOADING.lazy}
        <slot />
    {/if}
</section>
