<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import YearPicker from "./YearPicker.svelte";

    let calendar;
    let locale;
    let decade;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .add({years: 3})
        .toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .subtract({years: 3})
        .toString();
</script>

<Meta title="Pickers/YearPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <YearPicker palette="accent" bind:calendar bind:locale bind:decade bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, decade, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <YearPicker palette="accent" bind:calendar bind:locale bind:decade bind:value multiple />

    <Code is="pre">
        {JSON.stringify({calendar, locale, decade, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <YearPicker palette="accent" {max} {min} bind:calendar bind:locale bind:decade bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, decade, value, max, min}, null, 4)}
    </Code>
</Story>