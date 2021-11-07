<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import MonthPicker from "./MonthPicker.svelte";

    let calendar;
    let locale;
    let year;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .add({months: 2})
        .toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .subtract({months: 2})
        .toString();
</script>

<Meta title="Widgets/MonthPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthPicker palette="accent" bind:calendar bind:locale bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <MonthPicker palette="accent" bind:calendar bind:locale bind:year bind:value multiple />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthPicker palette="accent" {max} {min} bind:calendar bind:locale bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, year, value, max, min}, null, 4)}
    </Code>
</Story>
