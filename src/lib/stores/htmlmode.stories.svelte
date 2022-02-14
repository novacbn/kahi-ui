<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {htmldark, htmllight, htmlmode} from "./htmlmode";

    const mode_store = htmlmode();

    const dark_shortcut_store = htmldark();
    const light_shortcut_store = htmllight();
</script>

<Meta title="Stores/htmlmode" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Heading>Application Theme Mode</Heading>

    <Text>
        <Code>&lt;html data-mode&gt;</Code>: <Code>
            "{$mode_store}"
        </Code>
    </Text>
</Story>

<Story name="Built-In Shortcuts">
    <Heading>Application Theme Mode</Heading>

    <Text>
        <Code>&lt;html data-mode="dark"&gt;</Code>: <Code>
            {$dark_shortcut_store}
        </Code>
    </Text>

    <Text>
        <Code>&lt;html data-mode="light"&gt;</Code>: <Code>
            {$light_shortcut_store}
        </Code>
    </Text>
</Story>
