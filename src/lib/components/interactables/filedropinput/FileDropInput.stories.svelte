<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Mosaic from "../../layouts/mosaic/Mosaic.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import FileDropInput from "./FileDropInput.svelte";

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    function on_change(event) {
        console.log("on_change", event.target.files);
    }
</script>

<Meta title="Interactables/FileDropInput" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette="negative" margin_bottom="medium">
        Drop files into box and read output in devtools.
    </Box>

    <FileDropInput on:change={on_change}>
        <Stack spacing="medium">
            <Text is="strong" style="font-size:3em;">&uparrow;</Text>
            <Text>Drag-and-drop files here...</Text>
        </Stack>
    </FileDropInput>
</Story>

<Story name="Palette">
    <Mosaic sizing="huge" spacing="medium">
        {#each PALETTES as [palette, is_default]}
            <FileDropInput {palette}>
                <Stack spacing="medium">
                    <Text is="strong" style="font-size:3em;">&uparrow;</Text>
                    <Text>
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Stack>
            </FileDropInput>
        {/each}
    </Mosaic>
</Story>
