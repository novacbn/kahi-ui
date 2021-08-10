<script>
    import Button from "../../../interactables/button/Button.svelte";
    import * as Card from "../../../surfaces/card";
    import Code from "../../../typography/code/Code.svelte";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import Overlay from "../Overlay.svelte";
</script>

<Button for="overlay-default-story" palette="accent">Open Modal</Button>

<Overlay {...$$props} logic_id="overlay-default-story" captive dismissible>
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
