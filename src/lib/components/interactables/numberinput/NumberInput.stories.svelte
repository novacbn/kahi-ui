<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import NumberInput from "./NumberInput.svelte";

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

<Meta title="Interactables/NumberInput" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <NumberInput value={42} />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <NumberInput
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <NumberInput
                variation="block"
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <NumberInput
                variation="flush"
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
                {palette}
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Size">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <NumberInput
                placeholder={`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""} NumberInput`}
                characters="20"
                {size}
            />
        {/each}
    </Stack.Container>
</Story>
