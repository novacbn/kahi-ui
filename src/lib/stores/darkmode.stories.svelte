<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../components/typography/text/Text.svelte";

    import {darkmode} from "./darkmode";

    const darkmode_store = darkmode();
</script>

<Meta title="Stores/darkmode" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Text>
        {$darkmode_store ? "Darkmode is enabled!" : "Lightmode is enabled!"}
    </Text>
</Story>
