+++
[[properties.TextInput]]
name="is"
description="Changes the HTML tag used for rendering the <code>TextInput</code>."
default="input"
types=["input", "textarea"]

[[properties.TextInput]]
name="type"
description="Sets which type of text is being accepted."
default="text"
types=["email", "password", "search", "text", "url"]

[[properties.TextInput]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.TextInput]]
name="size"
description="Renders the <code>TextInput</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.TextInput]]
name="variation"
description="Alters the rendered appearance of the <code>TextInput</code>."
types=["block", "flush"]

[[properties.TextInput]]
name="disabled"
description="Renders the <code>TextInput</code> with <code>disabled</code> attribute, and styles the <code>TextInput</code> partially transparent."
types=["boolean"]

[[properties.TextInput]]
name="required"
description="Sets if the <code>TextInput</code> should be required, which will fail submission on a <code>&lt;form&gt;</code> if missing."
types=["boolean"]

[[properties.TextInput]]
name="readonly"
description="Sets if the <code>TextInput</code> should be readonly, which will prevent further edits."
types=["boolean"]

[[properties.TextInput]]
name="name"
description="Sets the form name of the <code>TextInput</code>."
types=["string"]

[[properties.TextInput]]
name="max_length"
description="Sets the maximum amount of characters that the end-user <strong>CAN</strong> input, which will fail submission on a <code>&lt;form&gt;</code> if the input is invalid."
types=["number"]

[[properties.TextInput]]
name="min_length"
description="Sets the minimum amount of characters that the end-user <strong>MUST</strong> input, which will fail submission on a <code>&lt;form&gt;</code> if the input is invalid."
types=["number"]

[[properties.TextInput]]
name="pattern"
description="Sets a validation Regular Expression on <code>TextInput</code>, which will fail submission on a <code>&lt;form&gt;</code> if the input is invalid."
types=["RegExp", "string"]

[[properties.TextInput]]
name="placeholder"
description="Sets the text that is rendered if there is no current value."
types=["string"]

[[properties.TextInput]]
name="value"
description="Sets the text value of the <code>TextInput</code>."
types=["string"]

[[properties.TextInput]]
name="characters"
description="Sets the width of the <code>TextInput</code> to an approximation of the amount of characters to display."
types=["number", "string"]

[[properties.TextInput]]
name="lines"
description="<strong>(TEXTAREA ONLY)</strong> Sets the height of the <code>TextInput</code> to an approximation of the amount of text lines to display."
types=["number", "string"]

[[properties.TextInput]]
name="resizeable"
description="<strong>(TEXTAREA ONLY)</strong> Sets if the <code>TextArea</code> should be resizeable by the end-user."
types=["boolean", "x", "y"]

[[properties.TextInput]]
name="spell_check"
description="<strong>(TEXTAREA ONLY)</strong> Sets if Browser spellcheck should be enabled. Allows the Browser to automatically determine this, if unset."
types=["boolean"]
+++

# TextInput

`TextInput` is typically used for capturing string input from an end-user for input into forms, XHR requests, etc.

<!-- prettier-ignore -->
```html repl TextInput Preview
<script>
    import {Code, Form, TextInput} from "@kahi-ui/framework";
</script>

<Form.Control logic_id="textinput-preview">
    <Form.Label>Register E-Mail for Newsletter</Form.Label>
    <TextInput />
    <Form.HelpText>Make sure to enter a valid E-Mail Address, e.g. <Code>sample@sample.org</Code></Form.HelpText>
</Form.Control>
```

## Imports

```html default TextInput Imports
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>
```
