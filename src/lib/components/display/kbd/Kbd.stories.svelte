<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Kbd from "./Kbd.svelte";
</script>

<Meta title="Display/Kbd" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Kbd>CTRL + C</Kbd>
</Story>
