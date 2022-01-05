<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import BrowserRender from "./BrowserRender.svelte";
</script>

<Meta title="Utilities/BrowserRender" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <BrowserRender>This will only render on Browser.</BrowserRender>
</Story>
