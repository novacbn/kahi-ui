<script>
    import Button from "../../../interactables/button/Button.svelte";
    import Box from "../../../surfaces/box/Box.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Offscreen from "../Offscreen.svelte";
</script>

<Button for="offscreen-default-story" palette="accent">Open Offscreen</Button>

<Offscreen
    {...$$props}
    logic_id="offscreen-default-story"
    placement="top"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack orientation="horizontal" alignment_y="center" spacing="medium">
            <ContextButton palette="light" variation="clear">X</ContextButton>
            I am hidden on all Viewports!
        </Stack>
    </Box>
</Offscreen>
