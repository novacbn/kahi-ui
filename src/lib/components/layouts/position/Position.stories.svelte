<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Badge from "../../display/badge/Badge.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Stack from "../stack/Stack.svelte";

    import Position from "./Position.svelte";

    const ALIGNMENTS = [
        ["left", false],
        ["right", true],
    ];

    const PLACEMENTS_ACTION = [
        ["bottom", true],
        ["top", false],
    ];

    const PLACEMENTS_INDICATOR = [
        ["top", true],
        ["bottom", false],
    ];
</script>

<Meta title="Layouts/Position" />

<Template>
    <slot />
</Template>

<Story name="Action">
    {#each PLACEMENTS_ACTION as [placement, is_default_placement] (placement)}
        {#each ALIGNMENTS as [alignment_x, is_default_alignment] (alignment_x)}
            <Position variation="action" {placement} {alignment_x}>
                <Button palette="accent">
                    {`${placement.toUpperCase()}${
                        is_default_placement ? " / DEFAULT" : ""
                    }`}x{`${alignment_x.toUpperCase()}${is_default_alignment ? " / DEFAULT" : ""}`}
                </Button>
            </Position>
        {/each}
    {/each}
</Story>

<Story name="Indicator">
    <Stack
        orientation="horizontal"
        alignment="center"
        spacing="medium"
        variation="wrap"
        width="viewport-100"
        height="viewport-100"
    >
        {#each PLACEMENTS_INDICATOR as [placement, is_default_placement] (placement)}
            {#each ALIGNMENTS as [alignment_x, is_default_alignment] (alignment_x)}
                <Button palette="accent">
                    {`${placement.toUpperCase()}${
                        is_default_placement ? " / DEFAULT" : ""
                    }`}x{`${alignment_x.toUpperCase()}${is_default_alignment ? " / DEFAULT" : ""}`}

                    <Position variation="indicator" {placement} {alignment_x}>
                        <Badge palette="negative" shape="pill">+99</Badge>
                    </Position>
                </Button>
            {/each}
        {/each}
    </Stack>
</Story>

<Story name="Raised">
    <Stack
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
    </Stack>
</Story>
