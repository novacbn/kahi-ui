<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Box from "../../surfaces/box/Box.svelte";

    import Text from "../../typography/text/Text.svelte";

    import Mosaic from "../mosaic/Mosaic.svelte";
    import * as Stack from "../stack";

    import Divider from "./Divider.svelte";

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
</script>

<Meta title="Layouts/Divider" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Divider />
</Story>

<Story name="Palette">
    <Mosaic sizing="large" spacing="medium">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Divider {palette} />
            </div>
        {/each}
    </Mosaic>
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
