<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Code from "../../typography/code/Code.svelte";

    import DayStepper from "./DayStepper.svelte";

    let calendar;
    let locale;
    let value;

    let max = Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 5}).toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR).subtract({days: 5}).toString();
    let step = 2;
</script>

<Meta title="Widgets/DayStepper" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <DayStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <DayStepper palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Step">
    <DayStepper palette="accent" {step} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step}, null, 4)}
    </Code>
</Story>
