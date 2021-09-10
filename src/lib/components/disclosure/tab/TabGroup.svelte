<script lang="ts">
    import {CONTEXT_FORM_ID, make_id_context} from "../../../stores/id";

    type $$Props = {
        logic_id: string;
    };

    type $$Slots = {
        default: {};
    };

    export let logic_id: $$Props["logic_id"];

    const _logic_id = make_id_context(logic_id as string, CONTEXT_FORM_ID);

    $: $_logic_id = logic_id as string;
</script>

<slot />
