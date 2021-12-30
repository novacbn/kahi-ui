<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../components/interactables/button/Button.svelte";
    import TextInput from "../components/interactables/textinput/TextInput.svelte";
    import Box from "../components/surfaces/box/Box.svelte";

    import {lost_focus} from "./lost_focus";

    let captured = false;

    function on_focus_in(event) {
        captured = true;
    }

    function on_lost_focus(event) {
        captured = false;
    }
</script>

<Meta title="Actions/lost_focus" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette={captured ? "affirmative" : "negative"} padding="small">
        {captured
            ? "shift focus to another element or switch tabs / minimize Browser"
            : "focus inside the text box to start tracking"}
    </Box>

    <TextInput
        palette={captured ? "affirmative" : "negative"}
        actions={[[lost_focus, {enabled: captured, on_lost_focus}]]}
        on:focusin={on_focus_in}
    />

    <Button>Focus me!</Button>
</Story>
