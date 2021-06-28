<script>
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import * as Menu from "../../../navigation/menu";
    import * as Card from "../../../surfaces/card";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import Popover from "../Popover.svelte";
</script>

<Popover
    {...$$props}
    logic_id="popover-default-story"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">Open Popover</ContextButton>

    <Card.Container palette="accent" elevation="medium" max_width="content-max">
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
