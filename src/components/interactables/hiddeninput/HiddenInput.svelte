<script lang="ts">
    /**
     * TODO: Stories (?)
     */

    import type {IHTML5Properties} from "../../../lib/types/html5";

    import {CONTEXT_FORM_ID, get_id_context} from "../../../lib/stores/id";

    import {map_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLInputElement;

        value?: string;
    } & IHTML5Properties;

    export let element: $$Props["element"] = undefined;

    export let id: $$Props["id"] = "";

    export let value: $$Props["value"] = "";

    const _form_id = get_id_context(CONTEXT_FORM_ID);
</script>

<input
    bind:this={element}
    {...map_global_attributes($$props)}
    type="hidden"
    {...map_attributes({
        id: _form_id ? $_form_id : id,
    })}
    bind:value
/>
