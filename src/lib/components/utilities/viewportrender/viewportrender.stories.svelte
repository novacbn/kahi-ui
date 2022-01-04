<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";

    import ViewportRender from "./ViewportRender.svelte";

    const PALETTES = ["alert", "affirmative", "negative"];

    const VIEWPORTS = ["mobile", "tablet", "desktop", "widescreen"];
</script>

<Meta title="Utilities/ViewportRender" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    {#each VIEWPORTS as viewport, index (viewport)}
        <ViewportRender {...{[viewport]: true}}>
            <Box palette={PALETTES[index % PALETTES.length]}>
                I am only visible on {viewport.toUpperCase()} Viewport!
            </Box>
        </ViewportRender>
    {/each}
</Story>
