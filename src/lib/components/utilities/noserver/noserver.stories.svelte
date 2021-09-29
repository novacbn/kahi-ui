<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import NoServer from "./NoServer.svelte";
</script>

<Meta title="Utilities/NoServer" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <NoServer>This will only render on Browser.</NoServer>
</Story>
