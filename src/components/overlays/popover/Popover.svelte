<script lang="ts">
    /**
     * TODO: Inverse alignment / placement whenever the `Popover` leaves
     * the document's bounds.
     */

    import {createEventDispatcher} from "svelte";

    import type {
        DESIGN_ALIGNMENT_X_SINGULAR_ARGUMENT,
        DESIGN_ALIGNMENT_Y_SINGULAR_ARGUMENT,
    } from "../../../lib/types/alignments";

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PLACEMENT_ARGUMENT} from "../../../lib/types/placements";
    import type {DESIGN_SPACING_SINGULAR_ARGUMENT} from "../../../lib/types/spacings";

    import {click_outside} from "../../../lib/actions/click_outside";

    import {make_id_context} from "../../../lib/stores/id";
    import {make_state_context} from "../../../lib/stores/state";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        dismissible?: boolean;
        logic_id?: string;
        state?: boolean;

        placement?: DESIGN_PLACEMENT_ARGUMENT;

        alignment_x?: DESIGN_ALIGNMENT_X_SINGULAR_ARGUMENT;
        alignment_y?: DESIGN_ALIGNMENT_Y_SINGULAR_ARGUMENT;

        spacing?: DESIGN_SPACING_SINGULAR_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    const dispatch = createEventDispatcher();

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let dismissible: $$Props["dismissible"] = false;
    export let logic_id: $$Props["logic_id"] = "";
    export let state: $$Props["state"] = false;

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
>
    <slot />
</div>
