<script>
    import Anchor from "../../anchor/Anchor.svelte";
    import Divider from "../../../layouts/divider/Divider.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import * as Menu from "../../../navigation/menu";
    import Text from "../../../typography/text/Text.svelte";
    import ContextButton from "../../../utilities/contextbutton/ContextButton.svelte";

    import * as Aside from "../index";
</script>

<Aside.Container
    {...$$props}
    logic_id="aside-default-story"
    palette="dark"
    max_width="content-max"
    height="viewport-100"
    captive
    dismissible
>
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
            <Text is="small">v0.2.0</Text>
        </Anchor>
    </Aside.Footer>

    <ContextButton variation="clear">+</ContextButton>
    <ContextButton palette="dark" variation="clear">x</ContextButton>
</Aside.Container>
