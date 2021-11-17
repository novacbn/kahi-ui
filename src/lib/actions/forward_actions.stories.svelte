<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../components/surfaces/box/Box.svelte";

    import {click_outside} from "./click_outside";

    function on_click(event) {
        is_clicked = true;
    }

    function on_click_outside(event) {
        is_clicked = false;
    }

    let is_clicked = false;
</script>

<Meta title="Actions/forward_actions" />

<Template>
    <slot />
</Template>

<Story name="One">
    <Box
        palette={is_clicked ? "affirmative" : "negative"}
        padding="small"
        on:click={on_click}
        actions={[[click_outside, {on_click_outside}]]}
    >
        {is_clicked ? "I was clicked inside!" : "I am currently not clicked..."}
    </Box>
</Story>
