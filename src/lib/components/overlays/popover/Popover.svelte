<script lang="ts">
    /**
     * TODO: Inverse alignment / placement whenever the `Popover` leaves
     * the document's bounds.
     */

    import {createEventDispatcher} from "svelte";

    import type {PROPERTY_ALIGNMENT_X, PROPERTY_ALIGNMENT_Y} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import type {PROPERTY_SPACING} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {click_outside} from "../../../actions/click_outside";

    import {make_id_context} from "../../../stores/id";
    import {make_state_context} from "../../../stores/state";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    };

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        dismissible?: boolean;
        logic_id?: string;
        state?: boolean;

        placement?: PROPERTY_PLACEMENT;

        alignment_x?: PROPERTY_ALIGNMENT_X;
        alignment_y?: PROPERTY_ALIGNMENT_Y;

        spacing?: PROPERTY_SPACING;
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

    export let dismissible: $$Props["dismissible"] = undefined;
    export let logic_id: $$Props["logic_id"] = "";
    export let state: $$Props["state"] = undefined;

    export let placement: $$Props["placement"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);

    let _previous_state = state;

    function on_change(event: Event) {
        state = (event.target as HTMLInputElement).checked;
    }

    function on_click_outside(event: MouseEvent) {
        if (state && dismissible) state = false;
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
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="popover {_class}"
    {...map_data_attributes({
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        placement,
        spacing,
    })}
    use:click_outside={{on_click_outside}}
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
