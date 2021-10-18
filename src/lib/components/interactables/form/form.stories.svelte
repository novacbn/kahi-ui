<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Check from "../check/Check.svelte";
    import Radio from "../radio/Radio.svelte";
    import TextInput from "../textinput/TextInput.svelte";

    import * as Form from "./";

    let check_logic_state = ["cheese", "onion"];
    let radio_logic_state = "vanilla";
</script>

<Meta title="Interactables/Form" />

<Template>
    <slot />
</Template>

<Story name="Form.Control">
    <Form.Control logic_id="form-control" logic_name="form-control">
        <Form.Label>Register E-Mail for Newsletter</Form.Label>

        <TextInput value="sample@sample.org" />
        <Form.HelpText>
            Make sure to enter a valid E-Mail Address, e.g.
            <Code>sample@sample.org</Code>
        </Form.HelpText>
    </Form.Control>
</Story>

<Story name="Form.Group Check">
    <Text is="strong">
        Select Pizza Toppings
        <Text is="sup">{check_logic_state}</Text>
    </Text>

    <Stack orientation="horizontal" spacing="small" variation="wrap" margin_top="small">
        <Form.Group name="form-group-check" bind:logic_state={check_logic_state}>
            <Check id="form-group-check-cheese" palette="accent" size="tiny" value="cheese">
                Cheese
            </Check>

            <Check id="form-group-check-pepperoni" palette="accent" size="tiny" value="pepperoni">
                Pepperoni
            </Check>

            <Check id="form-group-check-onion" palette="accent" size="tiny" value="onion">
                Onion
            </Check>

            <Check id="form-group-check-pineapple" palette="accent" size="tiny" value="pineapple">
                Pineapple
            </Check>
        </Form.Group>
    </Stack>
</Story>

<Story name="Form.Group Radio">
    <Text is="strong">
        Select an Ice Cream Flavor
        <Text is="sup">{radio_logic_state}</Text>
    </Text>

    <Stack spacing="small" margin_top="small">
        <Form.Group logic_name="form-group-radio" bind:logic_state={radio_logic_state}>
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
</Story>

<Story name="Form.Label Group">
    <Form.Label for="form-label-group">
        <Check />
        Click me!
    </Form.Label>
</Story>
