<script>
    import Code from "../../../typography/code/Code.svelte";
    import TextInput from "../../textinput/TextInput.svelte";

    import * as Form from "../index";

    let value = "sample@sample.org";
</script>

<Form.Control logic_id="form-control">
    <Form.Label>Register E-Mail for Newsletter</Form.Label>

    <TextInput bind:value />
    <Form.HelpText>
        Make sure to enter a valid E-Mail Address, e.g.
        <Code>sample@sample.org</Code>
    </Form.HelpText>
</Form.Control>
