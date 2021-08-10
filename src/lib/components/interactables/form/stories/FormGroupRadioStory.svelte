<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Radio from "../../radio/Radio.svelte";

    import * as Form from "../index";

    let logic_state = "vanilla";
</script>

<Text is="strong">
    Select an Ice Cream Flavor
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack spacing="small" margin_top="small">
    <Form.Group logic_name="form-group-radio" bind:logic_state>
        <Radio id="form-group-radio-bubblegum" palette="accent" size="tiny" value="bubblegum">
            Bubblegum
        </Radio>

        <Radio id="form-group-radio-chocolate" palette="accent" size="tiny" value="chocolate">
            Chocolate
        </Radio>

        <Radio id="form-group-radio-vanilla" palette="accent" size="tiny" value="vanilla">
            Vanilla
        </Radio>
    </Form.Group>
</Stack>
