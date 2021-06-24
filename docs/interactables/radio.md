+++
[[properties.Radio]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Radio]]
name="size"
description="Renders the <code>Radio</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Radio]]
name="active"
description="Renders the <code>Radio</code> with <code>aria-pressed</code> attribute, and styles the <code>Radio</code> as if it where being clicked."
types=["boolean"]

[[properties.Radio]]
name="disabled"
description="Renders the <code>Radio</code> with <code>disabled</code> attribute, and styles the <code>Radio</code> partially transparent."
types=["boolean"]

[[properties.Radio]]
name="name"
description="Sets the form name of the <code>Radio</code>."
types=["string"]

[[properties.Radio]]
name="state"
description="Sets the checked state of the <code>Radio</code>."
types=["boolean"]

[[properties.Radio]]
name="value"
description="Sets the value sent whenever the parent <code>&lt;form&gt;</code> is submitted."
types=["string"]
+++

# Radio

`Radio` is typically used to present a set of mutually-exclusive options to the end-user, which they can then choose from.

<!-- prettier-ignore -->
```html repl Radio Preview
<script>
    import {Form, Radio, Stack, Text} from "@kahi-ui/framework";

	let logic_state = "vanilla";
</script>

<Text is="strong">
	Select an Ice Cream Flavor
	<Text is="sup">{logic_state}</Text>
</Text>

<Stack spacing="small" margin_top="small">
    <Form.Group logic_name="radio-preview" bind:logic_state>
        <Radio
            id="radio-preview-bubblegum"
            palette="accent"
            size="tiny"
            value="bubblegum"
        >
            Bubblegum
        </Radio>

        <Radio
            id="radio-preview-chocolate"
            palette="accent"
            size="tiny"
            value="chocolate"
        >
            Chocolate
        </Radio>

        <Radio
            id="radio-preview-vanilla"
            palette="accent"
            size="tiny"
            value="vanilla"
        >
            Vanilla
        </Radio>
    </Form.Group>
</Stack>
```

## Imports

```html default Radio Imports
<script>
    import {Radio} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Radio` via the `active`, `disabled`, and `state` properties.

```html repl Radio States
<script>
    import {Radio, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Radio />
    </div>

    <div>
        <Text>
            <Text is="strong">STATE</Text>
        </Text>

        <Radio state />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE NO-STATE</Text>
        </Text>

        <Radio active />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE STATE</Text>
        </Text>

        <Radio active state />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED NO-STATE</Text>
        </Text>

        <Radio disabled />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED STATE</Text>
        </Text>

        <Radio disabled state />
    </div>
</Stack>
```

## Palette

You can change the color palette of the `Radio` via the `palette` property.

```html repl Radio Palette
<script>
    import {Form, Radio, Stack, Text} from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text>
                <Text is="strong">DEFAULT</Text>
            </Text>

            <Radio />
        </div>

        <div>
            <Text>
                <Text is="strong">ACCENT</Text>
            </Text>

            <Radio palette="accent" />
        </div>

        <div>
            <Text>
                <Text is="strong">DARK</Text>
            </Text>

            <Radio palette="dark" />
        </div>

        <div>
            <Text>
                <Text is="strong">LIGHT</Text>
            </Text>

            <Radio palette="light" />
        </div>

        <div>
            <Text>
                <Text is="strong">ALERT</Text>
            </Text>

            <Radio palette="alert" />
        </div>

        <div>
            <Text>
                <Text is="strong">AFFIRMATIVE</Text>
            </Text>

            <Radio palette="affirmative" />
        </div>

        <div>
            <Text>
                <Text is="strong">NEGATIVE</Text>
            </Text>

            <Radio palette="negative" />
        </div>
    </Stack>
</Form.Group>
```

## Size

You can change the size of the `Radio` via the `size` property.

```html repl Radio Size
<script>
    import {Form, Radio, Stack, Text} from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-size">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text>
                <Text is="strong">DEFAULT</Text>
            </Text>

            <Radio />
        </div>

        <div>
            <Text>
                <Text is="strong">TINY</Text>
            </Text>

            <Radio size="tiny" />
        </div>

        <div>
            <Text>
                <Text is="strong">SMALL</Text>
            </Text>

            <Radio size="small" />
        </div>

        <div>
            <Text>
                <Text is="strong">MEDIUM</Text>
            </Text>

            <Radio size="medium" />
        </div>

        <div>
            <Text>
                <Text is="strong">LARGE</Text>
            </Text>

            <Radio size="large" />
        </div>

        <div>
            <Text>
                <Text is="strong">HUGE</Text>
            </Text>

            <Radio size="huge" />
        </div>
    </Stack>
</Form.Group>
```
