+++
[[properties.Dot]]
name="animation"
description="Sets an attention grabbing animation."
types=["pulse"]

[[properties.Dot]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Dot]]
name="position"
description="Sets higher positioning on the <code>Dot</code>."
types=["floated", "raised"]
+++

# Dot

`Dot` is typically used for calling out other UI elements to the end-user, that they need attention.

```svelte repl Dot Preview
<script>
    import {Dot} from "@kahi-ui/framework";
</script>

<Dot />
```

## Imports

```html default Dot Imports
<script>
    import {Dot} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Dot` via the `palette` property.

```svelte repl Dot Palette
<script>
    import {
        Dot,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="dot-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Dot />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Dot palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Dot palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Dot palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Dot palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Dot palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Dot palette="negative" />
    </div>
</Stack>

<style>
    :global(.dot-palette .dot) {
        display: block;
    }
</style>
```

## Animation

You can have the `Dot` perform animations to grab the end-user's attention via the `animation` property.

```svelte repl Dot Animation
<script>
    import {
        Dot,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="dot-animation"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Dot />
    </div>

    <div>
        <Text is="strong">PULSE</Text>
        <Dot animation="pulse" />
    </div>
</Stack>

<style>
    :global(.dot-animation .dot) {
        display: block;
    }
</style>
```

## Position

You can change the position of the `Dot` to raise it above in its parent to more explictly call out a Component.

```svelte repl Dot Position
<script>
    import {
        Button,
        Dot,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Text>
        Sample Text (RAISED)
        <Dot palette="accent" position="raised" />
    </Text>

    <div>
        <Button palette="accent">
            Open Inbox (FLOATED)
            <Dot
                palette="negative"
                position="floated"
            />
        </Button>
    </div>
</Stack>
```
