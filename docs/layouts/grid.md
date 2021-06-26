+++
[[properties."Grid.Container"]]
name="points"
description="In a point scale of 1...12, sets how the <code>Grid.Container</code> divides up the space available to the child items."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties."Grid.Container"]]
name="alignment"
description="Adjusts where the child items will be placed within the <code>Grid.Container</code> along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Grid.Container"]]
name="alignment_x"
description="Adjusts where the child items will be placed within the <code>Grid.Container</code> along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Grid.Container"]]
name="alignment_y"
description="Adjusts where the child items will be placed within the <code>Grid.Container</code> along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Grid.Container"]]
name="spacing"
description="Adjusts the visual spacing between child items in the <code>Grid.Container</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties."Grid.Container"]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the <code>Grid.Container</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties."Grid.Container"]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the <code>Grid.Container</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties."Grid.Item"]]
name="span"
description="In a point scale of 1...12, sets how many grid columns and rows the <code>Grid.Item</code> will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties."Grid.Item"]]
name="span_x"
description="In a point scale of 1...12, sets how many grid columns the <code>Grid.Item</code> will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties."Grid.Item"]]
name="span_y"
description="In a point scale of 1...12, sets how many grid rows the <code>Grid.Item</code> will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]
+++

# Grid

`Grid` is a multi-part layout pattern for setting up a grid of items organized to a 12-point system.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```svelte repl Grid Preview
<script>
    import {Box, Grid} from "@kahi-ui/framework";
</script>

<Grid.Container
    class="grid-preview"
    points={["6", "mobile:3", "tablet:4", "desktop:5"]}
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
</Grid.Container>

<style>
    :global(.grid-preview .box) {
        height: 3rem;
    }
</style>
```

## Imports

```html default Grid Imports
<script>
    import {Grid} from "@kahi-ui/framework";

    const {Container, Item} = Grid;
</script>
```

## Points

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `points={["7", "tablet:6", "mobile:5"]}`

You can adjust how many points the `Grid.Container` items are divided by via the `points` property.

```svelte repl Grid Points
<script>
    import {
        Box,
        Grid,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="grid-points"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">12</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="12"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">11</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="11"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">10</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="10"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">9</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="9"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">8</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="8"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">7</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="7"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">6</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="6"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">5</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="5"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">4</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="4"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">3</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="3"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">2</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="2"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">1</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="1"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>
</Stack>

<style>
    :global(.grid-points .grid) {
        width: 14rem;
    }

    :global(.grid-points .grid .box) {
        height: 3rem;
    }
</style>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte repl Grid Spacing
<script>
    import {
        Box,
        Grid,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="grid-spacing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box palette="dark" padding="small">
            <Grid.Container points="3">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box palette="dark" padding="small">
            <Grid.Container points="3" spacing="tiny">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box palette="dark" padding="small">
            <Grid.Container points="3" spacing="small">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box palette="dark" padding="small">
            <Grid.Container
                points="3"
                spacing="medium"
            >
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box palette="dark" padding="small">
            <Grid.Container points="3" spacing="large">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box palette="dark" padding="small">
            <Grid.Container points="3" spacing="huge">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />

                <Box palette="affirmative" />
                <Box palette="negative" />
                <Box palette="alert" />
            </Grid.Container>
        </Box>
    </div>
</Stack>

<style>
    :global(.grid-spacing .grid) {
        width: 12rem;
    }

    :global(.grid-spacing .grid .box) {
        height: 3rem;
    }
</style>
```

## Item Span

You can adjust grid span of individual items via the `span`, `span_x`, `span_y` properties, by wrapping the items in `Grid.Item`.

```svelte repl Grid Item Span
<script>
    import {Box, Grid} from "@kahi-ui/framework";
</script>

<Grid.Container
    class="grid-item-span"
    points={["6", "mobile:3", "tablet:4", "desktop:5"]}
    spacing="medium"
>
    <Box palette="alert" />
    <Grid.Item
        span_x={[
            "4",
            "mobile:1",
            "tablet:2",
            "desktop:3",
        ]}
        span_y="1"
    >
        <Box palette="affirmative" />
    </Grid.Item>
    <Box palette="negative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Grid.Item span_x="3" span_y="2">
        <Box palette="negative" />
    </Grid.Item>
    <Box palette="alert" />
    <Box palette="affirmative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />

    <Box palette="negative" />
    <Box palette="alert" />
    <Box palette="affirmative" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />
</Grid.Container>

<style>
    :global(.grid-item-span > *) {
        min-height: 3rem;
    }
</style>
```
