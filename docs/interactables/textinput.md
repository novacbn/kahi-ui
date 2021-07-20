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
name="resizable"
description="<strong>(TEXTAREA ONLY)</strong> Sets if the <code>TextArea</code> should be resizable by the end-user."
types=["boolean", "x", "y"]

[[properties.TextInput]]
name="spell_check"
description="<strong>(TEXTAREA ONLY)</strong> Sets if Browser spellcheck should be enabled. Allows the Browser to automatically determine this, if unset."
types=["boolean"]
+++

# TextInput

`TextInput` is typically used for capturing string input from an end-user for input into forms, XHR requests, etc.

```svelte repl TextInput Preview
<script>
    import {
        Code,
        Form,
        TextInput,
    } from "@kahi-ui/framework";

    let value = "sample@sample.org";
</script>

<Form.Control logic_id="textinput-preview">
    <Form.Label>
        Register E-Mail for Newsletter
    </Form.Label>

    <TextInput bind:value />
    <Form.HelpText>
        Make sure to enter a valid E-Mail Address, e.g.
        <Code>sample@sample.org</Code>
    </Form.HelpText>
</Form.Control>
```

## Imports

```html default TextInput Imports
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `TextInput` via the `palette` property.

```svelte repl TextInput Palette
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        characters="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        palette="accent"
        characters="20"
        value="This is a ACCENT TextInput"
    />

    <TextInput
        palette="dark"
        characters="20"
        value="This is a DARK TextInput"
    />

    <TextInput
        palette="light"
        characters="20"
        value="This is a LIGHT TextInput"
    />

    <TextInput
        palette="alert"
        characters="20"
        value="This is a ALERT TextInput"
    />

    <TextInput
        palette="affirmative"
        characters="20"
        value="This is a AFFIRMATIVE TextInput"
    />

    <TextInput
        palette="negative"
        characters="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack>
```

## Size

You can change the size of the `TextInput` via the `size` property.

```svelte repl TextInput Size
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        characters="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        size="tiny"
        characters="20"
        value="This is a TINY TextInput"
    />

    <TextInput
        size="small"
        characters="20"
        value="This is a SMALL TextInput"
    />

    <TextInput
        size="medium"
        characters="20"
        value="This is a MEDIUM TextInput"
    />

    <TextInput
        size="large"
        characters="20"
        value="This is a LARGE TextInput"
    />

    <TextInput
        size="huge"
        characters="20"
        value="This is a HUGE TextInput"
    />
</Stack>
```

## Block

You can alter the `TextInput` render as an opaque block via the `variation` property.

```svelte repl TextInput Block
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        variation="block"
        characters="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        variation="block"
        palette="accent"
        characters="20"
        value="This is a ACCENT TextInput"
    />

    <TextInput
        variation="block"
        palette="dark"
        characters="20"
        value="This is a DARK TextInput"
    />

    <TextInput
        variation="block"
        palette="light"
        characters="20"
        value="This is a LIGHT TextInput"
    />

    <TextInput
        variation="block"
        palette="alert"
        characters="20"
        value="This is a ALERT TextInput"
    />

    <TextInput
        variation="block"
        palette="affirmative"
        characters="20"
        value="This is a AFFIRMATIVE TextInput"
    />

    <TextInput
        variation="block"
        palette="negative"
        characters="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack>
```

## Flush

You can change the appearance of the `TextInput` to be flush with the rest of the Application content via the `variation` property.

```svelte repl TextInput Flush
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

Input some text:
<TextInput
    variation="flush"
    characters="20"
    value="This is a FLUSH TextInput"
/>
```

## Input Type

You can change your input type between `email`, `password`, `search`, `text` **(DEFAULT)**, `url` via the `type` property.

```svelte repl TextInput Input Type
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        type="email"
        characters="20"
        value="sample@sample.org"
    />

    <TextInput
        type="password"
        characters="20"
        value="abcdef1002"
    />

    <TextInput
        type="url"
        characters="20"
        value="https://google.com"
    />
</Stack>
```

## Placeholder

You can set the `TextInput` to show placeholder text whenever there is no current value.

```svelte repl TextInput Placeholder
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput placeholder="...enter some text" />
```

## Field Character Size

You can set how wide your `TextInput` to an approximation of character width via the `characters` property.

```svelte repl TextInput Field Character Size
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    value="This input should be about 4 characters wide."
    characters="4"
/>
```

## TextArea

You can have the `TextInput` render as a `<textarea>` via the `is` property.

```svelte repl TextInput TextArea
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    is="textarea"
    value="This is a TextArea TextInput"
/>
```

## Field Line Size

You can set how tall your `<textarea>` based `TextInput` to an approximation of character lines via the `lines` property.

```svelte repl TextInput Field Line Size
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    is="textarea"
    value="This input should be about 3 lines tall."
    lines="3"
/>
```

## Resizable TextArea

You alter the a `<textarea>` based `TextInput` to resizable both axis `true`, horizontally `x`, and vertically `y` via the `resizable` property.

```svelte repl TextInput Resizable TextArea
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    is="textarea"
    value="This is a resizable TextArea"
    resizable
/>
```
