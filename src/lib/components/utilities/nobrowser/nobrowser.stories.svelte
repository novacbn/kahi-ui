<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import NoBrowser from "./NoBrowser.svelte";
</script>

<Meta title="Utilities/NoBrowser" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <NoBrowser>This will only render on Server.</NoBrowser>
</Story>
