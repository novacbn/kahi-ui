<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Box from "./Box.svelte";

    const ELEVATIONS = [
        ["none", true],
        ["lowest", false],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["highest", false],
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
        ["negative", false],
    ];

    const SHAPES = [
        ["none", true],
        ["pill", false],
        ["rounded", false],
    ];
</script>

<Meta title="Surfaces/Box" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box>This is a Box!</Box>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Box {palette}>
                This is a <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack>
</Story>

<Story name="Elevation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Box palette="inverse" {elevation}>
                This is a <Text is="strong">
                    {`${elevation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack>
</Story>

<Story name="Shape">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Box palette="inverse" padding="huge" {shape}>
                This is a <Text is="strong">
                    {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack>
</Story>
