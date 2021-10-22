<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Badge from "../../display/badge/Badge.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Text from "../../typography/text/Text.svelte";
    import Spacer from "../spacer/Spacer.svelte";

    import Position from "./Position.svelte";

    const ALIGNMENTS = ["left", "right"];

    const PLACEMENTS = ["top", "bottom"];
</script>

<Meta title="Layouts/Position" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button palette="accent">
        Open Inbox
        <Position variation="floated" placement="top" alignment_x="right">
            <Badge palette="negative">+99</Badge>
        </Position>
    </Button>
</Story>

<Story name="Floated">
    <div data-padding-x="huge" data-padding-y="huge">
        {#each PLACEMENTS as placement}
            {#each ALIGNMENTS as alignment}
                <Button palette="accent">
                    {placement.toUpperCase()}x{alignment.toUpperCase()}
                    <Position variation="floated" {placement} alignment_x={alignment}>
                        <Badge palette="negative">+99</Badge>
                    </Position>
                </Button>
            {/each}

            <Spacer spacing="small" />
        {/each}
    </div>
</Story>

<Story name="Raised">
    <Text>
        BOTTOM
        <Position variation="raised" placement="bottom">
            <Badge palette="accent">+99</Badge>
        </Position>
    </Text>

    <Text>
        <Position variation="raised" placement="top">
            <Badge palette="accent">+99</Badge>
        </Position>
        TOP
    </Text>

    <Text>
        RIGHT
        <Position variation="raised" placement="right">
            <Badge palette="accent">+99</Badge>
        </Position>
    </Text>

    <Text>
        <Position variation="raised" placement="left">
            <Badge palette="accent">+99</Badge>
        </Position>
        LEFT
    </Text>
</Story>
