<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import DayPicker from "./DayPicker.svelte";

    const SIZINGS = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    let calendar;
    let locale;
    let timestamp;
    let value;

    let disabled = [Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 2}).toString()];
    let max = Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 3}).toString();
    let min = Temporal.Now.plainDate(BROWSER_CALENDAR).subtract({days: 3}).toString();
    let highlight = [
        Temporal.Now.plainDate(BROWSER_CALENDAR).toString(),
        Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 1}).toString(),
        Temporal.Now.plainDate(BROWSER_CALENDAR).add({days: 2}).toString(),
    ];
</script>

<Meta title="Widgets/DayPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <DayPicker palette="accent" bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <DayPicker palette="accent" disabled bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled Days">
    <DayPicker palette="accent" {disabled} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, disabled, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <DayPicker palette="accent" multiple bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Once">
    <DayPicker palette="accent" once bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <DayPicker palette="accent" readonly bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Highlight">
    <DayPicker palette="accent" {highlight} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, highlight}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <DayPicker palette="accent" {max} {min} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <DayPicker
        palette="accent"
        day="numeric"
        weekday="long"
        bind:calendar
        bind:locale
        bind:timestamp
        bind:value
    />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Sizing">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <DayPicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack>
</Story>
