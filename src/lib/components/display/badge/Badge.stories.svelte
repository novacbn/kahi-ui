<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import Badge from "./Badge.svelte";

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

    const SHAPES = [
        ["none", true],
        ["pill", false],
        ["rounded", false],
    ];
</script>

<Meta title="Display/Badge" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Badge>This is a Badge!</Badge>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Badge {palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Badge
            </Badge>
        {/each}
    </Stack.Container>
</Story>

<Story name="Shape">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Badge palette="inverse" {shape}>
                {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Badge
            </Badge>
        {/each}
    </Stack.Container>
</Story>
