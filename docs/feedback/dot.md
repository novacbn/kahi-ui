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

```html repl Dot Preview
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

```html repl Dot Palette
<script>
    import {
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
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Dot />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Dot palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Dot palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Dot palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Dot palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Dot palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Dot palette="negative" />
    </div>
</Stack>
```

## Animation

You can have the `Dot` perform animations to grab the end-user's attention via the `animation` property.

```html repl Dot Animation
<script>
    import {
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
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Dot />
    </div>

    <div>
        <Text>
            <Text is="strong">PULSE</Text>
        </Text>

        <Dot animation="pulse" />
    </div>
</Stack>
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
