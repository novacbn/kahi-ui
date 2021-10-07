<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";

    import TextInput from "./TextInput.svelte";

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
</script>

<Meta title="Interactables/TextInput" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <TextInput value="This is a TextInput" />
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack>
</Story>

<Story name="Block">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                variation="block"
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack>
</Story>

<Story name="Flush">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <TextInput
                variation="flush"
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <TextInput
                value={`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
                {size}
            />
        {/each}
    </Stack>
</Story>

<Story name="TextArea">
    <TextInput is="textarea" value="This is a TextArea" characters="20" lines="10" />
</Story>
