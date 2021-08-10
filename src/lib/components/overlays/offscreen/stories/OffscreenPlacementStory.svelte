<script>
    import Button from "../../../interactables/button/Button.svelte";
    import Box from "../../../surfaces/box/Box.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Offscreen from "../Offscreen.svelte";

    const placements = ["top", "left", "bottom", "right"];
</script>

{#each placements as placement}
    <Button for="offscreen-placement-story-{placement}" palette="accent">
        Open {placement.toUpperCase()} Offscreen
    </Button>

    <Offscreen
        {...$$props}
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
