+++
[[properties.Divider]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Divider]]
name="orientation"
description="Renders the <code>Divider</code> vertically."
types=["vertical", "{VIEWPORT}:vertical"]
+++

# Divider

`Divider` is typically used to visually separate content for easier reading comprehension.

```html repl Divider Preview
<script>
    import {Divider} from "@kahi-ui/framework";
</script>

<Divider />
```

## Imports

```html default Divider Imports
<script>
    import {Divider} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Divider` via the `palette` property.

```html repl Divider Palette
<script>
    import {
        Divider,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="large" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Divider />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <Divider palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <Divider palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <Divider palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <Divider palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <Divider palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <Divider palette="negative" />
    </div>
</Mosaic>
```

## Orientation

You can set the `Divider` to render vertically via the `orientation` property.

```html repl Divider Orientation
<script>
    import {
        Box,
        Divider,
        Mosaic,
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
        <Text is="strong">DEFAULT</Text>

        <Box
            palette="dark"
            padding="small"
            style="display:flex;align-items:center;height:2rem;width:6rem;"
        >
            <Divider />
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>

        <Box
            palette="dark"
            padding="small"
            width="content-min"
            style="height:6rem;"
        >
            <Divider orientation="vertical" />
        </Box>
    </div>
</Stack>
```

## Text

`Divider` components can also render text within their separators.

```html repl Divider Text
<script>
    import {
        Box,
        Divider,
        Mosaic,
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
        <Box
            palette="dark"
            padding="small"
            style="width:12rem;"
        >
            <Divider>DEFAULT</Divider>
        </Box>
    </div>

    <div>
        <Box
            palette="dark"
            padding="small"
            style="display:inline-flex;justify-content:center;width:3rem;height:12rem;"
        >
            <Divider orientation="vertical"
                >VERTICAL</Divider
            >
        </Box>
    </div>
</Stack>
```
