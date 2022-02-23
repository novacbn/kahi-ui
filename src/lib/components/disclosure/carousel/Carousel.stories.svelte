<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Center from "../../layouts/center/Center.svelte";
    import * as Stack from "../../layouts/stack";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Carousel from "./index";

    const SECTIONS = ["negative", "informative", "affirmative", "alert"];

    const ORIENTATIONS = [
        ["horizontal", true],
        ["vertical", false],
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

<Meta title="Disclosure/Carousel" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Carousel.Container style="width:300px;height:200px;">
        <Carousel.Section>
            <Box palette="negative">
                <Center height="100">300 x 200</Center>
            </Box>
        </Carousel.Section>

        <Carousel.Section>
            <Box palette="affirmative">
                <Center height="100">300 x 200</Center>
            </Box>
        </Carousel.Section>

        <Carousel.Section>
            <Box palette="alert">
                <Center height="100">300 x 200</Center>
            </Box>
        </Carousel.Section>
    </Carousel.Container>
</Story>

<Story name="Orientation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Carousel.Container
                    orientation={is_default ? undefined : orientation}
                    style="width:300px;height:200px;"
                >
                    {#each SECTIONS as palette}
                        <Carousel.Section>
                            <Box {palette}>
                                <Center height="100">300 x 200</Center>
                            </Box>
                        </Carousel.Section>
                    {/each}
                </Carousel.Container>
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

                <Carousel.Container
                    spacing={is_default ? undefined : spacing}
                    style="width:300px;height:200px;"
                >
                    {#each SECTIONS as palette}
                        <Carousel.Section>
                            <Box {palette}>
                                <Center height="100">300 x 200</Center>
                            </Box>
                        </Carousel.Section>
                    {/each}
                </Carousel.Container>
            </div>
        {/each}
    </Stack.Container>
</Story>
