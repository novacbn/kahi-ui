<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Stack from "../stack/Stack.svelte";

    import Spacer from "./Spacer.svelte";

    const SPACINGS = [
        ["none", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Layouts/Spacer" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette="inverse" padding="small">
        <Stack orientation="horizontal">
            LEFT
            <Spacer />
            RIGHT
        </Stack>
    </Box>
</Story>

<Story name="Variation">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">BLOCK / DEFAULT</Text>

            <Box palette="dark" margin_top="small" padding="small">
                TOP
                <Spacer spacing="huge" />
                BOTTOM
            </Box>
        </div>

        <div>
            <Text is="strong">INLINE</Text>

            <Box palette="dark" margin_top="small" padding="small">
                LEFT
                <Spacer variation="inline" orientation="horizontal" spacing="huge" />
                RIGHT
            </Box>
        </div>
    </Stack>
</Story>

<Story name="Spacing">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default]}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    TOP
                    <Spacer {spacing} />
                    BOTTOM
                </Box>
            </div>
        {/each}
    </Stack>
</Story>
