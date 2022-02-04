<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Box from "../../surfaces/box/Box.svelte";

    import Text from "../../typography/text/Text.svelte";

    import * as Mosaic from "../mosaic";
    import * as Stack from "../stack";

    import Divider from "./Divider.svelte";

    const PALETTES = [
        ["inherit", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["neutral", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];
</script>

<Meta title="Layouts/Divider" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Divider />
</Story>

<Story name="Palette">
    <Mosaic.Container sizing="large" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Divider palette={is_default ? undefined : palette} />
            </div>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Orientation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">HORIZONTAL / DEFAULT</Text>

            <Box
                palette="inverse"
                padding="small"
                style="display:flex;align-items:center;height:2rem;width:6rem;"
            >
                <Divider />
            </Box>
        </div>

        <div>
            <Text is="strong">VERTICAL</Text>

            <Box palette="inverse" padding="small" width="content-min" style="height:6rem;">
                <Divider orientation="vertical" />
            </Box>
        </div>
    </Stack.Container>
</Story>

<Story name="Text">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <Box palette="inverse" padding="small" style="width:12rem;">
            <Divider>HORIZONTAL</Divider>
        </Box>

        <Box
            palette="inverse"
            padding="small"
            style="display:inline-flex;justify-content:center;width:3rem;height:12rem;"
        >
            <Divider orientation="vertical">VERTICAL</Divider>
        </Box>
    </Stack.Container>
</Story>
