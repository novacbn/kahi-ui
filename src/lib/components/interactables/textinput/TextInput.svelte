<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {DESIGN_RESIZEABLE_ARGUMENT} from "../../../types/resizable";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
    } from "../../../types/text";
    import type {DESIGN_FILL_INPUT_VARIATION_ARGUMENT} from "../../../types/variations";

    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME} from "../form/FormGroup.svelte";

    type $$Events = {
        blur: FocusEvent;
        change: InputEvent;
        click: MouseEvent;
        focus: FocusEvent;
        input: InputEvent;
    };

    type $$Props = {
        element?: HTMLInputElement | HTMLTextAreaElement;

        is?: "input" | "textarea";
        type?: "email" | "password" | "text" | "search" | "url";

        disabled?: boolean;
        required?: boolean;
        readonly?: boolean;

        placeholder?: string;
        value?: string;

        max_length?: number | undefined;
        min_length?: number | undefined;
        pattern?: RegExp | string;

        characters?: number;

        lines?: number;
        resizable?: DESIGN_RESIZEABLE_ARGUMENT;
        spell_check?: boolean;

        align?: DESIGN_TEXT_ALIGNMENT_ARGUMENT;
        palette?: PROPERTY_PALETTE;
        size?: PROPERTY_SIZING;
        transform?: DESIGN_TEXT_TRANSFORM_ARGUMENT;
        variation?: DESIGN_FILL_INPUT_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

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

    export let max_length: $$Props["max_length"] = undefined;
    export let min_length: $$Props["min_length"] = undefined;
    export let pattern: $$Props["pattern"] = "";

    export let characters: $$Props["characters"] = undefined;

    export let lines: $$Props["lines"] = undefined;
    export let resizable: $$Props["resizable"] = undefined;
    export let spell_check: $$Props["spell_check"] = undefined;

    export let align: $$Props["align"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let size: $$Props["size"] = undefined;
    export let transform: $$Props["transform"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;

    $: _pattern = typeof pattern === "string" ? pattern : (pattern as RegExp).source;
</script>

{#if is === "textarea"}
    <textarea
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, resizable, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{:else if type === "email"}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="email"
        {...map_data_attributes({align, palette, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{:else if type === "password"}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="password"
        {...map_data_attributes({align, palette, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{:else if type === "search"}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="search"
        {...map_data_attributes({align, palette, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{:else if type === "url"}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="url"
        {...map_data_attributes({align, palette, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{:else}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="text"
        {...map_data_attributes({align, palette, size, transform, variation})}
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
        bind:value
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{/if}
