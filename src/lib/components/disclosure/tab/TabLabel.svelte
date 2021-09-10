<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";

    import {get_formstate_context} from "../../../stores/formstate";
    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME, get_id_context} from "../../../stores/id";

    import FormLabel from "../../interactables/form/FormLabel.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;
        state?: boolean;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;
    export let disabled: $$Props["disabled"] = false;
    export let state: $$Props["state"] = false;

    export let palette: $$Props["palette"] = undefined;

    const _form_id = get_id_context(CONTEXT_FORM_ID);
    const _form_name = get_id_context(CONTEXT_FORM_NAME);
    const _form_state = get_formstate_context();

    if (!_form_id) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `formid` Svelte Store from context)"
        );
    }

    if (!_form_name) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `formname` Svelte Store from context)"
        );
    }

    if (!_form_state) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `formstate` Svelte Store from context)"
        );
    }

    function on_change(event: Event): void {
        // HACK: We can't directly bind `checked` on `type="radio"`, so we need to watch events
        state = true;
    }

    $: if (state) {
        _form_state.clear();
        _form_state.push_value($_form_id as string);
    }

    $: state = $_form_state === $_form_id;
</script>

<input
    role="presentation"
    type="radio"
    id={$_form_id}
    name={$_form_name}
    checked={state}
    on:change={on_change}
    on:change
/>

<FormLabel bind:element for={$_form_id} {active} {disabled} {palette} on:click>
    <slot />
</FormLabel>
