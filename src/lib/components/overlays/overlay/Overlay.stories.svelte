<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Divider from "../../layouts/divider/Divider.svelte";
    import Position from "../../layouts/position/Position.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Anchor from "../../navigation/anchor/Anchor.svelte";
    import * as Aside from "../../navigation/aside";
    import * as Menu from "../../navigation/menu";
    import Box from "../../surfaces/box/Box.svelte";
    import * as Card from "../../surfaces/card";
    import * as Tile from "../../surfaces/tile";
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

    let first_element;
    let last_element;
    let target_element;

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
    <Button for="overlay-preview-modal" palette="accent">Open MODAL</Button>

    <Overlay.Container logic_id="overlay-preview-modal" dismissible>
        <Overlay.Backdrop />

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

<Story name="Preview - Aside Drawer">
    <Position variation="action" alignment_x="left" hidden={["desktop", "widescreen"]}>
        <Button for="overlay-preview-aside-drawer">+</Button>
    </Position>

    <Overlay.Container logic_id="overlay-preview-aside-drawer" dismissible>
        <Overlay.Backdrop hidden={["desktop", "widescreen"]} />

        <Overlay.Section
            contents={["desktop", "widescreen"]}
            animation="slide"
            direction="left"
            alignment_x="left"
        >
            <Aside.Container palette="dark" max_width="content-max" height="viewport-100">
                <Aside.Header>
                    <Anchor href="#">Kahi UI</Anchor>
                    <Divider />
                </Aside.Header>

                <Aside.Section>
                    <Menu.Container>
                        <Menu.Heading>DISPLAY</Menu.Heading>

                        <Menu.Button>
                            Badge
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>

                        <Menu.Heading>FEEDBACK</Menu.Heading>

                        <Menu.Button>
                            Dot
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>

                        <Menu.Button active>
                            Spinner
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>
                    </Menu.Container>
                </Aside.Section>

                <Aside.Footer>
                    <Anchor href="#">
                        <Text is="small">v0.5.0</Text>
                    </Anchor>
                </Aside.Footer>

                <Position variation="action" alignment_x="left" hidden={["desktop", "widescreen"]}>
                    <Overlay.Button variation="clear">x</Overlay.Button>
                </Position>
            </Aside.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Preview - Tile Notifications">
    <Overlay.Container>
        <Overlay.Section alignment_x="right" alignment_y="bottom" spacing="medium" padding="medium">
            <Tile.Container palette="auto" elevation="medium" width="content-max" max_width="75">
                <Tile.Section>
                    <Tile.Header>File Deleted</Tile.Header>

                    <Text>
                        <Code>important_file_1.docx</Code> was deleted from cloud storage.
                    </Text>
                </Tile.Section>

                <Tile.Footer>
                    <Button palette="negative" data-size="small">X</Button>
                </Tile.Footer>
            </Tile.Container>

            <Tile.Container palette="auto" elevation="medium" width="content-max" max_width="75">
                <Tile.Section>
                    <Tile.Header>File Deleted</Tile.Header>

                    <Text>
                        <Code>important_file_2.pdf</Code> was deleted from cloud storage.
                    </Text>
                </Tile.Section>

                <Tile.Footer>
                    <Button palette="negative" data-size="small">X</Button>
                </Tile.Footer>
            </Tile.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Auto Focus - Focus Target">
    <Button for="overlay-auto-focus">Open AUTO FOCUSED Overlay</Button>

    <Overlay.Container logic_id="overlay-auto-focus" focus_target={target_element}>
        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>AUTO FOCUSED Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss #1</Overlay.Button>
                    <Overlay.Button palette="auto" variation="clear">Dismiss #2</Overlay.Button>

                    <Overlay.Button bind:element={target_element} palette="auto" variation="clear">
                        Dismiss #3
                    </Overlay.Button>

                    <Overlay.Button palette="auto" variation="clear">Dismiss #4</Overlay.Button>
                    <Overlay.Button palette="auto" variation="clear">Dismiss #5</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Focus Trapping - First + Last">
    <Button for="overlay-focus-trapping">Open FOCUS TRAPPED Overlay</Button>

    <Overlay.Container
        logic_id="overlay-focus-trapping"
        focus_first={first_element}
        focus_last={last_element}
    >
        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>FOCUS TRAPPED Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button tabindex="3" palette="auto" variation="clear">
                        Dismiss #3
                    </Overlay.Button>

                    <Overlay.Button
                        bind:element={first_element}
                        tabindex="1"
                        palette="auto"
                        variation="clear"
                    >
                        Dismiss #1
                    </Overlay.Button>

                    <Overlay.Button
                        bind:element={last_element}
                        tabindex="5"
                        palette="auto"
                        variation="clear"
                    >
                        Dismiss #5
                    </Overlay.Button>

                    <Overlay.Button tabindex="4" palette="auto" variation="clear">
                        Dismiss #4
                    </Overlay.Button>

                    <Overlay.Button tabindex="2" palette="auto" variation="clear">
                        Dismiss #2
                    </Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Lazy">
    <Box palette="negative" padding="small" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>section</Code> elements' contents.
    </Box>

    <Button for="overlay-lazy">Open LAZY Overlay</Button>

    <Overlay.Container logic_id="overlay-lazy" loading="lazy">
        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>LAZY Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>
