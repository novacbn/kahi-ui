<script lang="ts">
    import {afterUpdate} from "svelte";

    // TODO: Stories (?)

    import type {IFormStateValue} from "../../../lib/stores/formstate";
    import {make_formstate_context} from "../../../lib/stores/formstate";
    import {CONTEXT_FORM_NAME, make_id_context} from "../../../lib/stores/id";

    export let logic_name: string = "";
    export let logic_state: IFormStateValue = "";

    const _form_name = make_id_context(logic_name, CONTEXT_FORM_NAME);
    const _form_state = make_formstate_context(logic_state);

    afterUpdate(() => {
        $_form_state = logic_state;
    });

    $: $_form_name = logic_name;
    $: logic_state = $_form_state;
</script>

<slot />
