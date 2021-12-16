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

    let logic_state = false;

    function on_toggle_click(event) {
        logic_state = !logic_state;
    }
</script>

<Meta title="Overlays/Overlay" />

<Template>
    <slot />
</Template>

<Story name="Preview - Modal">
    <Button for="overlay-modal" palette="accent">Open MODAL</Button>

    <Overlay.Container logic_id="overlay-modal" captive dismissible>
        <Overlay.Section>
            <Card.Container palette="auto" max_width="75">
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
    <Box palette="negative" padding="small" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>section</Code> elements' contents.
    </Box>
</Story>

<Story name="Captive">
    <Button for="overlay-captive-disabled">Open NON-CAPTIVE Overlay</Button>
    <Button for="overlay-captive-enabled">Open CAPTIVE Overlay</Button>

    <Overlay.Container logic_id="overlay-captive-disabled">
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>NON-CAPTIVE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>

    <Overlay.Container logic_id="overlay-captive-enabled" captive>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>CAPTIVE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Dismissible">
    <Box palette="negative" padding="small" margin_bottom="medium">
        Click the backdrop or hit <Text is="kbd">ESC</Text> to dismiss.
    </Box>

    <Button for="overlay-dismissible-disabled">Open NON-DISMISSIBLE Overlay</Button>
    <Button for="overlay-dismissible-enabled">Open DISMISSIBLE Overlay</Button>

    <Overlay.Container logic_id="overlay-dismissible-disabled" captive>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>NON-DISMISSIBLE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>

    <Overlay.Container logic_id="overlay-dismissible-enabled" captive dismissible>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>DISMISSIBLE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Once">
    <Box palette="negative" padding="small" margin_bottom="medium">
        Click anywhere on the Modal dismiss.
    </Box>

    <Button for="overlay-once-disabled">Open NON-ONCE Overlay</Button>
    <Button for="overlay-once-enabled">Open ONCE Overlay</Button>

    <Overlay.Container logic_id="overlay-once-disabled" captive>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>NON-ONCE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>

    <Overlay.Container logic_id="overlay-once-enabled" captive once>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>ONCE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Logic State">
    <Button on:click={on_toggle_click}>Open Toggle Overlay</Button>

    <Overlay.Container logic_id="overlay-logic-state" bind:logic_state>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>Toggable Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Orientation">
    {#each ORIENTATIONS as [orientation, is_default] (orientation)}
        <Button for="overlay-orientation-{orientation}">
            Open {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each ORIENTATIONS as [orientation, is_default] (orientation)}
        <Overlay.Container logic_id="overlay-orientation-{orientation}" captive dismissible>
            <Overlay.Section {orientation}>
                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{orientation.toUpperCase()} Overlays</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>

                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{orientation.toUpperCase()} Overlays</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>

<Story name="Alignment">
    {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
        <Button for="overlay-alignment-x-{alignment_x}">
            Open {`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} X Overlay
        </Button>
    {/each}

    {#each ALIGNMENTS_Y as [alignment_y, is_default] (alignment_y)}
        <Button for="overlay-alignment-y-{alignment_y}">
            Open {`${alignment_y.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Y Overlay
        </Button>
    {/each}

    {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
        <Overlay.Container logic_id="overlay-alignment-x-{alignment_x}" captive dismissible>
            <Overlay.Section {alignment_x}>
                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{alignment_x.toUpperCase()} Overlay</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}

    {#each ALIGNMENTS_Y as [alignment_y, is_default] (alignment_y)}
        <Overlay.Container logic_id="overlay-alignment-y-{alignment_y}" captive dismissible>
            <Overlay.Section {alignment_y}>
                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{alignment_y.toUpperCase()} Overlay</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>

<Story name="Spacing">
    {#each SPACINGS as [spacing, is_default] (spacing)}
        <Button for="overlay-spacing-{spacing}">
            Open {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each SPACINGS as [spacing, is_default] (spacing)}
        <Overlay.Container logic_id="overlay-spacing-{spacing}" captive dismissible>
            <Overlay.Section {spacing}>
                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{spacing.toUpperCase()} Overlays</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>

                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>{spacing.toUpperCase()} Overlays</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>

<Story name="Transition - Clip">
    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Button for="overlay-transition-clip-{direction}">
            Open CLIP {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Overlay.Container logic_id="overlay-transition-clip-{direction}" captive dismissible>
            <Overlay.Section animation="clip" {direction}>
                <Card.Container palette="inverse" max_width="75">
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
    <Button for="overlay-transition-fade">Open FADE Overlay</Button>

    <Overlay.Container logic_id="overlay-transition-fade" captive dismissible>
        <Overlay.Section animation="fade">
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>FADE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Transition - Scale">
    <Button for="overlay-transition-scale">Open SCALE Overlay</Button>

    <Overlay.Container logic_id="overlay-transition-scale" captive dismissible>
        <Overlay.Section animation="scale">
            <Card.Container palette="inverse" max_width="75">
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
        <Button for="overlay-transition-slide-{direction}">
            Open SLIDE {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Overlay
        </Button>
    {/each}

    {#each DIRECTIONS as [direction, is_default] (direction)}
        <Overlay.Container logic_id="overlay-transition-slide-{direction}" captive dismissible>
            <Overlay.Section animation="slide" {direction}>
                <Card.Container palette="inverse" max_width="75">
                    <Card.Header>SLIDE {direction.toUpperCase()} Overlay</Card.Header>

                    <Card.Footer>
                        <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                    </Card.Footer>
                </Card.Container>
            </Overlay.Section>
        </Overlay.Container>
    {/each}
</Story>
