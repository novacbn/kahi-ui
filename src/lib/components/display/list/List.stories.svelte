<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import * as List from "./index";
</script>

<Meta title="Display/List" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">ORDERED</Text>

            <List.Container is="ol">
                <List.Item>List Item #1</List.Item>
                <List.Item>List Item #2</List.Item>
                <List.Item>List Item #3</List.Item>
            </List.Container>
        </div>

        <div>
            <Text is="strong">UNORDERED</Text>

            <List.Container>
                <List.Item>List Item #1</List.Item>
                <List.Item>List Item #2</List.Item>
                <List.Item>List Item #3</List.Item>
            </List.Container>
        </div>
    </Stack.Container>
</Story>
