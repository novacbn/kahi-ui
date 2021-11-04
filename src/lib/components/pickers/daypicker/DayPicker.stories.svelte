<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import DayPicker from "./DayPicker.svelte";
</script>

<Meta title="Pickers/DayPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <DayPicker />
</Story>
