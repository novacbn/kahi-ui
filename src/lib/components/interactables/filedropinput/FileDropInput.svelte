<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME} from "../form/FormGroup.svelte";

    type $$Events = {
        change: InputEvent;
        click: MouseEvent;
        input: InputEvent;
    };

    type $$Props = {
        element?: HTMLDivElement;

        disabled?: boolean;

        accept?: string;
        multiple?: boolean;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let id: $$Props["id"] = undefined;
    export let name: $$Props["name"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;

    export let accept: $$Props["accept"] = undefined;
    export let multiple: $$Props["multiple"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="file-drop-input {_class}"
    {...map_data_attributes({palette})}
>
    <slot />

    <input
        type="file"
        {...map_attributes({
            accept,
            disabled,
            id: _id,
            multiple,
            name: _name,
        })}
        on:change
        on:click
        on:input
    />
</div>
