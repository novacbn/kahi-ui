+++
[[properties."List.Container"]]
name="is"
description="Changes the HTML tag used for rendering the list, and the list item prefixing."
default="ul"
types=["ol", "ul"]
+++

# List

`List` is used for rendering simple text lists.

```svelte repl List Preview
<script>
    import {List} from "@kahi-ui/framework";
</script>

<List.Container>
    <List.Item>Lorem ipsum dolor sit amet.</List.Item>
    <List.Item>Consectetur adipiscing elit.</List.Item>
    <List.Item>Proin et consectetur orci.</List.Item>
</List.Container>
```

## Imports

```html default List Preview
<script>
    import {List} from "@kahi-ui/framework";

    const {Container, Item} = List;
</script>
```

## Types

You can change what type of list is being rendered via the `is` property.

```svelte repl List Types
<script>
    import {
        List,
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
        <Text>
            <Text is="strong">ORDERED</Text>
            <List.Container is="ol">
                <List.Item>
                    Lorem ipsum dolor sit amet.
                </List.Item>

                <List.Item>
                    Consectetur adipiscing elit.
                </List.Item>

                <List.Item>
                    Proin et consectetur orci.
                </List.Item>
            </List.Container>
        </Text>
    </div>

    <div>
        <Text>
            <Text is="strong">UNORDERED</Text>
            <List.Container>
                <List.Item>
                    Lorem ipsum dolor sit amet.
                </List.Item>

                <List.Item>
                    Consectetur adipiscing elit.
                </List.Item>

                <List.Item>
                    Proin et consectetur orci.
                </List.Item>
            </List.Container>
        </Text>
    </div>
</Stack>
```
