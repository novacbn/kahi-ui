<script>
    import Anchor from "../../anchor/Anchor.svelte";
    import Button from "../../../interactables/button/Button.svelte";
    import Divider from "../../../layouts/divider/Divider.svelte";
    import * as Menu from "../../../navigation/menu";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import * as Omni from "../index";

</script>

<Omni.Container
    {...$$props}
    logic_id="omni-default-story"
    palette="dark"
    width="viewport-100"
    captive
    dismissible
>
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.2.0</Text>
        </Anchor>

        <Spacer />
        <ContextButton palette="light" variation="clear">+</ContextButton>
        <ContextButton palette="light" variation="clear">x</ContextButton>
    </Omni.Header>

    <Omni.Footer>
        <Omni.Section>
            <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]}>
                <Menu.Button palette="light" variation="clear" active>Docs</Menu.Button>
                <Menu.Button palette="light" variation="clear">Playground</Menu.Button>
                <Menu.Button palette="light" variation="clear">Storybook</Menu.Button>
            </Menu.Container>
        </Omni.Section>

        <Omni.Section>
            <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]}>
                <Menu.Button palette="light" variation="clear">GitHub</Menu.Button>
            </Menu.Container>
        </Omni.Section>
    </Omni.Footer>
</Omni.Container>
