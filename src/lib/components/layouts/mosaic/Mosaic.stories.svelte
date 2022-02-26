<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "../stack";

    import * as Mosaic from "./index";

    const SIZINGS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SPACINGS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Layouts/Mosaic" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Mosaic.Container sizing="huge" spacing="medium">
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />

        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />

        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />

        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />

        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />

        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />

        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
    </Mosaic.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Mosaic.Container sizing={is_default ? undefined : sizing}>
                        <Box palette="alert" height="icon-massive" variation="borders" />
                        <Box palette="affirmative" height="icon-massive" variation="borders" />
                        <Box palette="negative" height="icon-massive" variation="borders" />
                    </Mosaic.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Spacing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Mosaic.Container spacing={is_default ? undefined : spacing}>
                        <Box palette="alert" size="icon-massive" variation="borders" />
                        <Box palette="affirmative" size="icon-massive" variation="borders" />
                        <Box palette="negative" size="icon-massive" variation="borders" />
                    </Mosaic.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Span">
    <Mosaic.Container sizing="huge" spacing="medium">
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Mosaic.Item span_x={["3", "mobile:1", "tablet:2"]}>
            <Box palette="affirmative" height="icon-massive" variation="borders" />
        </Mosaic.Item>
        <Box palette="negative" height="icon-massive" variation="borders" />

        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />

        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />

        <Mosaic.Item span_x="2">
            <Box palette="negative" height="icon-massive" variation="borders" />
        </Mosaic.Item>
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />

        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />

        <Box palette="negative" height="icon-massive" variation="borders" />
        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />

        <Box palette="alert" height="icon-massive" variation="borders" />
        <Box palette="affirmative" height="icon-massive" variation="borders" />
        <Box palette="negative" height="icon-massive" variation="borders" />
    </Mosaic.Container>
</Story>
