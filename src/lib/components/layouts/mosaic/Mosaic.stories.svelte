<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Stack from "../stack/Stack.svelte";

    import Mosaic from "./Mosaic.svelte";

    const SIZINGS = [
        ["none", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    const SPACINGS = [
        ["none", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Layouts/Mosaic" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Mosaic sizing="huge" spacing="medium">
        <Box palette="alert" style="height:3rem;" />
        <Box palette="affirmative" style="height:3rem;" />
        <Box palette="negative" style="height:3rem;" />

        <Box palette="affirmative" style="height:3rem;" />
        <Box palette="negative" style="height:3rem;" />
        <Box palette="alert" style="height:3rem;" />

        <Box palette="alert" style="height:3rem;" />
        <Box palette="affirmative" style="height:3rem;" />
        <Box palette="negative" style="height:3rem;" />

        <Box palette="negative" style="height:3rem;" />
        <Box palette="alert" style="height:3rem;" />
        <Box palette="affirmative" style="height:3rem;" />

        <Box palette="affirmative" style="height:3rem;" />
        <Box palette="negative" style="height:3rem;" />
        <Box palette="alert" style="height:3rem;" />

        <Box palette="negative" style="height:3rem;" />
        <Box palette="alert" style="height:3rem;" />
        <Box palette="affirmative" style="height:3rem;" />

        <Box palette="alert" style="height:3rem;" />
        <Box palette="affirmative" style="height:3rem;" />
        <Box palette="negative" style="height:3rem;" />
    </Mosaic>
</Story>

<Story name="Sizing">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default]}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Mosaic {sizing}>
                        <Box palette="alert" style="height:3rem;" />
                        <Box palette="affirmative" style="height:3rem;" />
                        <Box palette="negative" style="height:3rem;" />
                    </Mosaic>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Spacing">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default]}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Mosaic {spacing}>
                        <Box palette="alert" style="height:3rem;" />
                        <Box palette="affirmative" style="height:3rem;" />
                        <Box palette="negative" style="height:3rem;" />
                    </Mosaic>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>
