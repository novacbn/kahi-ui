<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import NumberInput from "../../interactables/numberinput/NumberInput.svelte";
    import Box from "../../surfaces/box/Box.svelte";

    import Animation from "./Animation.svelte";

    let iterations = 0;
    let variation = "play";

    function on_variation_click(event) {
        variation = variation === "play" ? "pause" : "play";
    }
</script>

<Meta title="Utilities/Animation" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Animation animation="bounce">
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Delay">
    <Animation animation="bounce">
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce" delay={-0.75}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce" delay={-0.5}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce" delay={-0.25}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Duration">
    <Animation animation="bounce" duration={0.25}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce">
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce" duration={1.75}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>

    <Animation animation="bounce" duration={2.5}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Variation">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Animation animation="bounce" {variation}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Iterations">
    <NumberInput bind:value={iterations} />

    <Animation animation="bounce" {iterations}>
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Bounce">
    <Animation animation="bounce">
        <Box palette="inverse" padding="small" max_width="content-max">
            I booouunce, I bounce so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Ping">
    <Animation animation="ping">
        <Box palette="inverse" padding="small" max_width="content-max">
            I piiinggg, I ping so far awaaaaaay~!
        </Box>
    </Animation>
</Story>

<Story name="Pulse">
    <Animation animation="pulse">
        <Box palette="inverse" padding="small" max_width="content-max">
            I puuuulse, I pulse so far awaaaaaay~!
        </Box>
    </Animation>
</Story>
