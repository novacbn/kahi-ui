<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import ServerRender from "./ServerRender.svelte";
</script>

<Meta title="Utilities/ServerRender" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <ServerRender>This will only render on Server.</ServerRender>
</Story>
