<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Center from "../../layouts/center/Center.svelte";
    import Divider from "../../layouts/divider/Divider.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Anchor from "../../navigation/anchor/Anchor.svelte";
    import * as Menu from "../../navigation/menu";
    import * as Omni from "../../navigation/omni";
    import Box from "../../surfaces/box/Box.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Popover from "./";

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

    const PLACEMENTS = [
        ["bottom", true],
        ["left", false],
        ["top", false],
        ["right", false],
    ];

    const SPACINGS = [
        ["none", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    let target_element;

    let logic_state = false;

    function on_toggle_click(event) {
        logic_state = !logic_state;
    }
</script>

<Meta title="Overlays/Popover" />

<Template>
    <slot />
</Template>

<Story name="Preview - Overflow Menu">
    <Popover.Container logic_id="popover-preview-overflow-menu" dismissible>
        <Popover.Button palette="accent">Open Menu</Popover.Button>

        <Popover.Section alignment_x="right" spacing="medium">
            <Box elevation="high" padding="medium" shape="rounded">
                <Menu.Container>
                    <Menu.Button>
                        Copy
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">CTRL+C</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Cut
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">CTRL+X</Text>
                    </Menu.Button>

                    <Menu.Heading />

                    <Menu.Button>
                        Delete
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">DEL</Text>
                    </Menu.Button>
                </Menu.Container>
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Preview - Omni Overflow">
    <Omni.Container palette="dark" width="viewport-100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            <Anchor href="#">
                <Text is="small">v0.5.0</Text>
            </Anchor>
        </Omni.Header>

        <Omni.Section hidden={["mobile", "tablet"]}>
            <Menu.Container orientation="horizontal">
                <Menu.Button variation="clear" active>Docs</Menu.Button>
                <Menu.Button variation="clear">Playground</Menu.Button>
                <Menu.Button variation="clear">Storybook</Menu.Button>
            </Menu.Container>
        </Omni.Section>

        <Omni.Footer>
            <Menu.Container hidden={["mobile", "tablet"]} orientation="horizontal">
                <Menu.Button variation="clear">GitHub</Menu.Button>
            </Menu.Container>

            <Popover.Container
                hidden={["desktop", "widescreen"]}
                logic_id="popover-preview-omni-overflow"
                dismissible
            >
                <Popover.Button variation="clear">+</Popover.Button>

                <Popover.Section alignment_x="left" spacing="small">
                    <Box palette="auto" elevation="high" padding="medium" shape="rounded">
                        <Menu.Container>
                            <Menu.Button variation="clear" active>Docs</Menu.Button>
                            <Menu.Button variation="clear">Playground</Menu.Button>
                            <Menu.Button variation="clear">Storybook</Menu.Button>
                            <Menu.Button variation="clear">GitHub</Menu.Button>
                        </Menu.Container>
                    </Box>
                </Popover.Section>
            </Popover.Container>
        </Omni.Footer>
    </Omni.Container>
</Story>

<Story name="Auto Focus - Focus Target">
    <Popover.Container
        logic_id="popover-auto-focus"
        focus_target={target_element?.firstChild}
        dismissible
    >
        <Popover.Button palette="accent">Open AUTO FOCUSED Popover</Popover.Button>

        <Popover.Section alignment_x="right" spacing="medium">
            <Box elevation="high" padding="medium" shape="rounded">
                <Menu.Container>
                    <Menu.Button>
                        Copy
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">CTRL+C</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Cut
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">CTRL+X</Text>
                    </Menu.Button>

                    <Menu.Heading />

                    <Menu.Button bind:element={target_element}>
                        Delete
                        <Spacer is="span" spacing="medium" />
                        <Text is="kbd">DEL</Text>
                    </Menu.Button>
                </Menu.Container>
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Lazy">
    <Box palette="negative" padding="small" margin_bottom="medium">
        To view this property in action, open devtools and watch the <Code>section</Code> elements' contents.
    </Box>

    <Popover.Container logic_id="popover-lazy" loading="lazy">
        <Popover.Button>Open LAZY Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                LAZY Popover
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Dismissible">
    <Box palette="negative" padding="small" margin_bottom="medium">
        Click anywhere outside of the Popover, press <Text is="kbd">ESC</Text>, or shift focus
        outside of the Popover to dismiss.
    </Box>

    <Popover.Container logic_id="popover-dismissible-disabled">
        <Popover.Button>Open NON-DISMISSIBLE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                NON-DISMISSIBLE Popover
            </Box>
        </Popover.Section>
    </Popover.Container>

    <Popover.Container logic_id="popover-dismissible-enabled" dismissible>
        <Popover.Button>Open DISMISSIBLE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                DISMISSIBLE Popover
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Once">
    <Box palette="negative" padding="small" margin_bottom="medium">
        Click anywhere in the Popover to dismiss.
    </Box>

    <Popover.Container logic_id="popover-once-disabled">
        <Popover.Button>Open NON-ONCE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                NON-ONCE Popover
            </Box>
        </Popover.Section>
    </Popover.Container>

    <Popover.Container logic_id="popover-once-enabled" once>
        <Popover.Button>Open ONCE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                ONCE Popover
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Logic State">
    <Popover.Container logic_id="popover-logic-state" bind:logic_state>
        <Popover.Button>Open TOGGABLE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                TOGGABLE Popover
                <br />
                <Button on:click={on_toggle_click}>Toggle Popover</Button>
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Placement">
    <Center height="viewport-100" width="100">
        {#each PLACEMENTS as [placement, is_default] (placement)}
            <Popover.Container logic_id="popover-placement-{placement}" dismissible>
                <Popover.Button>
                    Open {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section {placement}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {placement.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Alignment">
    <Center height="viewport-100" width="100">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <Popover.Container logic_id="popover-alignment-x-{alignment_x}" dismissible>
                <Popover.Button>
                    Open {`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section placement="bottom" {alignment_x}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {alignment_x.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}

        {#each ALIGNMENTS_Y as [alignment_y, is_default] (alignment_y)}
            <Popover.Container logic_id="popover-alignment-y-{alignment_y}" dismissible>
                <Popover.Button>
                    Open {`${alignment_y.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section placement="left" {alignment_y}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {alignment_y.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Spacing">
    <Center height="viewport-100" width="100">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <Popover.Container logic_id="popover-spacing-{spacing}" dismissible>
                <Popover.Button>
                    Open {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section {spacing}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {spacing.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Transition - Clip">
    <Center height="viewport-100" width="100">
        {#each PLACEMENTS as [placement, is_default] (placement)}
            <Popover.Container logic_id="popover-clip-{placement}" dismissible>
                <Popover.Button>
                    Open CLIP {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section animation="clip" direction={placement} {placement}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {placement.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Transition - Fade">
    <Center height="viewport-100" width="100">
        {#each PLACEMENTS as [placement, is_default] (placement)}
            <Popover.Container logic_id="popover-fade-{placement}" dismissible>
                <Popover.Button>
                    Open FADE {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section animation="fade" direction={placement} {placement}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {placement.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Transition - Scale">
    <Center height="viewport-100" width="100">
        {#each PLACEMENTS as [placement, is_default] (placement)}
            <Popover.Container logic_id="popover-scale-{placement}" dismissible>
                <Popover.Button>
                    Open SCALE {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section animation="scale" direction={placement} {placement}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {placement.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>

<Story name="Transition - Slide">
    <Center height="viewport-100" width="100">
        {#each PLACEMENTS as [placement, is_default] (placement)}
            <Popover.Container logic_id="popover-slide-{placement}" dismissible>
                <Popover.Button>
                    Open SLIDE {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Popover
                </Popover.Button>

                <Popover.Section animation="slide" direction={placement} {placement}>
                    <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                        {placement.toUpperCase()} Popover
                    </Box>
                </Popover.Section>
            </Popover.Container>
        {/each}
    </Center>
</Story>
