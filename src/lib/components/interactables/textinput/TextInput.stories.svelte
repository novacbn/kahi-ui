<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import TextInput from "./TextInput.svelte";

    const ALIGNMENTS_X = [
        ["inherit", true],
        ["left", false],
        ["center", false],
        ["right", false],
        ["justify", false],
    ];

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
        ["informative", false],
        ["negative", false],
    ];

    const RADIUS = [
        ["small", true],
        ["none", false],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SHAPES = [
        ["circle", false],
        ["pill", false],
    ];

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const TRANSFORMS = [
        ["inherit", true],
        ["capitalize", false],
        ["lowercase", false],
        ["uppercase", false],
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

<Story name="Preview">
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
        {#each PALETTES as [palette, is_default] (palette)}
            <TextInput
                palette={is_default ? undefined : palette}
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <TextInput
                variation="block"
                palette={is_default ? undefined : palette}
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <TextInput
                variation="flush"
                palette={is_default ? undefined : palette}
                value={`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Alignments">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <TextInput
                alignment_x={is_default ? undefined : alignment_x}
                value={`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Transforms">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each TRANSFORMS as [transform, is_default] (transform)}
            <TextInput
                transform={is_default ? undefined : transform}
                value={`${transform.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Radius">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <TextInput
                radius={is_default ? undefined : radius}
                value={`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Shapes">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <TextInput
                shape={is_default ? undefined : shape}
                value={`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <TextInput
                sizing={is_default ? undefined : sizing}
                value={`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""} TextInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="TextArea">
    <TextInput is="textarea" value="This is a TextArea" characters="20" lines="5" />
</Story>
