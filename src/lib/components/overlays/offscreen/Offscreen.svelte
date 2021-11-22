<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

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
        logic_id?: string;
        once?: boolean;
        state?: boolean;

        placement?: PROPERTY_PLACEMENT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties;

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
    export let logic_id: $$Props["logic_id"] = "";
    export let once: $$Props["once"] = undefined;
    export let state: $$Props["state"] = undefined;

    export let placement: $$Props["placement"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);

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

    $: $_state = state as boolean;

    $: {
        if (_previous_state !== state) {
            dispatch(state ? "active" : "dismiss");

            _previous_state = state;
        }
    }
</script>

{#if $_logic_id}
    <input
        role="presentation"
        id={$_logic_id}
        type="checkbox"
        bind:checked={$_state}
        on:change={on_change}
    />

    {#if captive}
        <ContextBackdrop {dismissible} />
    {/if}
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="offscreen {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        placement,
    })}
    on:click={on_click_inside}
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
    <slot />
</div>
