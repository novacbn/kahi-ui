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
name="variation"
description="Alters the appearance of the <code>Radio</code>."
types=["flush"]

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

```svelte repl Radio Preview
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = "vanilla";
</script>

<Text is="strong">
    Select an Ice Cream Flavor
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack spacing="small" margin_top="small">
    <Form.Group
        logic_name="radio-preview"
        bind:logic_state
    >
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

```svelte repl Radio States
<script>
    import {
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="radio-states"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Radio />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <Radio state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <Radio active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <Radio active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <Radio disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <Radio disabled state />
    </div>
</Stack>

<style>
    :global(.radio-states strong) {
        display: block;
    }
</style>
```

## Palette

You can change the color palette of the `Radio` via the `palette` property.

```svelte repl Radio Palette
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-palette">
    <Stack
        class="radio-palette"
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <Radio />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <Radio palette="accent" />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <Radio palette="dark" />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <Radio palette="light" />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <Radio palette="alert" />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <Radio palette="affirmative" />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <Radio palette="negative" />
        </div>
    </Stack>
</Form.Group>

<style>
    :global(.radio-palette strong) {
        display: block;
    }
</style>
```

## Size

You can change the size of the `Radio` via the `size` property.

```svelte repl Radio Size
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-size">
    <Stack
        class="radio-size"
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <Radio />
        </div>

        <div>
            <Text is="strong">TINY</Text>
            <Radio size="tiny" />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <Radio size="small" />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <Radio size="medium" />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <Radio size="large" />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <Radio size="huge" />
        </div>
    </Stack>
</Form.Group>

<style>
    :global(.radio-size strong) {
        display: block;
    }
</style>
```

## Flush

You can change the appearance of the `Radio` to be flush with the rest of the Application content.

```svelte repl Radio Flush
<script>
    import {
        Form,
        Menu,
        Radio,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Heading>Sort By</Menu.Heading>

    <Form.Group
        logic_name="radio-flush"
        logic_state="ascending"
    >
        <Menu.Label for="radio-flush-ascending">
            Ascending
            <Spacer />
            <Radio
                value="ascending"
                palette="accent"
                variation="flush"
            />
        </Menu.Label>

        <Menu.Label for="radio-flush-decending">
            Decending
            <Spacer />
            <Radio
                value="decending"
                palette="accent"
                variation="flush"
            />
        </Menu.Label>
    </Form.Group>
</Menu.Container>
```
