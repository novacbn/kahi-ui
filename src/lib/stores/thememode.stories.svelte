<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../components/typography/text/Text.svelte";

    import {darkmode, lightmode} from "./thememode";

    const darkmode_store = darkmode();
    const lightmode_store = lightmode();
</script>

<Meta title="Stores/thememode" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Text>
        {$darkmode_store ? "[DARKSTORE] Darkmode is enabled!" : "[DARKSTORE] Lightmode is enabled!"}
    </Text>

    <Text>
        {$lightmode_store
            ? "[LIGHTSTORE] Lightmode is enabled!"
            : "[LIGHTSTORE] Darkmode is enabled!"}
    </Text>
</Story>
