+++
[[properties."*"]]
name="width"
description="Sets the intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="max_width"
description="Sets the maximum intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="min_width"
description="Sets the minimum intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="height"
description="Sets the intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="max_height"
description="Sets the maximum intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="min_height"
description="Sets the minimum intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "{VIEWPORT}:{SIZING}"]
+++

# Sizings

All Components have access to the global width and height HTML data attributes. All of which, supports [Responitivity](../framework/responsivity.md).

## Width

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `width={["25", "tablet:viewport-50"]}`

You can set a defined width for your Components via the `width` property.

```svelte repl Sizings Width
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">auto</Text>
        <Box palette="affirmative" width="auto"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-fit</Text>
        <Box palette="negative" width="content-fit"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-max</Text>
        <Box palette="alert" width="content-max"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-min</Text>
        <Box palette="affirmative" width="content-min"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">prose</Text>
        <Box palette="negative" width="prose"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">stretch</Text>
        <Box palette="alert" width="stretch"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>

    <div>
        <Text is="strong">0</Text>
        <Box palette="affirmative" width="0"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">25</Text>
        <Box palette="negative" width="25"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">33</Text>
        <Box palette="alert" width="33"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">50</Text>
        <Box palette="affirmative" width="50"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">66</Text>
        <Box palette="negative" width="66"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">75</Text>
        <Box palette="alert" width="75"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">100</Text>
        <Box palette="affirmative" width="100"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>

    <div>
        <Text is="strong">viewport-0</Text>
        <Box palette="affirmative" width="viewport-0"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-25</Text>
        <Box palette="negative" width="viewport-25"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-33</Text>
        <Box palette="alert" width="viewport-33"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-50</Text>
        <Box palette="affirmative" width="viewport-50"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-66</Text>
        <Box palette="negative" width="viewport-66"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-75</Text>
        <Box palette="alert" width="viewport-75"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-100</Text>
        <Box palette="affirmative" width="viewport-100"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
</Stack>
```

## Height

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `height={["25", "tablet:viewport-50"]}`

You can set a defined height for your Components via the `height` property.

```svelte repl Sizings Height
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium">
    <div>
        <Text is="strong">auto</Text>
        <Box palette="affirmative" height="auto"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-fit</Text>
        <Box palette="negative" height="content-fit"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-max</Text>
        <Box palette="alert" height="content-max"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">content-min</Text>
        <Box palette="affirmative" height="content-min"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">prose</Text>
        <Box palette="negative" height="prose"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">stretch</Text>
        <Box palette="alert" height="stretch"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>

    <div>
        <Text is="strong">0</Text>
        <Box palette="affirmative" height="0"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">25</Text>
        <Box palette="negative" height="25"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">33</Text>
        <Box palette="alert" height="33"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">50</Text>
        <Box palette="affirmative" height="50"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">66</Text>
        <Box palette="negative" height="66"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">75</Text>
        <Box palette="alert" height="75"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">100</Text>
        <Box palette="affirmative" height="100"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>

    <div>
        <Text is="strong">viewport-0</Text>
        <Box palette="affirmative" height="viewport-0"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-25</Text>
        <Box palette="negative" height="viewport-25"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-33</Text>
        <Box palette="alert" height="viewport-33"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-50</Text>
        <Box palette="affirmative" height="viewport-50"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-66</Text>
        <Box palette="negative" height="viewport-66"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-75</Text>
        <Box palette="alert" height="viewport-75"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
    <div>
        <Text is="strong">viewport-100</Text>
        <Box
            palette="affirmative"
            height="viewport-100"
            ><Text variation="truncate"
                >Lorem ipsum dolor</Text
            ></Box
        >
    </div>
</Stack>
```

## Minimums / Maximums

You can also set minimums or maximum sizes via prefixing your properties with `max_` or `min_`.

```svelte repl Sizings Height
<script>
    import {Box, Text} from "@kahi-ui/framework";
</script>

<Box
    palette="affirmative"
    padding="small"
    style="width:15rem;"
>
    <Box palette="negative" max_width="25">
        <Text variation="truncate"
            >Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</Text
        >
    </Box>
</Box>
```
