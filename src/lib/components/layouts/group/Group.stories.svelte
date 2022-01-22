<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import IMAGE_AVATAR from "../../../../../.storybook/assets/avatar.webp";

    import Figure from "../../embedded/figure/Figure.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Center from "../center/Center.svelte";
    import * as Stack from "../stack";

    import Group from "./Group.svelte";

    const ORIENTATIONS = [
        ["horizontal", true],
        ["vertical", false],
    ];

    const SPACINGS = [
        ["large", true],
        ["none", false],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["huge", false],
        ["massive", false],
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
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Box palette="inverse" padding="small">
                    <Group orientation={is_default ? undefined : orientation}>
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                        <Button>Button 3</Button>
                    </Group>
                </Box>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Stacked - Preview">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <Group variation="stacked" orientation={is_default ? undefined : orientation}>
                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Center
                        padding-x={orientation === "horizontal" ? "small" : undefined}
                        padding-y={orientation === "vertical" ? "small" : undefined}
                    >
                        <Text is="small">+7</Text>
                    </Center>
                </Group>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Stacked - Spacing">
    <Stack.Container spacing="medium">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <div>
                <Text is="strong">
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <Group variation="stacked" spacing={is_default ? undefined : spacing}>
                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Figure size="icon-medium" shape="pill">
                        <img src={IMAGE_AVATAR} />
                    </Figure>

                    <Center
                        padding-x={spacing === "horizontal" ? "small" : undefined}
                        padding-y={spacing === "vertical" ? "small" : undefined}
                    >
                        <Text is="small">+7</Text>
                    </Center>
                </Group>
            </div>
        {/each}
    </Stack.Container>
</Story>
