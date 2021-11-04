<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import MonthPicker from "./MonthPicker.svelte";
</script>

<Meta title="Pickers/MonthPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthPicker />
</Story>

<Story name="Multiple">
    <MonthPicker multiple />
</Story>
