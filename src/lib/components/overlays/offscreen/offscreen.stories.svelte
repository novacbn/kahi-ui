<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import ContextButton from "../../utilities/contextbutton/ContextButton.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

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

    <Offscreen logic_id="offscreen-default-story" placement="top" hidden captive dismissible>
        <Box palette="accent" padding="medium">
            <Stack orientation="horizontal" alignment_y="center" spacing="medium">
                <ContextButton palette="light" variation="clear">X</ContextButton>
                I am hidden on all Viewports!
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
            hidden
            captive
            dismissible
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
