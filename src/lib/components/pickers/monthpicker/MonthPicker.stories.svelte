<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../../typography/code/Code.svelte";

    import MonthPicker from "./MonthPicker.svelte";

    let calendar;
    let locale;
    let year;
    let value;

    let max = `${new Date().getUTCFullYear()}-${(new Date().getUTCMonth() + 1 + 1)
        .toString()
        .padStart(2, "0")}-01`;
    let min = `${new Date().getUTCFullYear()}-${(new Date().getUTCMonth() + 1 - 1)
        .toString()
        .padStart(2, "0")}-01`;
</script>

<Meta title="Pickers/MonthPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthPicker bind:calendar bind:locale bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <MonthPicker bind:calendar bind:locale bind:year bind:value multiple />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthPicker {max} {min} bind:calendar bind:locale bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value, max, min}, null, 4)}
    </Code>
</Story>
