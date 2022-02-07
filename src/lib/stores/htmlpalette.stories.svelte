<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {htmlpalette} from "./htmlpalette";

    const palette_store = htmlpalette();
</script>

<Meta title="Stores/htmlpalette" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Heading>Application Global Palette</Heading>

    <Text>
        <Code>data-palette</Code>: <Code>
            {$palette_store}
        </Code>
    </Text>
</Story>
