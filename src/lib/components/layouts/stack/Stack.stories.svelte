<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Stack from "./Stack.svelte";

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
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

<Meta title="Layouts/Stack" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Stack>
        <Box palette="alert" style="width:3rem;height:3rem;" />
        <Box palette="affirmative" style="width:3rem;height:3rem;" />
        <Box palette="negative" style="width:3rem;height:3rem;" />
    </Stack>
</Story>

<Story name="Orientation">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default]}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small" width="content-min">
                    <Stack {orientation}>
                        <Box palette="alert" style="width:3rem;height:3rem;" />
                        <Box palette="affirmative" style="width:3rem;height:3rem;" />
                        <Box palette="negative" style="width:3rem;height:3rem;" />
                    </Stack>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Wrap">
    <Stack orientation="horizontal" spacing="huge" variation="wrap">
        <Box palette="alert" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" style="width:6rem;height:6rem;" />
        <Box palette="negative" style="width:6rem;height:6rem;" />

        <Box palette="alert" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" style="width:6rem;height:6rem;" />
        <Box palette="negative" style="width:6rem;height:6rem;" />

        <Box palette="alert" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" style="width:6rem;height:6rem;" />
        <Box palette="negative" style="width:6rem;height:6rem;" />

        <Box palette="alert" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" style="width:6rem;height:6rem;" />
        <Box palette="negative" style="width:6rem;height:6rem;" />

        <Box palette="alert" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" style="width:6rem;height:6rem;" />
        <Box palette="negative" style="width:6rem;height:6rem;" />
    </Stack>
</Story>

<Story name="Spacing">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default]}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small" width="content-min">
                    <Stack {spacing}>
                        <Box palette="alert" style="width:3rem;height:3rem;" />
                        <Box palette="affirmative" style="width:3rem;height:3rem;" />
                        <Box palette="negative" style="width:3rem;height:3rem;" />
                    </Stack>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Alignment">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">DEFAULT</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack {...$$props}>
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">CENTER X/Y</Text>

            <Box palette="inverse" padding="small">
                <Stack alignment="center" style="width:6rem;height:12rem;">
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">STRETCH X</Text>

            <Box palette="inverse" padding="small">
                <Stack alignment="stretch" style="width:6rem;height:12rem;">
                    <Box palette="alert" style="min-width:3rem;min-height:3rem;" />
                    <Box palette="affirmative" style="min-width:3rem;height:3rem;" />
                    <Box palette="negative" style="min-width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">LEFT X</Text>

            <Box palette="inverse" padding="small">
                <Stack alignment_x="left" style="width:6rem;">
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">RIGHT X</Text>

            <Box palette="inverse" padding="small" style="width:6rem;">
                <Stack alignment_x="right">
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">TOP Y</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack alignment_y="top" style="height:12rem;">
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>

        <div>
            <Text is="strong">BOTTOM Y</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack alignment_y="bottom" style="height:12rem;">
                    <Box palette="alert" style="width:3rem;height:3rem;" />
                    <Box palette="affirmative" style="width:3rem;height:3rem;" />
                    <Box palette="negative" style="width:3rem;height:3rem;" />
                </Stack>
            </Box>
        </div>
    </Stack>
</Story>
