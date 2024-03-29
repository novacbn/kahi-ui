<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_RESIZEABLE} from "../../../types/resizable";
    import type {
        PROPERTY_RADIUS_BREAKPOINT,
        PROPERTY_SHAPE_BREAKPOINT,
    } from "../../../types/shapes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_TEXT_ALIGNMENT, PROPERTY_TEXT_TRANSFORM} from "../../../types/typography";
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
    import {create_event_forwarder} from "../../../util/svelte";

    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME} from "../form/FormGroup.svelte";

    type $$Events = {
        change: InputEvent;

        input: InputEvent;

        mask: IMaskInputEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLInputElement | HTMLTextAreaElement;

        is?: "input" | "textarea";
        type?: "email" | "password" | "text" | "search" | "url";

        disabled?: boolean;
        required?: boolean;
        readonly?: boolean;

        placeholder?: string;
        value?: string;

        mask?: boolean;
        max?: number | string;
        min?: number | string;
        pattern?: RegExp | string;

        span_x?: number | string;
        span_y?: number | string;

        resizable?: PROPERTY_RESIZEABLE;
        spell_check?: boolean;

        alignment_x?: PROPERTY_TEXT_ALIGNMENT;
        palette?: PROPERTY_PALETTE;
        radius?: PROPERTY_RADIUS_BREAKPOINT;
        shape?: PROPERTY_SHAPE_BREAKPOINT;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
        transform?: PROPERTY_TEXT_TRANSFORM;
        variation?: PROPERTY_VARIATION_INPUT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        ISizeProperties;

    const forward = create_event_forwarder();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let id: $$Props["id"] = "";
    export let name: $$Props["name"] = "";

    export let is: $$Props["is"] = "input";
    export let type: $$Props["type"] = "text";

    export let disabled: $$Props["disabled"] = undefined;
    export let required: $$Props["required"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = "";

    export let mask: $$Props["mask"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let pattern: $$Props["pattern"] = "";

    export let span_x: $$Props["span_x"] = undefined;
    export let span_y: $$Props["span_y"] = undefined;

    export let resizable: $$Props["resizable"] = undefined;
    export let spell_check: $$Props["spell_check"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let radius: $$Props["radius"] = undefined;
    export let shape: $$Props["shape"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let transform: $$Props["transform"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    function on_mask(event: IMaskInputEvent): void {
        forward("mask", event);
    }

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;

    // NOTE: `RegExp.toString` returns the expression with the forward slash
    // boundries (`/.../`), which is not compatible with the `<input pattern>`
    // attribute. So we can use `RegExp.source` here which doesn't include them
    $: _pattern = pattern instanceof RegExp ? pattern.source : pattern;
</script>

{#if is === "textarea"}
    <textarea
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            resizable,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            cols: span_x,
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            placeholder,
            readonly,
            required,
            rows: span_y,
            spellcheck: spell_check,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{:else if type === "email"}
    <input
        bind:this={element}
        {...map_global_attributes($$restProps)}
        type="email"
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: span_x,
            value,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{:else if type === "password"}
    <input
        bind:this={element}
        {...map_global_attributes($$restProps)}
        type="password"
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: span_x,
            value,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{:else if type === "search"}
    <input
        bind:this={element}
        {...map_global_attributes($$restProps)}
        type="search"
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: span_x,
            value,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{:else if type === "url"}
    <input
        bind:this={element}
        {...map_global_attributes($$restProps)}
        type="url"
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: span_x,
            value,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{:else}
    <input
        bind:this={element}
        {...map_global_attributes($$restProps)}
        type="text"
        class="text-input {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            radius,
            shape,
            sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max,
            minlength: min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: span_x,
            value,
        })}
        use:mask_input={{enabled: mask, on_mask, pattern}}
        bind:value
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
{/if}
