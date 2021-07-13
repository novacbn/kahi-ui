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
name="variation"
description="Alters the appearance of the <code>Check</code>."
types=["flush"]

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

```svelte repl Check Preview
<script>
    import {
        Check,
        Form,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = ["cheese", "onion"];
</script>

<Text is="strong">
    Select Pizza Toppings
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack
    orientation="horizontal"
    spacing="small"
    variation="wrap"
    margin_top="small"
>
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

```svelte repl Check States
<script>
    import {
        Check,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="check-states"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Check />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <Check state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <Check active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <Check active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <Check disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <Check disabled state />
    </div>
</Stack>

<style>
    :global(.check-states strong) {
        display: block;
    }
</style>
```

## Palette

You can change the color palette of the `Check` via the `palette` property.

```svelte repl Check Palette
<script>
    import {
        Check,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="check-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Check />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Check palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Check palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Check palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Check palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Check palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Check palette="negative" />
    </div>
</Stack>

<style>
    :global(.check-palette strong) {
        display: block;
    }
</style>
```

## Size

You can change the size of the `Check` via the `size` property.

```svelte repl Check Size
<script>
    import {
        Check,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="check-size"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Check />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Check size="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Check size="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Check size="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Check size="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Check size="huge" />
    </div>
</Stack>

<style>
    :global(.check-size strong) {
        display: block;
    }
</style>
```

## Flush

You can change the appearance of the `Check` to be flush with the rest of the Application content.

```svelte repl Check Flush
<script>
    import {
        Check,
        Menu,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Heading>Filter</Menu.Heading>

    <Menu.Label for="check-flush-cpus">
        CPUs
        <Spacer />
        <Check
            value="cpus"
            palette="accent"
            variation="flush"
        />
    </Menu.Label>

    <Menu.Label for="check-flush-hard-drives">
        Hard Drives
        <Spacer />
        <Check
            value="hard-drives"
            palette="accent"
            variation="flush"
            state
        />
    </Menu.Label>

    <Menu.Label for="check-flush-solid-state-drives">
        Solid State Drives
        <Spacer />
        <Check
            value="solid-state-drives"
            palette="accent"
            variation="flush"
        />
    </Menu.Label>
</Menu.Container>
```
