<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";

    import Portal from "./Portal.svelte";

    let element = undefined;
</script>

<Meta title="Utilities/Portal" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box bind:element palette="accent" padding="small">I am the new container element!</Box>

    <Portal target={element}>
        <Box padding="small">And I was moved to here!</Box>
    </Portal>
</Story>

<Story name="Lazy">
    <Box bind:element palette="accent" padding="small">I am the new container element!</Box>

    <Portal target={element} loading="lazy">
        <Box padding="small">And I was moved to here!</Box>
    </Portal>
</Story>
