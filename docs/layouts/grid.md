+++
[[properties.Grid]]
name="points"
description="In a point scale of 1...12, sets how the <code>Grid</code> divides up the space available to the child items."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties.Grid]]
name="spacing"
description="Adjusts the visual spacing between child items in the <code>Grid</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Grid]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the <code>Grid</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Grid]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the <code>Grid</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Grid

`Grid` is a layout primitive for setting up a grid of items organized to a 12-point system.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```html repl Grid Preview
<script>
    import {Box, Grid} from "@kahi-ui/framework";
</script>

<Grid
    points={["6", "mobile:3", "tablet:4", "desktop:5"]}
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
</Grid>
```

## Imports

```html default Grid Imports
<script>
    import {Grid} from "@kahi-ui/framework";
</script>
```

## Points

> **NOTE**: By passing an array, you can set values based on viewports. e.g. `points={["7", "tablet:6", "mobile:5"]}`

You can adjust how many points the `Grid` items are divided by via the `points` property.

```html repl Grid Points
<script>
    import {Box, Grid, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">12</Text>

        <Box palette="dark" padding="small">
            <Grid points="12" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">11</Text>

        <Box palette="dark" padding="small">
            <Grid points="11" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">10</Text>

        <Box palette="dark" padding="small">
            <Grid points="10" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">9</Text>

        <Box palette="dark" padding="small">
            <Grid points="9" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">8</Text>

        <Box palette="dark" padding="small">
            <Grid points="8" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">7</Text>

        <Box palette="dark" padding="small">
            <Grid points="7" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">6</Text>

        <Box palette="dark" padding="small">
            <Grid points="6" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">5</Text>

        <Box palette="dark" padding="small">
            <Grid points="5" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">4</Text>

        <Box palette="dark" padding="small">
            <Grid points="4" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">3</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">2</Text>

        <Box palette="dark" padding="small">
            <Grid points="2" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">1</Text>

        <Box palette="dark" padding="small">
            <Grid points="1" spacing="medium" style="width:18rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>
</Stack>
```

## Spacing

> **NOTE**: By passing an array, you can set values based on viewports. e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```html repl Grid Spacing
<script>
    import {Box, Grid, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="tiny" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="small" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="medium" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="large" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Grid points="3" spacing="huge" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid>
        </Box>
    </div>
</Stack>
```
