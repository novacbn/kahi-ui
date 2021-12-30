<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Code from "../../typography/code/Code.svelte";
    import ContextButton from "../../utilities/contextbutton/ContextButton.svelte";

    import Offscreen from "./Offscreen.svelte";

    const PLACEMENTS = [
        ["left", true],
        ["right", false],
        ["top", false],
        ["bottom", false],
    ];
</script>

<Meta title="Overlays/Offscreen" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button for="offscreen-default-story" palette="accent">Open Offscreen</Button>

    <Offscreen logic_id="offscreen-default-story" placement="top" captive hidden>
        <Box palette="accent" padding="medium">
            <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                <ContextButton palette="light" variation="clear">X</ContextButton>
                I am hidden on all Viewports!
            </Stack>
        </Box>
    </Offscreen>
</Story>

<Story name="Dismissible">
    <Button for="offscreen-dismissible" palette="accent">Open DISMISSIBLE Offscreen</Button>

    <Offscreen logic_id="offscreen-dismissible" placement="top" dismissible hidden>
        <Box palette="accent" padding="medium">
            <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                <ContextButton palette="light" variation="clear">X</ContextButton>
                DISMISSIBLE Offscreen
            </Stack>
        </Box>
    </Offscreen>
</Story>

<Story name="Lazy">
    <Box palette="negative" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>div</Code> elements' contents.
    </Box>

    <Button for="offscreen-once" palette="accent">Open LAZY Offscreen</Button>

    <Offscreen logic_id="offscreen-once" placement="top" loading="lazy" hidden>
        <Box palette="accent" padding="medium">
            <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                <ContextButton palette="light" variation="clear">X</ContextButton>
                LAZY Offscreen
            </Stack>
        </Box>
    </Offscreen>
</Story>

<Story name="Once">
    <Button for="offscreen-once" palette="accent">Open ONCE Offscreen</Button>

    <Offscreen logic_id="offscreen-once" placement="top" hidden once>
        <Box palette="accent" padding="medium">
            <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                <ContextButton palette="light" variation="clear">X</ContextButton>
                ONCE Offscreen
            </Stack>
        </Box>
    </Offscreen>
</Story>

<Story name="Placement">
    {#each PLACEMENTS as [placement, is_default] (placement)}
        <Button for="offscreen-placement-story-{placement}" palette="accent">
            Open {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Offscreen
        </Button>

        <Offscreen
            logic_id="offscreen-placement-story-{placement}"
            {placement}
            captive
            dismissible
            hidden
        >
            <Box palette="accent" padding="medium">
                <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                    <ContextButton palette="light" variation="clear">X</ContextButton>
                    I am a {placement.toUpperCase()} Offscreen!
                </Stack>
            </Box>
        </Offscreen>
    {/each}
</Story>
