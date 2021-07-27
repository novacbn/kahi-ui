<script lang="ts">
    // TODO: Stories (?)

    import {afterUpdate} from "svelte";

    import type {IFormStateValue} from "../../../lib/stores/formstate";
    import {make_formstate_context} from "../../../lib/stores/formstate";
    import {CONTEXT_FORM_NAME, make_id_context} from "../../../lib/stores/id";

    type $$Props = {
        logic_name?: string;
        logic_state?: IFormStateValue;
    };

    export let logic_name: $$Props["logic_name"] = "";
    export let logic_state: $$Props["logic_state"] = "";

    const _form_name = make_id_context(logic_name as string, CONTEXT_FORM_NAME);
    const _form_state = make_formstate_context(logic_state as IFormStateValue);

    afterUpdate(() => {
        $_form_state = logic_state as IFormStateValue;
    });

    $: $_form_name = logic_name as string;
    $: logic_state = $_form_state;
</script>

<slot />
