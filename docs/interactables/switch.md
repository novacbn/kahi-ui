+++
[[properties.Switch]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Switch]]
name="size"
description="Renders the <code>Switch</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Switch]]
name="active"
description="Renders the <code>Switch</code> with <code>aria-pressed</code> attribute, and styles the <code>Switch</code> as if it where being clicked."
types=["boolean"]

[[properties.Switch]]
name="disabled"
description="Renders the <code>Switch</code> with <code>disabled</code> attribute, and styles the <code>Switch</code> partially transparent."
types=["boolean"]

[[properties.Switch]]
name="name"
description="Sets the form name of the <code>Switch</code>."
types=["string"]

[[properties.Switch]]
name="state"
description="Sets the checked state of the <code>Switch</code>."
types=["boolean"]

[[properties.Switch]]
name="value"
description="Sets the value sent whenever the parent <code>&lt;form&gt;</code> is submitted."
types=["string"]
+++

# Switch

`Switch` is typically used to present to the end-user features, settings, and other toggles that they can turn on / off.

```html repl Switch Preview
<script>
    import {Form, Switch} from "@kahi-ui/framework";
</script>

<Form.Label for="switch-preview">
    Remember Login?
    <Switch palette="affirmative" />
</Form.Label>
```

## Imports

```html default Switch Imports
<script>
    import {Switch} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Switch` via the `active`, `disabled`, and `state` properties.

```html repl Switch States
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Switch />
    </div>

    <div>
        <Text>
            <Text is="strong">STATE</Text>
        </Text>

        <Switch state />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE NO-STATE</Text>
        </Text>

        <Switch active />
    </div>

    <div>
        <Text>
            <Text is="strong">ACTIVE STATE</Text>
        </Text>

        <Switch active state />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED NO-STATE</Text>
        </Text>

        <Switch disabled />
    </div>

    <div>
        <Text>
            <Text is="strong">DISABLED STATE</Text>
        </Text>

        <Switch disabled state />
    </div>
</Stack>
```

## Palette

You can change the color palette of the `Switch` via the `palette` property.

```html repl Switch Palette
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Switch />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Switch palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Switch palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Switch palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Switch palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Switch palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Switch palette="negative" />
    </div>
</Stack>
```

## Size

You can change the size of the `Switch` via the `size` property.

```html repl Switch Size
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Switch />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Switch size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Switch size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Switch size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Switch size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Switch size="huge" />
    </div>
</Stack>
```
