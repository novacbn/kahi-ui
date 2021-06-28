<script>
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import * as Menu from "../../../navigation/menu";
    import * as Card from "../../../surfaces/card";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import Popover from "../Popover.svelte";

    const alignments_x = ["left", "center", "right"];
    const alignments_y = ["top", "center", "bottom"];

    const placements = [
        ["left", "y", alignments_y],
        ["top", "x", alignments_x],
        ["bottom", "x", alignments_x],
        ["right", "y", alignments_y],
    ];
</script>

<div>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each placements as [placement, axis, alignments]}
            {#each alignments as alignment}
                <Popover
                    {...$$props}
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

                    <Card.Container
                        palette="auto-inverse"
                        elevation="medium"
                        max_width="content-max"
                    >
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

<style>
    div {
        padding: 16rem 8rem !important;
    }
</style>
