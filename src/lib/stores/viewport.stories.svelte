<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../components/typography/code/Code.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";
    import Text from "../components/typography/text/Text.svelte";

    import {viewport, viewports} from "./viewport";

    const mobile_store = viewport("mobile");
    const tablet_store = viewport("tablet");

    const desktop_store = viewport("desktop");
    const widescreen_store = viewport("widescreen");

    const combo_store = viewports({
        mobile: true,
        tablet: true,
    });
</script>

<Meta title="Stores/viewport" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Heading>Viewports Enabled</Heading>

    <Text>Mobile: <Code>{$mobile_store}</Code></Text>
    <Text>Tablet: <Code>{$tablet_store}</Code></Text>

    <Text>Desktop: <Code>{$desktop_store}</Code></Text>
    <Text>
        Widescreen: <Code>
            {$widescreen_store}
        </Code>
    </Text>

    <Text>Mobile / Tablet: <Code>{$combo_store}</Code></Text>
</Story>
