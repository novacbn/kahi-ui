<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import TextInput from "./TextInput.svelte";

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

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const SIZES = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    function on_mask(event) {
        for (const character of event.detail.value) {
            if (!CHARACTERS_HEXADECIMAL.has(character.toLowerCase())) {
                event.preventDefault();
                return;
            }
        }
    }
</script>

<Meta title="Interactables/TextInput" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <TextInput value="This is a TextInput" />
</Story>

<Story name="Mask - Pattern">
    <TextInput pattern="[0-9a-fA-F]+" mask />
</Story>

<Story name="Mask - Event">
    <TextInput mask on:mask={on_mask} />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                variation="block"
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                variation="flush"
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Size">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <TextInput
                value={`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {size}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="TextArea">
    <TextInput is="textarea" value="This is a TextArea" characters="20" lines="5" />
</Story>
