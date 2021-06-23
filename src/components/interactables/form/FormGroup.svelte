<script lang="ts">
    // TODO: Stories (?)

    import {CONTEXT_FORM_NAME, make_id_context} from "../../../lib/stores/id";

    export let logic_name: string = "";

    const _logic_name = make_id_context(logic_name, CONTEXT_FORM_NAME);

    $: $_logic_name = logic_name;
</script>

<slot />
