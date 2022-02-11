<script lang="ts">
    import type {IHTML5Properties} from "../../../types/html5";

    import {map_attributes, map_global_attributes} from "../../../util/attributes";

    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME} from "../form/FormGroup.svelte";

    type $$Props = {
        element?: HTMLInputElement;

        value?: string;
    } & IHTML5Properties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let id: $$Props["id"] = undefined;
    export let name: $$Props["name"] = undefined;

    export let value: $$Props["value"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;
</script>

<input
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="hidden-input {_class}"
    type="hidden"
    {...map_attributes({
        id: _id,
        name: _name,
    })}
    bind:value
/>
