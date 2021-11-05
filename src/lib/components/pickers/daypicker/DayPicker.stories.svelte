<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../../typography/code/Code.svelte";

    import DayPicker from "./DayPicker.svelte";

    let calendar;
    let locale;
    let month;
    let year;
    let value;
</script>

<Meta title="Pickers/DayPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <DayPicker bind:calendar bind:locale bind:month bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, month, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <DayPicker bind:calendar bind:locale bind:month bind:year bind:value multiple />

    <Code is="pre">
        {JSON.stringify({calendar, locale, month, year, value}, null, 4)}
    </Code>
</Story>
