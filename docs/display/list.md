# List

`List` is used for rendering simple text lists.

```html repl List Preview
<script>
    import {List} from "@kahi-ui/framework";
</script>

<List.Unordered>
    <List.Item>Lorem ipsum dolor sit amet.</List.Item>
    <List.Item>Consectetur adipiscing elit.</List.Item>
    <List.Item
        >Proin et consectetur orci. mus.</List.Item
    >
</List.Unordered>
```

## Imports

```html default List Preview
<script>
    import {List} from "@kahi-ui/framework";

    const {Item, Ordered, Unordered} = List;
</script>
```

## Types

You can change what type of list is being rendered via the `is` property.

```html repl List Types
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

            <List.Ordered>
                <List.Item
                    >Lorem ipsum dolor sit
                    amet.</List.Item
                >
                <List.Item
                    >Consectetur adipiscing
                    elit.</List.Item
                >
                <List.Item
                    >Proin et consectetur orci.
                    mus.</List.Item
                >
            </List.Ordered>
        </Text>
    </div>

    <div>
        <Text>
            <Text is="strong">UNORDERED</Text>

            <List.Unordered>
                <List.Item
                    >Lorem ipsum dolor sit
                    amet.</List.Item
                >
                <List.Item
                    >Consectetur adipiscing
                    elit.</List.Item
                >
                <List.Item
                    >Proin et consectetur orci.
                    mus.</List.Item
                >
            </List.Unordered>
        </Text>
    </div>
</Stack>
```
