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
+++

# Radio

`Radio` is typically used to present a set of mutually-exclusive options to the end-user, which they can then choose from.

<!-- prettier-ignore -->
```html repl Radio Preview
<script>
    import {Radio, Spacer, Stack, Text} from "@kahi-ui/framework";
</script>

<Text is="strong">Select an Ice Cream flavor:</Text>

<Stack spacing="small" style="max-width:10rem;">
    <label for="radio-preview-bubblegum">
        <Stack orientation="horizontal" spacing="small">
            Bubblegum
            <Spacer />
            <Radio
                name="radio-preview"
                id="radio-preview-bubblegum"
                palette="accent"
                margin_left="tiny"
            />
        </Stack>
    </label>

    <label for="radio-preview-chocolate">
        <Stack orientation="horizontal" spacing="small">
            Chocolate
            <Spacer />
            <Radio
                name="radio-preview"
                id="radio-preview-chocolate"
                palette="accent"
                margin_left="tiny"
            />
        </Stack>
    </label>

    <label for="radio-preview-vanilla">
        <Stack orientation="horizontal" spacing="small">
            Vanilla
            <Spacer />
            <Radio
                name="radio-preview"
                id="radio-preview-vanilla"
                palette="accent"
                margin_left="tiny"
            />
        </Stack>
    </label>
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
    import {Radio, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Radio name="radio-palette" />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Radio name="radio-palette" palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Radio name="radio-palette" palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Radio name="radio-palette" palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Radio name="radio-palette" palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Radio name="radio-palette" palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Radio name="radio-palette" palette="negative" />
    </div>
</Stack>
```

## Size

You can change the size of the `Radio` via the `size` property.

```html repl Radio Size
<script>
    import {Radio, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Radio name="radio-size" />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Radio name="radio-size" size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Radio name="radio-size" size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Radio name="radio-size" size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Radio name="radio-size" size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Radio name="radio-size" size="huge" />
    </div>
</Stack>
```
