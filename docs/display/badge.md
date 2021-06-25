+++
[[properties.Badge]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Badge]]
name="position"
description="Sets higher positioning on the <code>Badge</code>."
types=["floated", "raised"]
+++

# Badge

`Badge` is typically used to subtlely display to the user some type of ancillary information, relating to its siblings / parent UI elements.

```html repl Badge Preview
<script>
    import {Badge} from "@kahi-ui/framework";
</script>

<Badge>This is a Badge!</Badge>
```

## Imports

```html default Badge Imports
<script>
    import {Badge} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Badge` via the `palette` property.

```html repl Badge Palette
<script>
    import {Badge, Stack} from "@kahi-ui/framework";
</script>

<Stack
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <Badge>This is a DEFAULT Badge</Badge>
    <Badge palette="accent"
        >This is a ACCENT Badge</Badge
    >

    <Badge palette="dark">This is a DARK Badge</Badge>
    <Badge palette="light"
        >This is a LIGHT Badge</Badge
    >

    <Badge palette="alert"
        >This is a ALERT Badge</Badge
    >
    <Badge palette="affirmative"
        >This is a AFFIRMATIVE Badge</Badge
    >
    <Badge palette="negative"
        >This is a NEGATIVE Badge</Badge
    >
</Stack>
```

## Position

You can change the position of the `Badge` to raise it above in its parent to more explictly call out the information.

```svelte repl Badge Position
<script>
    import {
        Badge,
        Button,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <Text>
        Sample Text (RAISED)
        <Badge palette="accent" position="raised"
            >+99</Badge
        >
    </Text>

    <div>
        <Button palette="accent">
            Open Inbox (FLOATED)
            <Badge
                palette="negative"
                position="floated">+99</Badge
            >
        </Button>
    </div>
</Stack>
```
