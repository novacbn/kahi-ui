<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_RESIZEABLE} from "../../../types/resizable";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
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
        max?: number | undefined;
        /**
         * @deprecated Use `<Text max="...">` instead.
         */
        max_length?: number | undefined;
        min?: number | undefined;
        /**
         * @deprecated Use `<Text min="...">` instead.
         */
        min_length?: number | undefined;
        pattern?: RegExp | string;

        /**
         * @deprecated Use `<TextInput span_x="...">` instead.
         */
        characters?: number | string;
        span_x?: number | string;
        /**
         * @deprecated Use `<TextInput span_y="...">` instead.
         */
        lines?: number | string;
        span_y?: number | string;

        resizable?: PROPERTY_RESIZEABLE;
        spell_check?: boolean;

        /**
         * @deprecated Use `<TextInput alignment_x="...">` instead.
         */
        align?: PROPERTY_TEXT_ALIGNMENT;
        alignment_x?: PROPERTY_TEXT_ALIGNMENT;
        palette?: PROPERTY_PALETTE;
        /**
         * @deprecated Use `<TextInput sizing="...">` instead.
         */
        size?: PROPERTY_SIZING;
        sizing?: PROPERTY_SIZING;
        transform?: PROPERTY_TEXT_TRANSFORM;
        variation?: PROPERTY_VARIATION_INPUT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        ISizeProperties;

    const forward = create_event_forwarder();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

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
    /**
     * @deprecated Use `<TextInput max="...">` instead.
     */
    export let max_length: $$Props["max_length"] = undefined;
    export let min: $$Props["min"] = undefined;
    /**
     * @deprecated Use `<TextInput min="...">` instead.
     */
    export let min_length: $$Props["min_length"] = undefined;
    export let pattern: $$Props["pattern"] = "";

    /**
     * @deprecated Use `<TextInput span_x="...">` instead.
     */
    export let characters: $$Props["characters"] = undefined;
    export let span_x: $$Props["span_x"] = undefined;

    /**
     * @deprecated Use `<TextInput span_y="...">` instead.
     */
    export let lines: $$Props["lines"] = undefined;
    export let span_y: $$Props["span_y"] = undefined;

    export let resizable: $$Props["resizable"] = undefined;
    export let spell_check: $$Props["spell_check"] = undefined;

    /**
     * @deprecated Use `<TextInput alignment_x="...">` instead.
     */
    export let align: $$Props["align"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    /**
     * @deprecated Use `<TextInput sizing="...">` instead.
     */
    export let size: $$Props["size"] = undefined;
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            resizable,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            cols: characters ?? span_x,
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            placeholder,
            readonly,
            required,
            rows: lines ?? span_y,
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters ?? span_x,
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters ?? span_x,
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters ?? span_x,
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters ?? span_x,
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
        {...map_data_attributes({
            align: align ?? alignment_x,
            palette,
            size: size ?? sizing,
            transform,
            variation,
        })}
        {...map_attributes({
            disabled,
            id: _id,
            maxlength: max_length ?? max,
            minlength: min_length ?? min,
            name: _name,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters ?? span_x,
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
