<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";

    import HiddenInput from "./HiddenInput.svelte";
</script>

<Meta title="Interactables/HiddenInput" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette="negative">View the sibling element below this one in devtools.</Box>

    <HiddenInput value="This is a HiddenInput" />
</Story>
