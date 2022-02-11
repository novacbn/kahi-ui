<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import NumberInput from "./NumberInput.svelte";

    const ALIGNMENTS_X = [
        ["inherit", true],
        ["left", false],
        ["center", false],
        ["right", false],
        ["justify", false],
    ];

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
</script>

<Meta title="Interactables/NumberInput" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <NumberInput value={42} />
</Story>

<Story name="Maximum + Minimum">
    <NumberInput max={84} min={-84} value={42} />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <NumberInput
                palette={is_default ? undefined : palette}
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <NumberInput
                variation="block"
                palette={is_default ? undefined : palette}
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <NumberInput
                variation="flush"
                palette={is_default ? undefined : palette}
                placeholder={`${palette.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Alignments">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <NumberInput
                alignment_x={is_default ? undefined : alignment_x}
                placeholder={`${alignment_x.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Transforms">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each TRANSFORMS as [transform, is_default] (transform)}
            <NumberInput
                transform={is_default ? undefined : transform}
                placeholder={`${transform.toUpperCase()}${
                    is_default ? " / DEFAULT" : ""
                } NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Radius">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <NumberInput
                radius={is_default ? undefined : radius}
                placeholder={`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""} NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Shapes">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <NumberInput
                shape={is_default ? undefined : shape}
                placeholder={`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""} NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <NumberInput
                sizing={is_default ? undefined : sizing}
                placeholder={`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""} NumberInput`}
                characters="20"
            />
        {/each}
    </Stack.Container>
</Story>
