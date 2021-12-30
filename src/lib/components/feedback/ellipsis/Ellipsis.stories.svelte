<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Heading from "../../typography/heading/Heading.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Ellipsis from "./Ellipsis.svelte";
</script>

<Meta title="Feedback/Ellipsis" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Stack alignment_x="left" spacing="medium">
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
    </Stack>
</Story>

<Story name="Slot">
    <Heading>
        Loading
        <Ellipsis>/</Ellipsis>
    </Heading>
</Story>
