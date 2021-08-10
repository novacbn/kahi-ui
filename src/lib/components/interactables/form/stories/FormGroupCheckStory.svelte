<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Check from "../../check/Check.svelte";

    import * as Form from "../index";

    let logic_state = ["cheese", "onion"];
</script>

<Text is="strong">
    Select Pizza Toppings
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack orientation="horizontal" spacing="small" variation="wrap" margin_top="small">
    <Form.Group name="form-group-check" bind:logic_state>
        <Check id="form-group-check-cheese" palette="accent" size="tiny" value="cheese">
            Cheese
        </Check>

        <Check id="form-group-check-pepperoni" palette="accent" size="tiny" value="pepperoni">
            Pepperoni
        </Check>

        <Check id="form-group-check-onion" palette="accent" size="tiny" value="onion">Onion</Check>

        <Check id="form-group-check-pineapple" palette="accent" size="tiny" value="pineapple">
            Pineapple
        </Check>
    </Form.Group>
</Stack>
