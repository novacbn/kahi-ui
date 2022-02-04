<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Box from "./Box.svelte";

    const ELEVATIONS = [
        ["none", true],
        ["lowest", false],
        ["lower", false],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["higher", false],
        ["highest", false],
    ];

    const PALETTES = [
        ["auto", true],
        ["inverse", false],
        ["neutral", false],
        ["accent", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const RADIUS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SHAPES = [
        ["circle", false],
        ["pill", false],
    ];
</script>

<Meta title="Surfaces/Box" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Box>This is a Box!</Box>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Box palette={is_default ? undefined : palette} padding="small">
                This is a <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack.Container>
</Story>

<Story name="Borders">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Box palette={is_default ? undefined : palette} variation="borders" padding="small">
                This is a <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elevation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Box palette="inverse" elevation={is_default ? undefined : elevation} padding="small">
                This is a <Text is="strong">
                    {`${elevation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack.Container>
</Story>

<Story name="Radius">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <Box palette="inverse" radius={is_default ? undefined : radius} padding="small">
                This is a <Text is="strong">
                    {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack.Container>
</Story>

<Story name="Shape">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Box palette="inverse" shape={is_default ? undefined : shape} padding="small">
                This is a <Text is="strong">
                    {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text> Box!
            </Box>
        {/each}
    </Stack.Container>
</Story>
