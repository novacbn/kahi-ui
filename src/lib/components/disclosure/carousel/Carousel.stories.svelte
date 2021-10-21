<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Center from "../../layouts/center/Center.svelte";
    import Box from "../../surfaces/box/Box.svelte";

    import * as Carousel from "./index";

    const SECTIONS = ["negative", "affirmative", "alert"];
</script>

<Meta title="Disclosure/Carousel" />

<Template>
    <slot />
</Template>

<Story name="Default">
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

<Story name="Vertical">
    <Carousel.Container orientation="vertical" style="width:300px;height:200px;">
        {#each SECTIONS as palette}
            <Carousel.Section>
                <Box {palette}>
                    <Center height="100">300 x 200</Center>
                </Box>
            </Carousel.Section>
        {/each}
    </Carousel.Container>
</Story>
