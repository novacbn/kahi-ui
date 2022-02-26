<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {prefersdark, preferslight, prefersscheme} from "./prefersscheme";

    const darkscheme_store = prefersscheme("dark");
    const lightscheme_store = prefersscheme("light");

    const darkscheme_shortcut_store = prefersdark();
    const lightscheme_shortcut_store = preferslight();
</script>

<Meta title="Stores/prefersscheme" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Heading>User Color Scheme Preferences</Heading>

    <Text>
        Dark Scheme Preference: <Code>{$darkscheme_store}</Code>
    </Text>

    <Text>
        Light Scheme Preference: <Code>{$lightscheme_store}</Code>
    </Text>
</Story>

<Story name="Built-In Shortcuts">
    <Heading>User Color Scheme Preferences</Heading>

    <Text>
        Dark Scheme Preference: <Code>{$darkscheme_shortcut_store}</Code>
    </Text>

    <Text>
        Light Scheme Preference: <Code>{$lightscheme_shortcut_store}</Code>
    </Text>
</Story>
