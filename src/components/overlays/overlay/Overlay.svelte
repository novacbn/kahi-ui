<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {
        DESIGN_ALIGNMENT_ARGUMENT,
        DESIGN_ALIGNMENT_X_ARGUMENT,
        DESIGN_ALIGNMENT_Y_ARGUMENT,
    } from "../../../lib/types/alignments";

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";

    import {make_id_context} from "../../../lib/stores/id";
    import {make_state_context} from "../../../lib/stores/state";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    import ContextBackdrop from "../../utilities/contextbackdrop/ContextBackdrop.svelte";
    import type {DESIGN_SPACING_ARGUMENT, IPaddingProperties} from "../../../lib/types/spacings";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        captive?: boolean;
        dismissible?: boolean;
        logic_id?: string;
        state?: boolean;

        alignment?: DESIGN_ALIGNMENT_ARGUMENT;
        alignment_x?: DESIGN_ALIGNMENT_X_ARGUMENT;
        alignment_y?: DESIGN_ALIGNMENT_Y_ARGUMENT;

        spacing?: DESIGN_SPACING_ARGUMENT;
        spacing_x?: DESIGN_SPACING_ARGUMENT;
        spacing_y?: DESIGN_SPACING_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IPaddingProperties;

    const dispatch = createEventDispatcher();

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let captive: $$Props["captive"] = false;
    export let dismissible: $$Props["dismissible"] = false;
    export let logic_id: $$Props["logic_id"] = "";
    export let state: $$Props["state"] = false;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);

    let _previous_state = state;

    function on_change(event: Event) {
        state = (event.target as HTMLInputElement).checked;
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
    class="overlay {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
    })}
>
    <slot />
</div>
