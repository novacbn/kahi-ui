+++
[[properties.Stack]]
name="orientation"
description="Renders the <code>Stack</code> horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties.Stack]]
name="alignment"
description="Adjusts where the child items will be placed within the <code>Stack</code> along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="alignment_x"
description="Adjusts where the child items will be placed within the <code>Stack</code> along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="alignment_y"
description="Adjusts where the child items will be placed within the <code>Stack</code> along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="spacing"
description="Adjusts the visual spacing between child items in the <code>Stack</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Stack]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the <code>Stack</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Stack]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the <code>Stack</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Stack

`Stack` is a layout primitive for setting up a horizontal / vertical stacking of items with even spacing between children. With optional wrapping.

```svelte repl Stack Preview
<script>
    import {Box, Stack} from "@kahi-ui/framework";
</script>

<Stack class="stack-preview">
    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />
</Stack>

<style>
    :global(.stack-preview .box) {
        width: 3rem;
        height: 3rem;
    }
</style>
```

## Imports

```html default Stack Imports
<script>
    import {Stack} from "@kahi-ui/framework";
</script>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `orientation={["desktop:horizontal", "widescreen:horizontal"]}`

You can set the `Stack` to render horizontally via the `orientation` property.

```svelte repl Stack Orientation
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="stack-orientation"
    alignment_y="top"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack>
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">HORIZONTAL</Text>
        <Box palette="dark" padding="small">
            <Stack orientation="horizontal">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>
</Stack>

<style>
    :global(.stack-orientation .stack .box) {
        width: 3rem;
        height: 3rem;
    }
</style>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte repl Stack Spacing
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="stack-spacing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack>
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack spacing="tiny">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack spacing="small">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack spacing="medium">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack spacing="large">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack spacing="huge">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>
</Stack>

<style>
    :global(.stack-spacing .stack .box) {
        width: 3rem;
        height: 3rem;
    }
</style>
```

## Alignment

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `alignment_x={["center", "tablet:left", "mobile:right"]}`

You can adjust the spacing between items via the `alignment`, `alignment_x`, and `alignment_y` properties.

```svelte repl Stack Alignment
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="stack-alignment"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack>
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">CENTER X/Y</Text>
        <Box palette="dark" padding="small">
            <Stack alignment="center">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">STRETCH X</Text>
        <Box palette="dark" padding="small">
            <Stack alignment_x="stretch">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">LEFT X</Text>
        <Box palette="dark" padding="small">
            <Stack alignment_x="left">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">RIGHT X</Text>
        <Box palette="dark" padding="small">
            <Stack alignment_x="right">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">TOP Y</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack alignment_y="top">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">BOTTOM Y</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Stack alignment_y="bottom">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack>
        </Box>
    </div>
</Stack>

<style>
    :global(.stack-alignment .stack .box) {
        min-width: 3rem;
        min-height: 3rem;
    }

    :global(.stack-alignment
            .stack[data-alignment~="center"]) {
        width: 6rem;
        height: 12rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-x~="stretch"]) {
        width: 6rem;
        height: 12rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-x~="left"]),
    :global(.stack-alignment
            .stack[data-alignment-x~="right"]) {
        width: 6rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-y~="top"]),
    :global(.stack-alignment
            .stack[data-alignment-y~="bottom"]) {
        height: 12rem;
    }
</style>
```

## Wrap

You can alter the `Stack` to wraps its children into the next line via the `variation` property.

```svelte repl Stack Wrap
<script>
    import {Box, Stack} from "@kahi-ui/framework";
</script>

<Stack
    class="stack-wrap"
    orientation="horizontal"
    spacing="huge"
    variation="wrap"
>
    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="alert" />
</Stack>

<style>
    :global(.stack-wrap .box) {
        width: 6rem;
        height: 6rem;
    }
</style>
```
