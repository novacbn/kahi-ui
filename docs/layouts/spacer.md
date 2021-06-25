+++
[[properties.Spacer]]
name="orientation"
description="Renders the <code>Spacer</code> horizontally."
default="vertical"
types=["horizontal", "vertical", "{VIEWPORT}:{ORIENTATION}"]

[[properties.Spacer]]
name="variation"
description="Renders the <code>Spacer</code> as a <code>&lt;span&gt;</code>, defaulting the orientation to <code>horizontal</code>."
types=["inline"]

[[properties.Spacer]]
name="spacing"
description="Adjusts the visual spacing between the two immediate siblings of the <code>Spacer</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Spacer]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between the two immediate siblings of the <code>Spacer</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Spacer]]
name="spacing_y"
description="Adjusts the vertical visual spacing between the two immediate siblings of the <code>Spacer</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Spacer

`Spacer` is a layout primitive that takes up all available vertical space between its two immediate siblings.

```svelte repl Spacer Preview
<script>
    import {
        Box,
        Spacer,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Box
    palette="auto-inverse"
    padding_x="small"
    padding_y="tiny"
>
    <Stack orientation="horizontal">
        LEFT
        <Spacer />
        RIGHT
    </Stack>
</Box>
```

## Imports

```html default Spacer Imports
<script>
    import {Spacer} from "@kahi-ui/framework";
</script>
```

## Spacing

You can adjust the spacing between the immediate siblings via the `spacing` property.

```svelte repl Spacer Spacing
<script>
    import {
        Box,
        Spacer,
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
        <Text is="strong">TINY</Text>
        <Box
            palette="auto-inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="tiny" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box
            palette="auto-inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="small" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box
            palette="auto-inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="medium" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box
            palette="auto-inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="large" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box
            palette="auto-inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>
</Stack>
```

## Inline

You can have the `Spacer` rendering as an inline `<span>` that defaults to `horizontal` orientation via the `variation` property.

```svelte repl Spacer Inline
<script>
    import {
        Box,
        Spacer,
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
        <Text is="strong">BLOCK / DEFAULT</Text>

        <Box
            palette="auto-inverse"
            margin_top="small"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">INLINE / DEFAULT</Text>

        <Box
            palette="auto-inverse"
            margin_top="small"
            padding_x="small"
            padding_y="tiny"
        >
            LEFT
            <Spacer
                variation="inline"
                orientation="horizontal"
                spacing="huge"
            />
            RIGHT
        </Box>
    </div>
</Stack>
```
