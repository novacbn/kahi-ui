<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
    import type {IPaddingProperties, PROPERTY_SPACING_BREAKPOINT} from "../../../types/spacings";

    import {auto_focus} from "../../../actions/auto_focus";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";
    import {trap_focus} from "../../../actions/trap_focus";

    import {make_id_context} from "../../../stores/id";
    import {make_state_context} from "../../../stores/state";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import ContextBackdrop from "../../utilities/contextbackdrop/ContextBackdrop.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        captive?: boolean;
        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        logic_id?: string;
        once?: boolean;
        state?: boolean;

        focus_first?: HTMLElement | string | null;
        focus_last?: HTMLElement | string | null;
        focus_target?: HTMLElement | string | null;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let captive: $$Props["captive"] = undefined;
    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let logic_id: $$Props["logic_id"] = "";
    export let once: $$Props["once"] = undefined;
    export let state: $$Props["state"] = undefined;

    export let focus_first: $$Props["focus_first"] = undefined;
    export let focus_last: $$Props["focus_last"] = undefined;
    export let focus_target: $$Props["focus_target"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

    const _overlay_id = make_id_context(logic_id as string);
    const _overlay_state = make_state_context(state as boolean);

    let _previous_state = state;

    function on_change(event: Event): void {
        state = (event.target as HTMLInputElement).checked;
    }

    function on_click_inside(event: MouseEvent): void {
        if (once) {
            const target = event.target as HTMLElement;
            if (target.tagName !== "LABEL" && target.getAttribute("for") !== logic_id) {
                state = false;
            }
        }
    }

    $: $_overlay_state = state as boolean;

    $: {
        if (_previous_state !== state) {
            dispatch(state ? "active" : "dismiss");

            _previous_state = state;
        }
    }
</script>

{#if $_overlay_id}
    <input
        role="presentation"
        id={$_overlay_id}
        type="checkbox"
        bind:checked={$_overlay_state}
        on:change={on_change}
    />

    {#if captive}
        <ContextBackdrop {dismissible} />
    {/if}
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="overlay {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        orientation,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
    })}
    on:click={on_click_inside}
    use:trap_focus={{enabled: $_state, first: focus_first, last: focus_last}}
    use:auto_focus={{enabled: $_state, target: focus_target}}
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
    {#if $_overlay_state || loading !== TOKENS_BEHAVIOR_LOADING.lazy}
        <slot />
    {/if}
</div>
