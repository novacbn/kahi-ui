<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {prefersscheme} from "./prefersscheme";

    const darkmode_store = prefersscheme("dark");
    const lightmode_store = prefersscheme("light");
</script>

<Meta title="Stores/prefersscheme" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Heading>User Color Scheme Preferences</Heading>

    <Text>
        Darkmode: <Code>{$darkmode_store}</Code>
    </Text>

    <Text>
        Lightmode: <Code>{$lightmode_store}</Code>
    </Text>
</Story>
