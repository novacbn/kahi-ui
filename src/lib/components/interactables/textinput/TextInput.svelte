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
        max_length?: number | undefined;
        min_length?: number | undefined;
        pattern?: RegExp | string;

        characters?: number | string;
        lines?: number | string;

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
    export let max_length: $$Props["max_length"] = undefined;
    export let min_length: $$Props["min_length"] = undefined;
    export let pattern: $$Props["pattern"] = "";

    export let characters: $$Props["characters"] = undefined;
    export let lines: $$Props["lines"] = undefined;

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

    $: _pattern = typeof pattern === "string" ? pattern : (pattern as RegExp).source;
</script>

{#if is === "textarea"}
    <textarea
        bind:this={element}
        {...map_global_attributes($$props)}
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
            cols: characters,
            disabled,
            id: _id,
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            placeholder,
            readonly,
            required,
            rows: lines,
            spellcheck: spell_check === undefined ? undefined : spell_check.toString(),
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
        {...map_global_attributes($$props)}
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
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
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
        {...map_global_attributes($$props)}
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
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
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
        {...map_global_attributes($$props)}
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
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
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
        {...map_global_attributes($$props)}
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
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
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
        {...map_global_attributes($$props)}
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
            maxlength: max_length,
            minlength: min_length,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
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
