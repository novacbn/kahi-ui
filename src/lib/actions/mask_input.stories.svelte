<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {mask_input} from "./mask_input";

    const CHARACTERS_HEXADECIMAL = new Set([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ]);

    const EXPRESSION_COMPILED = /^[0-9a-fA-F]+$/;

    const EXPRESSION_STRING = "[0-9a-fA-F]+";

    function on_mask(event) {
        for (const character of event.detail.value) {
            if (!CHARACTERS_HEXADECIMAL.has(character.toLowerCase())) {
                event.preventDefault();
                return;
            }
        }
    }
</script>

<Meta title="Actions/mask_input" />

<Template>
    <slot />
</Template>

<Story name="Preview - String Expression">
    <input type="text" use:mask_input={{enabled: true, pattern: EXPRESSION_STRING}} />
</Story>

<Story name="Preview - Compiled Expression">
    <input type="text" use:mask_input={{enabled: true, pattern: EXPRESSION_COMPILED}} />
</Story>

<Story name="Preview - Event">
    <input type="text" use:mask_input={{enabled: true, on_mask}} />
</Story>
