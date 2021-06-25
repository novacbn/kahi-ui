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

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```svelte repl Mosaic Preview
<script>
    import {Box, Mosaic} from "@kahi-ui/framework";
</script>

<Mosaic
    sizing={["tiny", "tablet:small", "mobile:medium"]}
    spacing="medium"
>
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />

    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />

    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />

    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />

    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />

    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />

    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
</Mosaic>
```

## Imports

```html default Mosaic Imports
<script>
    import {Mosaic} from "@kahi-ui/framework";
</script>
```

## Sizing

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
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="small" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="medium" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="large" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="huge" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>
</Stack>
```

## Spacing

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
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="tiny">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="small">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="medium">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="large">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic sizing="tiny" spacing="huge">
                <Box
                    palette="alert"
                    style="height:3rem;"
                />
                <Box
                    palette="affirmative"
                    style="height:3rem;"
                />
                <Box
                    palette="negative"
                    style="height:3rem;"
                />
            </Mosaic>
        </Box>
    </div>
</Stack>
```
