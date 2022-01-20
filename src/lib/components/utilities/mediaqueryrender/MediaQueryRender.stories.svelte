<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import MediaQueryRender from "./MediaQueryRender.svelte";
</script>

<Meta title="Utilities/MediaQueryRender" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Stack.Container spacing="medium">
        <MediaQueryRender queries="(min-width: 1280px) and (min-height: 720px)">
            <Box palette="affirmative" padding="small">
                This is only rendered when the Viewport is at least sHD resolution
            </Box>
        </MediaQueryRender>

        <MediaQueryRender
            queries={["(min-width: 1280px) and (min-height: 720px)", "(aspect-ratio: 16/9)"]}
        >
            <Box palette="affirmative" padding="small">
                This is only rendered when the Viewport is at least sHD resolution <Text
                    is="strong"
                >
                    OR
                </Text> is 16:9.
            </Box>
        </MediaQueryRender>

        <MediaQueryRender queries={["(orientation: portrait)", "(pointer: coarse)"]} behavior="and">
            <Box palette="affirmative" padding="small">
                This is only rendered when the Viewport is in a portrait orientation <Text
                    is="strong"
                >
                    AND
                </Text> the main interaction device is touch.
            </Box>
        </MediaQueryRender>

        <MediaQueryRender queries={["(orientation: landscape)", "(pointer: fine)"]} behavior="and">
            <Box palette="affirmative" padding="small">
                This is only rendered when the Viewport is in a landscape orientation <Text
                    is="strong"
                >
                    AND
                </Text> the main interaction device is mouse / stylus.
            </Box>
        </MediaQueryRender>
    </Stack.Container>
</Story>
