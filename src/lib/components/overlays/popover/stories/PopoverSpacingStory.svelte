<script>
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import * as Menu from "../../../navigation/menu";
    import * as Card from "../../../surfaces/card";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import Popover from "../Popover.svelte";

    const spacings = ["none", "tiny", "small", "medium", "large", "huge"];
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    {#each spacings as spacing}
        <Popover
            {...$$props}
            logic_id="popover-spacing-story-{spacing}"
            alignment_x="right"
            {spacing}
            dismissible
            hidden
        >
            <ContextButton palette="accent">
                Open {spacing.toUpperCase()} Spaced Popover
            </ContextButton>

            <Card.Container palette="auto-inverse" elevation="high" max_width="content-max">
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
