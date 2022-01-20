<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "./index";

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
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

<Meta title="Layouts/Stack" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Stack.Container>
        <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
        <Box palette="affirmative" variation="borders" style="width:3rem;height:3rem;" />
        <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
    </Stack.Container>
</Story>

<Story name="Orientation">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default]}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small" width="content-min">
                    <Stack.Container {orientation}>
                        <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                        <Box
                            palette="affirmative"
                            variation="borders"
                            style="width:3rem;height:3rem;"
                        />
                        <Box
                            palette="negative"
                            variation="borders"
                            style="width:3rem;height:3rem;"
                        />
                    </Stack.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Wrap">
    <Stack.Container orientation="horizontal" spacing="huge" variation="wrap">
        <Box palette="alert" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="negative" variation="borders" style="width:6rem;height:6rem;" />

        <Box palette="alert" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="negative" variation="borders" style="width:6rem;height:6rem;" />

        <Box palette="alert" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="negative" variation="borders" style="width:6rem;height:6rem;" />

        <Box palette="alert" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="negative" variation="borders" style="width:6rem;height:6rem;" />

        <Box palette="alert" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="affirmative" variation="borders" style="width:6rem;height:6rem;" />
        <Box palette="negative" variation="borders" style="width:6rem;height:6rem;" />
    </Stack.Container>
</Story>

<Story name="Spacing">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default]}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small" width="content-min">
                    <Stack.Container {spacing}>
                        <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                        <Box
                            palette="affirmative"
                            variation="borders"
                            style="width:3rem;height:3rem;"
                        />
                        <Box
                            palette="negative"
                            variation="borders"
                            style="width:3rem;height:3rem;"
                        />
                    </Stack.Container>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Stretch">
    <Stack.Container orientation="horizontal" width="100">
        <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
        <Stack.Item variation="stretch">
            <Box palette="affirmative" variation="borders" style="min-width:3rem;height:3rem;" />
        </Stack.Item>
        <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
    </Stack.Container>
</Story>

<Story name="Alignment">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">DEFAULT</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack.Container>
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">CENTER X/Y</Text>

            <Box palette="inverse" padding="small">
                <Stack.Container alignment="center" style="width:6rem;height:12rem;">
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">STRETCH X</Text>

            <Box palette="inverse" padding="small">
                <Stack.Container alignment-x="stretch" style="width:6rem;height:12rem;">
                    <Box palette="alert" variation="borders" style="min-width:3rem;height:4rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="min-width:3rem;height:4rem;"
                    />
                    <Box
                        palette="negative"
                        variation="borders"
                        style="min-width:3rem;height:4rem;"
                    />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">LEFT X</Text>

            <Box palette="inverse" padding="small">
                <Stack.Container alignment_x="left" style="width:6rem;">
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">RIGHT X</Text>

            <Box palette="inverse" padding="small" style="width:6rem;">
                <Stack.Container alignment_x="right">
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">TOP Y</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack.Container alignment_y="top" style="height:12rem;">
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">BOTTOM Y</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack.Container alignment_y="bottom" style="height:12rem;">
                    <Box palette="alert" variation="borders" style="width:3rem;height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;height:3rem;"
                    />
                    <Box palette="negative" variation="borders" style="width:3rem;height:3rem;" />
                </Stack.Container>
            </Box>
        </div>

        <div>
            <Text is="strong">STRETCH Y</Text>

            <Box palette="inverse" padding="small" width="content-min">
                <Stack.Container alignment_y="stretch" style="height:12rem;">
                    <Box palette="alert" variation="borders" style="width:3rem;min-height:3rem;" />
                    <Box
                        palette="affirmative"
                        variation="borders"
                        style="width:3rem;min-height:3rem;"
                    />
                    <Box
                        palette="negative"
                        variation="borders"
                        style="width:3rem;min-height:3rem;"
                    />
                </Stack.Container>
            </Box>
        </div>
    </Stack.Container>
</Story>