</Story>

<Story name="Dismissible">
    <Box palette="negative" padding="small" margin_bottom="medium">
        Press <Text is="kbd">ESC</Text> to dismiss.
    </Box>

    <Button for="overlay-dismissible-disabled">Open NON-DISMISSIBLE Overlay</Button>
    <Button for="overlay-dismissible-enabled">Open DISMISSIBLE Overlay</Button>

    <Overlay.Container logic_id="overlay-dismissible-disabled">
        <Overlay.Backdrop />

        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>NON-DISMISSIBLE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>

    <Overlay.Container logic_id="overlay-dismissible-enabled" dismissible>
        <Overlay.Backdrop />

        <Overlay.Section>
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
        Click anywhere on the Modal to dismiss.
    </Box>

    <Button for="overlay-once-disabled">Open NON-ONCE Overlay</Button>
    <Button for="overlay-once-enabled">Open ONCE Overlay</Button>

    <Overlay.Container logic_id="overlay-once-disabled">
        <Overlay.Backdrop />

        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>NON-ONCE Overlay</Card.Header>

                <Card.Footer>
                    <Overlay.Button palette="auto" variation="clear">Dismiss</Overlay.Button>
                </Card.Footer>
            </Card.Container>
        </Overlay.Section>
    </Overlay.Container>

    <Overlay.Container logic_id="overlay-once-enabled" once>
        <Overlay.Backdrop />

        <Overlay.Section>
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
    <Button on:click={on_toggle_click}>Toggle Overlay</Button>

    <Overlay.Container logic_id="overlay-logic-state" bind:logic_state>
        <Overlay.Section>
            <Card.Container palette="inverse" max_width="75">
                <Card.Header>TOGGABLE Overlay</Card.Header>

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
        <Overlay.Container logic_id="overlay-orientation-{orientation}" dismissible>
            <Overlay.Backdrop />

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
        <Overlay.Container logic_id="overlay-alignment-x-{alignment_x}" dismissible>
            <Overlay.Backdrop />

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
        <Overlay.Container logic_id="overlay-alignment-y-{alignment_y}" dismissible>
            <Overlay.Backdrop />

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
        <Overlay.Container logic_id="overlay-spacing-{spacing}" dismissible>
            <Overlay.Backdrop />

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
        <Overlay.Container logic_id="overlay-transition-clip-{direction}" dismissible>
            <Overlay.Backdrop />

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

    <Overlay.Container logic_id="overlay-transition-fade" dismissible>
        <Overlay.Backdrop />

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

    <Overlay.Container logic_id="overlay-transition-scale" dismissible>
        <Overlay.Backdrop />

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
        <Overlay.Container logic_id="overlay-transition-slide-{direction}" dismissible>
            <Overlay.Backdrop />

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
