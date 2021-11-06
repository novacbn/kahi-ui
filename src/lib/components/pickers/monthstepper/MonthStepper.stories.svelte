<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import MonthStepper from "./MonthStepper.svelte";

    let calendar;
    let locale;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .add({months: 1})
        .toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .subtract({months: 1})
        .toString();
    let step = 4;
</script>

<Meta title="Pickers/MonthStepper" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthStepper palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Step">
    <MonthStepper palette="accent" {step} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step}, null, 4)}
    </Code>
</Story>
