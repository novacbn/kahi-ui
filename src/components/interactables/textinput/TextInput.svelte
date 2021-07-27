<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_RESIZEABLE_ARGUMENT} from "../../../lib/types/resizable";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";
    import type {
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
    } from "../../../lib/types/text";
    import type {DESIGN_FILL_INPUT_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {CONTEXT_FORM_ID, get_id_context} from "../../../lib/stores/id";

    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

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
        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        transform?: DESIGN_TEXT_TRANSFORM_ARGUMENT;
        variation?: DESIGN_FILL_INPUT_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let id: $$Props["id"] = "";

    export let is: $$Props["is"] = "input";
    export let type: $$Props["type"] = "text";

    export let disabled: $$Props["disabled"] = false;
    export let required: $$Props["required"] = false;
    export let readonly: $$Props["readonly"] = false;

    export let placeholder: $$Props["placeholder"] = "";
    export let value: $$Props["value"] = "";

    export let max_length: $$Props["max_length"] = undefined;
    export let min_length: $$Props["min_length"] = undefined;
    export let pattern: $$Props["pattern"] = "";

    export let characters: $$Props["characters"] = undefined;

    export let lines: $$Props["lines"] = undefined;
    export let resizable: $$Props["resizable"] = false;
    export let spell_check: $$Props["spell_check"] = undefined;

    export let align: $$Props["align"] = undefined;
    export let palette: $$Props["palette"] = undefined;
    export let size: $$Props["size"] = undefined;
    export let transform: $$Props["transform"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _form_id = get_id_context(CONTEXT_FORM_ID);

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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
            id: _form_id ? $_form_id : id,
            maxlength: max_length,
            minlength: min_length,
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
