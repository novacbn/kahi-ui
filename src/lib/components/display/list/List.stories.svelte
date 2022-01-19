<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as List from "./index";
</script>

<Meta title="Display/List" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text>
                <Text is="strong">ORDERED</Text>

                <List.Container is="ol">
                    <List.Item>List Item #1</List.Item>
                    <List.Item>List Item #2</List.Item>
                    <List.Item>List Item #3</List.Item>
                </List.Container>
            </Text>
        </div>

        <div>
            <Text>
                <Text is="strong">UNORDERED</Text>

                <List.Container>
                    <List.Item>List Item #1</List.Item>
                    <List.Item>List Item #2</List.Item>
                    <List.Item>List Item #3</List.Item>
                </List.Container>
            </Text>
        </div>
    </Stack>
</Story>
