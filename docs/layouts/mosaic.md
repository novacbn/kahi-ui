+++
[[properties.Mosaic]]
name="sizing"
description="Sets the minimum width each child item divided up into, out of the space available."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SIZING}"]

[[properties.Mosaic]]
name="alignment"
description="Adjusts where the child items will be placed within the <code>Mosaic</code> along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Mosaic]]
name="alignment_x"
description="Adjusts where the child items will be placed within the <code>Mosaic</code> along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Mosaic]]
name="alignment_y"
description="Adjusts where the child items will be placed within the <code>Mosaic</code> along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Mosaic]]
name="spacing"
description="Adjusts the visual spacing between child items in the <code>Mosaic</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Mosaic]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the <code>Mosaic</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Mosaic]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the <code>Mosaic</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Mosaic

`Mosaic` is a layout primitive for setting up a mosaic of items organized to displaying as many child items at a certain size as possible.

```svelte repl Mosaic Preview
<script>
    import {Box, Mosaic} from "@kahi-ui/framework";
</script>

<Mosaic
    class="mosaic-preview"
    sizing="tiny"
    spacing="medium"
>
    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="negative" />
    <Box palette="alert" />
    <Box palette="affirmative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />
</Mosaic>

<style>
    :global(.mosaic-preview .box) {
        height: 3rem;
    }
</style>
```

## Imports

```html default Mosaic Imports
<script>
    import {Mosaic} from "@kahi-ui/framework";
</script>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can alter how large each `Mosaic` item should be via the `sizing` property.

```svelte repl Mosaic Sizing
<script>
    import {
        Box,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="mosaic-sizing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">TINY</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="small" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="medium" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="large" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="huge" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>
</Stack>

<style>
    :global(.mosaic-sizing .mosaic .box) {
        height: 3rem;
    }
</style>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte repl Mosaic Spacing
<script>
    import {
        Box,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="mosaic-spacing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="tiny">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="small">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="large">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="huge">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Mosaic>
        </Box>
    </div>
</Stack>

<style>
    :global(.mosaic-spacing .mosaic .box) {
        height: 3rem;
    }
</style>
```
