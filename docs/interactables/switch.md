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

```svelte repl Switch Preview
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

```svelte repl Switch States
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-states"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <Switch state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <Switch active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <Switch active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <Switch disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <Switch disabled state />
    </div>
</Stack>

<style>
    :global(.switch-states strong) {
        display: block;
    }
</style>
```

## Palette

You can change the color palette of the `Switch` via the `palette` property.

```svelte repl Switch Palette
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Switch palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Switch palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Switch palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Switch palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Switch palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Switch palette="negative" />
    </div>
</Stack>

<style>
    :global(.switch-palette strong) {
        display: block;
    }
</style>
```

## Size

You can change the size of the `Switch` via the `size` property.

```svelte repl Switch Size
<script>
    import {
        Switch,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="switch-size"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Switch />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Switch size="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Switch size="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Switch size="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Switch size="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Switch size="huge" />
    </div>
</Stack>

<style>
    :global(.switch-size strong) {
        display: block;
    }
</style>
```
