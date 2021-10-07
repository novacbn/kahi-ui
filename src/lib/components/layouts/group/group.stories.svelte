<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import IMAGE_AVATAR from "../../../../../.storybook/assets/avatar.webp";

    import Figure from "../../embedded/figure/Figure.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Stack from "../stack/Stack.svelte";

    import Group from "./Group.svelte";

    const ORIENTATIONS = [
        ["horizontal", true],
        ["vertical", false],
    ];
</script>

<Meta title="Layouts/Group" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Group>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
    </Group>
</Story>

<Story name="Orientation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default]}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Group {orientation}>
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                        <Button>Button 3</Button>
                    </Group>
                </Box>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Stacked">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default]}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <Group variation="stacked" {orientation}>
                    <Figure variation="icon" size="medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure variation="icon" size="medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure variation="icon" size="medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <!-- TODO: replace w/ `Center` Component -->
                    <div
                        data-padding-x={orientation === "horizontal" ? "small" : "undefined"}
                        data-padding-y={orientation === "vertical" ? "small" : "undefined"}
                        style="display:flex;align-items:center;justify-content:center;"
                    >
                        <Text is="small">+7</Text>
                    </div>
                </Group>
            </div>
        {/each}
    </Stack>
</Story>
