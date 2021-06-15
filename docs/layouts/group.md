+++
[[properties.Group]]
name="orientation"
description="Sets the <code>Group</code> to render its children vertically."
types=["vertical"]

[[properties.Group]]
name="variation"
description="Sets how the <code>Group</code> should display the its children relative to the previous item."
types=["stacked"]
+++

# Group

`Group` is a layout primitive used for grouping together like Components with their inner border radii removed.

<!-- prettier-ignore -->
```html repl Group Preview
<script>
    import {Button, Group} from "@kahi-ui/framework";
</script>

<Group>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
</Group>
```

## Imports

```html default Group Imports
<script>
    import {Group} from "@kahi-ui/framework";
</script>
```

## Orientation

You can set the `Group` to render its children Components vertically, via the `orientation` property.

<!-- prettier-ignore -->
```html repl Group Orientation
<script>
    import {Button, Box, Group, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Group>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>

        <Box palette="dark" padding="small">
            <Group orientation="vertical">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>
</Stack>
```

## Stacked

You can set the `variation` property to `stacked` to visually stack children Components, like avatar stacks.

<!--
    TODO: Two more avatars, would probably look nicer without ones that would blend into each other
-->

<!-- prettier-ignore -->
```html repl Group Stacked
<script>
    import {Figure, Group, Stack, Text} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />

        <Group variation="stacked">
            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Stack alignment_y="center" padding_left="small">
                <Text is="small">+7</Text>
            </Stack>
        </Group>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>
        <br />

        <Group variation="stacked" orientation="vertical">
            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Stack alignment_x="center" padding_top="small">
                <Text is="small">+7</Text>
            </Stack>
        </Group>
    </div>
</Stack>
```
