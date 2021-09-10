<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../components/interactables/button/Button.svelte";
    import Box from "../components/surfaces/box/Box.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";

    import {scrolllock} from "./scrolllock";

    const scrolllock_store = scrolllock();

    function on_click(event) {
        $scrolllock_store = !$scrolllock_store;
    }
</script>

<Meta title="Stores/scrolllock" />

<Template>
    <slot />
</Template>

<Story name="default">
    <Button on:click={on_click}>Toggle Scroll Lock</Button>

    <Box palette="accent" padding="small">
        <Heading>Scrollable content</Heading>
        <Heading is="h2">Scrollable content</Heading>
        <Heading is="h3">Scrollable content</Heading>
        <Heading is="h4">Scrollable content</Heading>
    </Box>

    <Box palette="affirmative" padding="small">
        <Heading>Scrollable content</Heading>
        <Heading is="h2">Scrollable content</Heading>
        <Heading is="h3">Scrollable content</Heading>
        <Heading is="h4">Scrollable content</Heading>
    </Box>

    <Box palette="negative" padding="small">
        <Heading>Scrollable content</Heading>
        <Heading is="h2">Scrollable content</Heading>
        <Heading is="h3">Scrollable content</Heading>
        <Heading is="h4">Scrollable content</Heading>
    </Box>

    <Box palette="alert" padding="small">
        <Heading>Scrollable content</Heading>
        <Heading is="h2">Scrollable content</Heading>
        <Heading is="h3">Scrollable content</Heading>
        <Heading is="h4">Scrollable content</Heading>
    </Box>
</Story>
