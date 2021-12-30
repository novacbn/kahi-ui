<script context="module" lang="ts">
    const EXPRESSION_NUMBER = "-?\\d+\\.?\\d*";
</script>

<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_TEXT_ALIGNMENT} from "../../../types/typography";
    import type {PROPERTY_VARIATION_INPUT} from "../../../types/variations";

    import {mask_input} from "../../../actions/mask_input";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME} from "../form/FormGroup.svelte";

    type $$Events = {
        change: InputEvent;

        input: InputEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLInputElement;

        disabled?: boolean;
        required?: boolean;
        readonly?: boolean;

        placeholder?: string;
        value?: number;

        characters?: number;

        align?: PROPERTY_TEXT_ALIGNMENT;
        palette?: PROPERTY_PALETTE;
        size?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_INPUT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let id: $$Props["id"] = "";
    export let name: $$Props["name"] = "";

    export let disabled: $$Props["disabled"] = undefined;
    export let required: $$Props["required"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = undefined;

    export let characters: $$Props["characters"] = undefined;

    export let align: $$Props["align"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let size: $$Props["size"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    let _value: string | undefined = value?.toString();

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    function on_input(event: Event): void {
        if (!element) return;

        const new_value = element.value;
        value = new_value ? parseFloat(new_value) : undefined;
    }

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;
    $: _value = value?.toString();
</script>

<input
    bind:this={element}
    {...map_global_attributes($$props)}
    type="text"
    {...map_data_attributes({align, palette, size, variation})}
    {...map_attributes({
        disabled,
        id: _id,
        name: _name,
        pattern: EXPRESSION_NUMBER,
        placeholder,
        readonly,
        required,
        size: characters,
        value,
    })}
    use:mask_input={{enabled: true, pattern: EXPRESSION_NUMBER}}
    on:input={on_input}
    bind:value={_value}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
    on:change
    on:input
/>
