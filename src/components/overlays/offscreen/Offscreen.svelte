<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {
        DESIGN_ALIGNMENT_ARGUMENT,
        DESIGN_ALIGNMENT_X_ARGUMENT,
        DESIGN_ALIGNMENT_Y_ARGUMENT,
    } from "../../../lib/types/alignments";
    import {get_id_context, make_id_context} from "../../../lib/stores/id";
    import {get_state_context, make_state_context} from "../../../lib/stores/state";

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PLACEMENT_ARGUMENT} from "../../../lib/types/placements";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    import ContextBackdrop from "../../utilities/contextbackdrop/ContextBackdrop.svelte";

    const dispatch = createEventDispatcher();

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let captive: boolean = false;
    export let dismissible: boolean = false;
    export let logic_id: string = "";
    export let state: boolean = false;

    export let placement: DESIGN_PLACEMENT_ARGUMENT | undefined = undefined;

    export let alignment: DESIGN_ALIGNMENT_ARGUMENT | undefined = undefined;
    export let alignment_x: DESIGN_ALIGNMENT_X_ARGUMENT | undefined = undefined;
    export let alignment_y: DESIGN_ALIGNMENT_Y_ARGUMENT | undefined = undefined;

    const _logic_id = get_id_context() ?? make_id_context(logic_id);
    const _state = get_state_context() ?? make_state_context(state);

    let _previous_state = state;

    function on_change(event: Event) {
        state = (event.target as HTMLInputElement).checked;
    }

    $: $_state = state;

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
>
    <slot />
</div>
