<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import DayPicker from "./DayPicker.svelte";

    let calendar;
    let locale;
    let month;
    let year;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 3}).toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR).subtract({days: 3}).toString();
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

<Story name="Maximum + Minimum">
    <DayPicker {max} {min} bind:calendar bind:locale bind:month bind:year bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, month, year, value, max, min}, null, 4)}
    </Code>
</Story>
