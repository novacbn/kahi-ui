<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {mediaquery, mediaqueries} from "./mediaquery";

    const standard_hd_store = mediaquery("(min-width: 1280px) and (min-height: 720px)");

    const ratio_store = mediaquery("(aspect-ratio: 16/9)");

    const combo_store = mediaqueries(
        ["(min-width: 1280px) and (min-height: 720px)", "(aspect-ratio: 16/9)"],
        {behavior: "and"}
    );
</script>

<Meta title="Stores/mediaquery" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Heading>Queries Enabled</Heading>

    <Text>sHD: <Code>{$standard_hd_store}</Code></Text>
    <Text>16:9: <Code>{$ratio_store}</Code></Text>

    <Text>sHD + 16:9: <Code>{$combo_store}</Code></Text>
</Story>
