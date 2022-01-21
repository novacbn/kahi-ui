<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";
    import * as Stack from "../stack";

    import * as Grid from "./";

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

<Meta title="Layouts/Grid" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Grid.Container points={["6", "mobile:3", "tablet:4", "desktop:5"]} spacing="medium">
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />

        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />

        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />

        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />

        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />

        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />

        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
    </Grid.Container>
</Story>

<Story name="Points">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each new Array(12) as _, index}
            <div>
                <Text is="strong">{12 - index}</Text>

                <Box palette="inverse" padding="small">
                    <Grid.Container
                        points={12 - index}
                        spacing="medium"
                        style="width:calc(var(--sizes-icon-massive) * 6);"
                    >
                        <Box palette="alert" variation="borders" height="icon-massive" />
                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />

                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />
                        <Box palette="alert" variation="borders" height="icon-massive" />

                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />
                        <Box palette="alert" variation="borders" height="icon-massive" />

                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />
                        <Box palette="alert" variation="borders" height="icon-massive" />
                    </Grid.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Spacing">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Grid.Container
                        points="3"
                        spacing={is_default ? undefined : spacing}
                        style="width:20rem;"
                    >
                        <Box palette="alert" variation="borders" height="icon-massive" />
                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />

                        <Box palette="affirmative" variation="borders" height="icon-massive" />
                        <Box palette="negative" variation="borders" height="icon-massive" />
                        <Box palette="alert" variation="borders" height="icon-massive" />
                    </Grid.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Span">
    <Grid.Container points={["6", "mobile:3", "tablet:4", "desktop:5"]} spacing="medium">
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Grid.Item span_x={["4", "mobile:1", "tablet:2", "desktop:3"]} span_y="1">
            <Box palette="affirmative" variation="borders" />
        </Grid.Item>
        <Box palette="negative" variation="borders" height="icon-massive" />

        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />

        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />

        <Grid.Item span_x="3" span_y="2">
            <Box palette="negative" variation="borders" />
        </Grid.Item>
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />

        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />

        <Box palette="negative" variation="borders" height="icon-massive" />
        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />

        <Box palette="alert" variation="borders" height="icon-massive" />
        <Box palette="affirmative" variation="borders" height="icon-massive" />
        <Box palette="negative" variation="borders" height="icon-massive" />
    </Grid.Container>
</Story>
