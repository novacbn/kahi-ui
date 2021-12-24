<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Center from "../../layouts/center/Center.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Menu from "../../navigation/menu";
    import Box from "../../surfaces/box/Box.svelte";
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
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">CTRL+C</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Cut
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">CTRL+X</Text>
                    </Menu.Button>

                    <Menu.Divider />

                    <Menu.Button>
                        Delete
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">DEL</Text>
                    </Menu.Button>
                </Menu.Container>
            </Box>
        </Popover.Section>
    </Popover.Container>
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
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">CTRL+C</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Cut
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">CTRL+X</Text>
                    </Menu.Button>

                    <Menu.Divider />

                    <Menu.Button bind:element={target_element}>
                        Delete
                        <Spacer variation="inline" spacing="medium" />
                        <Text is="kbd">DEL</Text>
                    </Menu.Button>
                </Menu.Container>
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Lazy">
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
    <Popover.Container logic_id="popover-dismissible" dismissible>
        <Popover.Button>Open DISMISSIBLE Popover</Popover.Button>

        <Popover.Section alignment_x="right">
            <Box palette="inverse" elevation="high" padding="medium" shape="rounded">
                DISMISSIBLE Popover
            </Box>
        </Popover.Section>
    </Popover.Container>
</Story>

<Story name="Once">
    <Popover.Container logic_id="popover-once" once>
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

<Story name="Spacing">Spacing</Story>
