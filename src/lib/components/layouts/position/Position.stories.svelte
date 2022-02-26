<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Badge from "../../display/badge/Badge.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "../stack";

    import Position from "./Position.svelte";

    const ALIGNMENTS_X = [
        ["left", false],
        ["right", true],
    ];

    const ALIGNMENTS_Y_ACTION = [
        ["bottom", true],
        ["top", false],
    ];

    const ALIGNMENTS_Y_INDICATOR = [
        ["top", true],
        ["bottom", false],
    ];
</script>

<Meta title="Layouts/Position" />

<Template>
    <slot />
</Template>

<Story name="Action">
    {#each ALIGNMENTS_Y_ACTION as [alignment_y, is_default_alignment_y] (alignment_y)}
        {#each ALIGNMENTS_X as [alignment_x, is_default_alignment_x] (alignment_x)}
            <Position variation="action" {alignment_x} {alignment_y}>
                <Button palette="accent">
                    {`${alignment_y.toUpperCase()}${
                        is_default_alignment_y ? " / DEFAULT" : ""
                    }`}x{`${alignment_x.toUpperCase()}${
                        is_default_alignment_x ? " / DEFAULT" : ""
                    }`}
                </Button>
            </Position>
        {/each}
    {/each}
</Story>

<Story name="Indicator">
    <Stack.Container
        orientation="horizontal"
        alignment="center"
        spacing="medium"
        variation="wrap"
        width="viewport-100"
        height="viewport-100"
    >
        {#each ALIGNMENTS_Y_INDICATOR as [alignment_y, is_default_alignment_y] (alignment_y)}
            {#each ALIGNMENTS_X as [alignment_x, is_default_alignment_x] (alignment_x)}
                <Button palette="accent">
                    {`${alignment_y.toUpperCase()}${
                        is_default_alignment_y ? " / DEFAULT" : ""
                    }`}x{`${alignment_x.toUpperCase()}${
                        is_default_alignment_x ? " / DEFAULT" : ""
                    }`}

                    <Position variation="indicator" {alignment_x} {alignment_y}>
                        <Badge palette="negative" shape="pill">+99</Badge>
                    </Position>
                </Button>
            {/each}
        {/each}
    </Stack.Container>
</Story>

<Story name="Raised">
    <Stack.Container
        orientation="horizontal"
        alignment="center"
        spacing="medium"
        variation="wrap"
        width="viewport-100"
        height="viewport-100"
    >
        <Text>
            <Position variation="raised" placement="top">
                <Badge palette="accent" shape="pill">+99</Badge>
            </Position>
            TOP / DEFAULT
        </Text>

        <Text>
            BOTTOM
            <Position variation="raised" placement="bottom">
                <Badge palette="accent" shape="pill">+99</Badge>
            </Position>
        </Text>

        <Text>
            <Position variation="raised" placement="left">
                <Badge palette="accent" shape="pill">+99</Badge>
            </Position>
            LEFT
        </Text>

        <Text>
            RIGHT
            <Position variation="raised" placement="right">
                <Badge palette="accent" shape="pill">+99</Badge>
            </Position>
        </Text>
    </Stack.Container>
</Story>
