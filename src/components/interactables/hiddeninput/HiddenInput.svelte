<script lang="ts">
    import {CONTEXT_FORM_ID, get_id_context} from "../../../lib/stores/id";

    import {map_attributes, map_global_attributes} from "../../../lib/util/attributes";

    // TODO: Stories?

    export let element: HTMLInputElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";

    export {_class as class};

    export let value: string = "";

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
