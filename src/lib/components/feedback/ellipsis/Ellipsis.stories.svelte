<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import NumberInput from "../../interactables/numberinput/NumberInput.svelte";
    import * as Stack from "../../layouts/stack";
    import Heading from "../../typography/heading/Heading.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Ellipsis from "./Ellipsis.svelte";

    let iterations = 3;
</script>

<Meta title="Feedback/Ellipsis" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Stack.Container alignment_x="left" spacing="medium">
        <Button disabled>
            <Text is="span">
                Submit
                <Ellipsis />
            </Text>
        </Button>

        <Heading>
            Loading
            <Ellipsis />
        </Heading>
    </Stack.Container>
</Story>

<Story name="Iterations">
    <NumberInput bind:value={iterations} />

    <Heading>
        Loading
        {#key iterations}
            <Ellipsis {iterations} />
        {/key}
    </Heading>
</Story>

<Story name="Slot">
    <Heading>
        Loading
        <Ellipsis>/</Ellipsis>
    </Heading>
</Story>

<Story name="Bounce">
    <Heading>
        Loading
        <Ellipsis animation="bounce" />
    </Heading>
</Story>

<Story name="Pulse">
    <Heading>
        Loading
        <Ellipsis animation="pulse" />
    </Heading>
</Story>

<Story name="Ping">
    <Heading>
        Loading
        <Ellipsis animation="ping" />
    </Heading>
</Story>
