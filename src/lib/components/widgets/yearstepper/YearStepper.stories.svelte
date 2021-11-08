<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import YearStepper from "./YearStepper.svelte";

    let calendar;
    let locale;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .add({years: 5})
        .toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR)
        .toPlainYearMonth()
        .subtract({years: 5})
        .toString();
    let step = 3;
</script>

<Meta title="Widgets/YearStepper" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <YearStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <YearStepper palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Step">
    <YearStepper palette="accent" {step} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step}, null, 4)}
    </Code>
</Story>

<Story name="Step + Maximum + Minimum">
    <YearStepper palette="accent" {step} {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <YearStepper palette="accent" year="2-digit" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>
