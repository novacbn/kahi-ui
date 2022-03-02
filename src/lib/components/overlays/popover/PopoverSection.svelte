<script context="module" lang="ts">
    import {TOKENS_DIRECTIONS} from "../../../types/directions";
    import {TOKENS_PLACEMENT} from "../../../types/placements";

    const DIRECTIONS_LOOKUP = {
        [TOKENS_PLACEMENT.bottom]: TOKENS_DIRECTIONS.top,
        [TOKENS_PLACEMENT.left]: TOKENS_DIRECTIONS.right,
        [TOKENS_PLACEMENT.top]: TOKENS_DIRECTIONS.bottom,
        [TOKENS_PLACEMENT.right]: TOKENS_DIRECTIONS.left,
    };
</script>

<script lang="ts">
    import type {PROPERTY_ALIGNMENT_X, PROPERTY_ALIGNMENT_Y} from "../../../types/alignments";
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {
        IMarginProperties,
        IPaddingProperties,
        PROPERTY_SPACING,
    } from "../../../types/spacings";
    import type {PROPERTY_TRANSITION_NAMES} from "../../../types/transitions";
    import {TOKENS_TRANSITION_NAMES} from "../../../types/transitions";

    import {auto_focus} from "../../../actions/auto_focus";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import {
        CONTEXT_POPOVER_FOCUS_TARGET,
        CONTEXT_POPOVER_ID,
        CONTEXT_POPOVER_LOADING,
        CONTEXT_POPOVER_STATE,
        CONTEXT_POPOVER_VARIATION,
    } from "./PopoverGroup.svelte";
    import {TOKENS_VARIATION_POPOVER} from "../../../types/variations";

    type $$Events = {
        transitionend: TransitionEvent;

        transitionstart: TransitionEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        animation?: PROPERTY_TRANSITION_NAMES;

        placement?: PROPERTY_PLACEMENT;

        alignment_x?: PROPERTY_ALIGNMENT_X;
        alignment_y?: PROPERTY_ALIGNMENT_Y;

        spacing?: PROPERTY_SPACING;
        spacing_x?: PROPERTY_SPACING;
        spacing_y?: PROPERTY_SPACING;
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
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

    const _popover_id = CONTEXT_POPOVER_ID.get();
    const _popover_state = CONTEXT_POPOVER_STATE.get();

    const _popover_focus_target = CONTEXT_POPOVER_FOCUS_TARGET.get();

    const _popover_loading = CONTEXT_POPOVER_LOADING.get();

    const _popover_variation = CONTEXT_POPOVER_VARIATION.get();

    $: _can_animate =
        (_popover_id && $_popover_id) ||
        (_popover_variation && $_popover_variation !== TOKENS_VARIATION_POPOVER.popover);
    $: _can_auto_focus =
        _popover_state &&
        $_popover_state &&
        _popover_variation &&
        $_popover_variation === TOKENS_VARIATION_POPOVER.popover;

    // TODO: support auto focus in `variation=control`
</script>

<section
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="popover--section {_popover_id ? 'transition' : ''} {_class}"
    {...map_data_attributes({
        animation: _can_animate ? animation ?? TOKENS_TRANSITION_NAMES.clip : undefined,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        behavior: _can_animate ? "explicit" : "",
        direction: _can_animate
            ? DIRECTIONS_LOOKUP[placement ?? TOKENS_DIRECTIONS.bottom]
            : undefined,
        placement,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
    })}
    use:auto_focus={{
        enabled: _can_auto_focus,
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
    on:transitionend
    on:transitionstart
>
    <!-- NOTE: Bit confusing, but basically checking if the `Popover` is active / state unavailable or loading mode isn't lazy -->
    {#if !_popover_id || (_popover_state && $_popover_state) || !_popover_loading || $_popover_loading !== TOKENS_BEHAVIOR_LOADING.lazy}
        <slot />
    {/if}
</section>
