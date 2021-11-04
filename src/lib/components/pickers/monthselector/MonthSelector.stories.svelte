<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import MonthSelector from "./MonthSelector.svelte";
</script>

<Meta title="Pickers/MonthSelector" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthSelector />
</Story>
