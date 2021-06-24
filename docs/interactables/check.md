+++
[[properties.Check]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Check]]
name="size"
description="Renders the <code>Check</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Check]]
name="active"
description="Renders the <code>Check</code> with <code>aria-pressed</code> attribute, and styles the <code>Check</code> as if it where being clicked."
types=["boolean"]

[[properties.Check]]
name="disabled"
description="Renders the <code>Check</code> with <code>disabled</code> attribute, and styles the <code>Check</code> partially transparent."
types=["boolean"]

[[properties.Check]]
name="name"
description="Sets the form name of the <code>Check</code>."
types=["string"]

[[properties.Check]]
name="state"
description="Sets the checked state of the <code>Check</code>."
types=["boolean"]

[[properties.Check]]
name="value"
description="Sets the value sent whenever the parent <code>&lt;form&gt;</code> is submitted."
types=["string"]
+++

# Check

`Check` is typically used to present a set of options to the end-user, which they can then choose from.

<!-- prettier-ignore -->
```html repl Check Preview
<script>
    import {Check, Form, Stack, Text} from "@kahi-ui/framework";

    let logic_state = ["cheese", "onion"];
</script>

<Text is="strong">
    Select Pizza Toppings
	<Text is="sup">{logic_state}</Text>
</Text>

<Stack orientation="horizontal" spacing="small" variation="wrap" margin_top="small">
    <Form.Group name="check-preview" bind:logic_state>
        <Check
            id="check-preview-cheese"
            palette="accent"
            size="tiny"
            value="cheese"
        >
            Cheese
        </Check>

        <Check
            id="check-preview-pepperoni"
            palette="accent"
            size="tiny"
            value="pepperoni"
        >
            Pepperoni
        </Check>

        <Check
            id="check-preview-onion"
            palette="accent"
            size="tiny"
            value="onion"
        >
            Onion
        </Check>

        <Check
            id="check-preview-pineapple"
            palette="accent"
            size="tiny"
            value="pineapple"
        >
            Pineapple
        </Check>
    </Form.Group>
</Stack>
```

## Imports

```html default Check Imports
<script>
    import {Check} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Check` via the `active`, `disabled`, and `state` properties.

```html repl Check States
<script>
    import {Check, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Check />
    </div>

    <div>
        <Text>
            <Text is="strong">STATE</Text>
        </Text>

        <Check state />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE NO-STATE</Text>
        </Text>

        <Check active />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE STATE</Text>
        </Text>

        <Check active state />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED NO-STATE</Text>
        </Text>

        <Check disabled />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED STATE</Text>
        </Text>

        <Check disabled state />
    </div>
</Stack>
```

## Palette

You can change the color palette of the `Check` via the `palette` property.

```html repl Check Palette
<script>
    import {Check, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Check />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Check palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Check palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Check palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Check palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Check palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Check palette="negative" />
    </div>
</Stack>
```

## Size

You can change the size of the `Check` via the `size` property.

```html repl Check Size
<script>
    import {Check, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Check />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Check size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Check size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Check size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Check size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Check size="huge" />
    </div>
</Stack>
```
