<script lang="ts">
    import * as Form from "../../../interactables/form";
    import Radio from "../../../interactables/radio/Radio.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";

    import * as Menu from "../index";
</script>

<Menu.Container>
    <Form.Group logic_name="menu-label-story" logic_state="off">
        <Menu.Label for="menu-label-off">
            Off
            <Spacer />
            <Radio value="off" palette="negative" variation="flush" />
        </Menu.Label>

        <Menu.Label for="menu-label-on">
            On
            <Spacer />
            <Radio value="on" palette="affirmative" variation="flush" />
        </Menu.Label>
    </Form.Group>
</Menu.Container>
