<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import * as Menu from "../../navigation/menu";
    import * as Card from "../../surfaces/card";
    import Text from "../../typography/text/Text.svelte";
    import ContextButton from "../../utilities/contextbutton/ContextButton.svelte";

    import Popover from "./Popover.svelte";

    const ALIGNMENTS_X = ["left", "center", "right"];
    const ALIGNMENTS_Y = ["top", "center", "bottom"];

    const PLACEMENTS = [
        ["left", "y", ALIGNMENTS_Y],
        ["top", "x", ALIGNMENTS_X],
        ["bottom", "x", ALIGNMENTS_X],
        ["right", "y", ALIGNMENTS_Y],
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

<Meta title="Overlays/Popover" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Popover
        logic_id="popover-default-story"
        alignment_x="right"
        spacing="medium"
        dismissible
        hidden
    >
        <ContextButton palette="accent">Open Popover</ContextButton>

        <Card.Container palette="inverse" elevation="high" max_width="content-max">
            <Card.Section>
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
            </Card.Section>
        </Card.Container>
    </Popover>
</Story>

<Story name="Once">
    <Popover logic_id="popover-once" alignment_x="right" spacing="medium" hidden once>
        <ContextButton palette="accent">Open ONCE Popover</ContextButton>

        <Card.Container palette="inverse" elevation="high" max_width="content-max">
            <Card.Section>
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
            </Card.Section>
        </Card.Container>
    </Popover>
</Story>

<Story name="Placement">
    <div data-padding-x="huge" data-padding-y="huge">
        <Stack orientation="horizontal" spacing="medium" variation="wrap">
            {#each PLACEMENTS as [placement, axis, alignments] (placement)}
                {#each alignments as alignment (alignment)}
                    <Popover
                        logic_id="popover-placement-story-{placement}-{alignment}"
                        spacing="medium"
                        {placement}
                        {...{[`alignment_${axis}`]: alignment}}
                        dismissible
                        hidden
                    >
                        <ContextButton palette="accent">
                            Open {placement.toUpperCase()}x{alignment.toUpperCase()} Popover
                        </ContextButton>

                        <Card.Container palette="inverse" elevation="high" max_width="content-max">
                            <Card.Section>
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
                            </Card.Section>
                        </Card.Container>
                    </Popover>
                {/each}
            {/each}
        </Stack>
    </div>
</Story>

<Story name="Spacing">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <Popover
                logic_id="popover-spacing-story-{spacing}"
                alignment_x="right"
                {spacing}
                dismissible
                hidden
            >
                <ContextButton palette="accent">
                    Open {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`} Spaced Popover
                </ContextButton>

                <Card.Container palette="inverse" elevation="high" max_width="content-max">
                    <Card.Section>
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
                    </Card.Section>
                </Card.Container>
            </Popover>
        {/each}
    </Stack>
</Story>
