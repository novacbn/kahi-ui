<script>
    import {Stack} from "../../../layouts/stack";
    import {Text} from "../../../typography/text";

    import * as List from "../index";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">ORDERED</Text>

            <List.Ordered>
                <List.Item>List Item #1</List.Item>
                <List.Item>List Item #2</List.Item>
                <List.Item>List Item #3</List.Item>
            </List.Ordered>
        </Text>
    </div>

    <div>
        <Text>
            <Text is="strong">UNORDERED</Text>

            <List.Unordered>
                <List.Item>List Item #1</List.Item>
                <List.Item>List Item #2</List.Item>
                <List.Item>List Item #3</List.Item>
            </List.Unordered>
        </Text>
    </div>
</Stack>
