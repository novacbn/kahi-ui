<script context="module" lang="ts">
    const EXPRESSION_NUMBER = /^-?\d*\.?\d*$/;
</script>

<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {
        PROPERTY_RADIUS_BREAKPOINT,
        PROPERTY_SHAPE_BREAKPOINT,
    } from "../../../types/shapes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_TEXT_ALIGNMENT} from "../../../types/typography";
    import type {PROPERTY_VARIATION_INPUT} from "../../../types/variations";

    import type {IMaskInputEvent} from "../../../actions/mask_input";
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

        max?: number | string;
        min?: number | string;

        span_x?: number | string;

        alignment_x?: PROPERTY_TEXT_ALIGNMENT;
        palette?: PROPERTY_PALETTE;
        radius?: PROPERTY_RADIUS_BREAKPOINT;
        shape?: PROPERTY_SHAPE_BREAKPOINT;
        sizing?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_INPUT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        ISizeProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let id: $$Props["id"] = "";
    export let name: $$Props["name"] = "";

    export let disabled: $$Props["disabled"] = undefined;
    export let required: $$Props["required"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let span_x: $$Props["span_x"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let radius: $$Props["radius"] = undefined;
    export let shape: $$Props["shape"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    let _value: string | undefined = value?.toString();

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    function on_input(event: Event): void {
        if (!element) return;

        const new_value = element.value;

        // NOTE: We need to special case the minus (`-`) symbol so
        // users can start writing negative numbers without number
        // characters being present
        value = new_value && new_value !== "-" ? parseFloat(new_value) : undefined;
    }

    function on_mask(event: IMaskInputEvent): void {
        const {value} = event.detail;
        if (!value) return;

        if (!EXPRESSION_NUMBER.test(value)) {
            event.preventDefault();
            event.stopPropagation();
        } else if (_max || _min) {
            const parsed = parseFloat(value);

            if ((_max && _max < parsed) || (_min && _min > parsed)) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;

    $: _max = typeof max === "string" ? parseFloat(max) : max;
    $: _min = typeof min === "string" ? parseFloat(min) : min;
    // NOTE: The `<input pattern />` already handles the expressions as
    // single line (`^...$`), so we need to strip it from output
    $: _pattern = EXPRESSION_NUMBER.source.slice(1, -1);

    $: _value = value?.toString();
</script>

<input
    bind:this={element}
    {...map_global_attributes($$restProps)}
    type="text"
    class="number-input {_class}"
    {...map_data_attributes({alignment_x, palette, radius, shape, sizing, variation})}
    {...map_attributes({
        disabled,
        id: _id,
        name: _name,
        pattern: _pattern,
        placeholder,
        readonly,
        required,
        size: span_x,
        value,
    })}
    use:mask_input={{enabled: true, on_mask}}
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
