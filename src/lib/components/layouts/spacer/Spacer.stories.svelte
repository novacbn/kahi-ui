<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "../stack";

    import Spacer from "./Spacer.svelte";

    const SPACINGS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Layouts/Spacer" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Box palette="inverse" padding="small" max_width="content-max">
        LEFT
        <Spacer is="span" spacing_x="huge" />
        RIGHT
    </Box>
</Story>

<Story name="Elements">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">DIV / DEFAULT</Text>

            <Box palette="inverse" margin_top="small" padding="small">
                TOP
                <Spacer spacing_y="huge" />
                BOTTOM
            </Box>
        </div>

        <div>
            <Text is="strong">SPAN</Text>

            <Box palette="inverse" margin_top="small" padding="small">
                LEFT
                <Spacer is="span" spacing_x="huge" />
                RIGHT
            </Box>
        </div>
    </Stack.Container>
</Story>

<Story name="Spacing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">DIV / DEFAULT</Text>

            <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
                {#each SPACINGS as [spacing, is_default]}
                    <div>
                        <Text is="strong">
                            {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                        </Text>

                        <Box palette="inverse" padding="small">
                            TOP
                            <Spacer spacing_y={spacing} />
                            BOTTOM
                        </Box>
                    </div>
                {/each}
            </Stack.Container>
        </div>

        <div>
            <Text is="strong">SPAN</Text>

            <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
                {#each SPACINGS as [spacing, is_default]}
                    <div>
                        <Text is="strong">
                            {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                        </Text>

                        <Box palette="inverse" padding="small">
                            LEFT
                            <Spacer is="span" spacing_x={spacing} />
                            RIGHT
                        </Box>
                    </div>
                {/each}
            </Stack.Container>
        </div>
    </Stack.Container>
</Story>
