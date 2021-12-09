<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import * as Card from "../../surfaces/card";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";
    import ContextButton from "../../utilities/contextbutton/ContextButton.svelte";

    import Overlay from "./Overlay.svelte";

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
    ];
</script>

<Meta title="Overlays/Overlay" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button for="overlay-default-story" palette="accent">Open Modal</Button>

    <Overlay logic_id="overlay-default-story" captive dismissible>
        <Card.Container palette="auto" max_width="viewport-75">
            <Card.Header>Are you sure?</Card.Header>

            <Card.Section>
                <Text>
                    Are you sure you want to delete:
                    <Code>important-file.docx</Code>?
                </Text>
            </Card.Section>

            <Card.Footer>
                <ContextButton palette="inverse" variation="clear">Cancel</ContextButton>
                <Button palette="negative">Delete</Button>
            </Card.Footer>
        </Card.Container>
    </Overlay>
</Story>

<Story name="Lazy">
    <Box palette="negative" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>div</Code> elements' contents.
    </Box>

    <Button for="overlay-lazy" palette="accent">Open LAZY Modal</Button>

    <Overlay logic_id="overlay-lazy" loading="lazy">
        <Card.Container palette="auto" max_width="viewport-75">
            <Card.Header>Lazy Modal</Card.Header>

            <Card.Footer>
                <ContextButton palette="inverse" variation="clear">Close</ContextButton>
            </Card.Footer>
        </Card.Container>
    </Overlay>
</Story>

<Story name="Once">
    <Button for="overlay-once" palette="accent">Open ONCE Modal</Button>

    <Overlay logic_id="overlay-once" once>
        <Card.Container palette="auto" max_width="viewport-75">
            <Card.Header>Once Modal</Card.Header>

            <Card.Footer>
                <ContextButton palette="inverse" variation="clear">Close</ContextButton>
            </Card.Footer>
        </Card.Container>
    </Overlay>
</Story>

<Story name="Orientation">
    {#each ORIENTATIONS as [orientation, is_default] (orientation)}
        <Button for="overlay-orientation-story-{orientation}" palette="accent">
            Open {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Modal
        </Button>

        <Overlay
            logic_id="overlay-orientation-story-{orientation}"
            spacing="medium"
            {orientation}
            captive
            dismissible
        >
            <Box palette="inverse">
                I was oriented {orientation.toUpperCase()}!
            </Box>

            <Box palette="inverse">And I am a sibling!</Box>
        </Overlay>
    {/each}
</Story>
