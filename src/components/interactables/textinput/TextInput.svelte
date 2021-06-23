<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_RESIZEABLE_ARGUMENT} from "../../../lib/types/resizeable";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";
    import type {DESIGN_FILL_INPUT_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let margin: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let size: DESIGN_SIZE_ARGUMENT | undefined = undefined;
    export let variation: DESIGN_FILL_INPUT_VARIATION_ARGUMENT | undefined = undefined;

    export let is: "input" | "textarea" = "input";
    export let type: "email" | "password" | "text" | "search" | "url" = "text";

    export let disabled: boolean = false;
    export let required: boolean = false;
    export let readonly: boolean = false;

    export let max_length: number | undefined = undefined;
    export let min_length: number | undefined = undefined;

    export let pattern: RegExp | string = "";
    export let placeholder: string = "";
    export let value: string = "";

    export let characters: number | undefined = undefined;

    export let lines: number | undefined = undefined;
    export let resizeable: DESIGN_RESIZEABLE_ARGUMENT = false;
    export let spell_check: boolean | undefined = undefined;

    $: _pattern = typeof pattern === "string" ? pattern : pattern.source;
</script>

{#if is === "textarea"}
    <textarea
        bind:this={element}
        {...map_global_attributes($$props)}
        {type}
        {...map_data_attributes({palette, resizeable, size, variation})}
        {...map_attributes({
            cols: characters,
            disabled,
            maxlength: max_length,
            minlength: min_length,
            placeholder,
            readonly,
            required,
            rows: lines,
            spellcheck: spell_check === undefined ? undefined : spell_check.toString(),
            value,
        })}
        on:change
        on:click
        on:input
    />
{:else}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        {type}
        {...map_data_attributes({palette, size, variation})}
        {...map_attributes({
            disabled,
            maxlength: max_length,
            minlength: min_length,
            pattern: _pattern,
            placeholder,
            readonly,
            required,
            size: characters,
            value,
        })}
        on:change
        on:click
        on:input
    />
{/if}
