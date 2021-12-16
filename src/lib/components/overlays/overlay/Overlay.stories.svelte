<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import * as Card from "../../surfaces/card";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Overlay from "./";

    const ALIGNMENTS_X = [
        ["center", true],
        ["left", false],
        ["right", false],
    ];

    const ALIGNMENTS_Y = [
        ["center", true],
        ["top", false],
        ["bottom", false],
    ];

    const DIRECTIONS = [
        ["bottom", true],
        ["left", false],
        ["right", false],
        ["top", false],
    ];

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
    ];

    const SPACINGS = [
        ["none", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Overlays/Overlay" />

<Template>
    <slot />
</Template>

<Story name="Preview - Modal">
    <Button for="overlay-modal" palette="accent">Open MODAL</Button>

    <Overlay.Container logic_id="overlay-modal" captive dismissible>
        <Overlay.Section>
            <Card.Container palette="auto" max_width="viewport-75">
                <Card.Header>Are you sure?</Card.Header>

                <Card.Section>
                    <Text>
                        Are you sure you want to delete:
                        <Code>important-file.docx</Code>?
                    </Text>
                </Card.Section>

                <Card.Footer>
                    <Overlay.Button palette="inverse" variation="clear">Cancel</Overlay.Button>
                    <Button palette="negative">Delete</Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Preview - Offscreen">Offscreen</Story>

<Story name="Auto Focus - Focus Target">Focus Target</Story>

<Story name="Focus Trapping - First + Last">First + Last</Story>

<Story name="Lazy">
    <Box palette="negative" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>section</Code> elements' contents.
    </Box>
</Story>

<Story name="Captive">Captive</Story>

<Story name="Dismissible">Dismissible</Story>

<Story name="Once">Once</Story>

<Story name="State">State</Story>

<Story name="Orientation">Orientation</Story>

<Story name="Alignment">Alignment</Story>

<Story name="Spacing">Spacing</Story>

<Story name="Transition - Clip">
    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Button for="overlay-transition-clip-{direction}" palette="accent">
            Open CLIP {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Overlay.Container logic_id="overlay-transition-clip-{direction}" captive dismissible>
            <Overlay.Section animation="clip" {direction}>
                <Card.Container palette="inverse" max_width="viewport-75">
                    <Card.Header>CLIP {direction.toUpperCase()} Overlay</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>

<Story name="Transition - Fade">
    <Button for="overlay-transition-fade" palette="accent">Open FADE Overlay</Button>

    <Overlay.Container logic_id="overlay-transition-fade" captive dismissible>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="viewport-75">
                <Card.Header>FADE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Transition - Scale">
    <Button for="overlay-transition-scale" palette="accent">Open SCALE Overlay</Button>

    <Overlay.Container logic_id="overlay-transition-scale" captive dismissible>
        <Overlay.Section animation="scale">
            <Card.Container palette="inverse" max_width="viewport-75">
                <Card.Header>SCALE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Transition - Slide">
    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Button for="overlay-transition-slide-{direction}" palette="accent">
            Open SLIDE {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Overlay.Container logic_id="overlay-transition-slide-{direction}" captive dismissible>
            <Overlay.Section animation="slide" {direction}>
                <Card.Container palette="inverse" max_width="viewport-75">
                    <Card.Header>SLIDE {direction.toUpperCase()} Overlay</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>
