<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../../typography/code/Code.svelte";

    import YearPicker from "./YearPicker.svelte";

    let calendar;
    let locale;
    let year;
    let value;
</script>

<Meta title="Pickers/YearPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <YearPicker bind:calendar bind:locale bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <YearPicker bind:calendar bind:locale bind:year bind:value multiple />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>
