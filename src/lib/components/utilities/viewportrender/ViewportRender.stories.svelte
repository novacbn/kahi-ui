<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Box from "../../surfaces/box/Box.svelte";

    import ViewportRender from "./ViewportRender.svelte";

    const PALETTES = ["alert", "affirmative", "negative"];

    const VIEWPORTS = ["mobile", "tablet", "desktop", "widescreen"];

    const VIEWPORTS_PORTABLE = VIEWPORTS.slice(0, 2);

    const VIEWPORTS_STATIONARY = VIEWPORTS.slice(2, 4);
</script>

<Meta title="Utilities/ViewportRender" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Stack.Container spacing="medium">
        {#each VIEWPORTS as viewport, index (viewport)}
            <ViewportRender {...{[viewport]: true}}>
                <Box palette={PALETTES[index % PALETTES.length]} padding="small">
                    I am only visible on {viewport.toUpperCase()} Viewport!
                </Box>
            </ViewportRender>
        {/each}

        <ViewportRender
            {...Object.fromEntries(VIEWPORTS_PORTABLE.map((value, index) => [value, true]))}
        >
            <Box palette="accent" padding="small">
                I am only visible on {VIEWPORTS_PORTABLE.join(", ").toUpperCase()} Viewports!
            </Box>
        </ViewportRender>

        <ViewportRender
            {...Object.fromEntries(VIEWPORTS_STATIONARY.map((value, index) => [value, true]))}
        >
            <Box palette="accent" padding="small">
                I am only visible on {VIEWPORTS_STATIONARY.join(", ").toUpperCase()} Viewports!
            </Box>
        </ViewportRender>
    </Stack.Container>
</Story>
