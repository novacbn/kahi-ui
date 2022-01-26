<script>
    import {Temporal} from "../../../../vendor/js-temporal-polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {DEFAULT_CALENDAR} from "../../../util/locale";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import MonthPicker from "./MonthPicker.svelte";

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

    let disabled = [
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({months: 1}).toString(),
    ];
    let max = Temporal.Now.plainDate(DEFAULT_CALENDAR)
        .toPlainYearMonth()
        .add({months: 2})
        .toString();
    let min = Temporal.Now.plainDate(DEFAULT_CALENDAR)
        .toPlainYearMonth()
        .subtract({months: 2})
        .toString();
    let highlight = [
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({months: 1}).toString(),
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({months: 2}).toString(),
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({months: 3}).toString(),
    ];
</script>

<Meta title="Widgets/MonthPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthPicker palette="accent" bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <MonthPicker palette="accent" disabled bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled Months">
    <MonthPicker palette="accent" {disabled} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, disabled, value}, null, 4)}
    </Code>
</Story>

<Story name="Once">
    <MonthPicker palette="accent" once bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <MonthPicker palette="accent" readonly bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <MonthPicker palette="accent" multiple bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Highlight">
    <MonthPicker palette="accent" {highlight} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, highlight}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthPicker palette="accent" {max} {min} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <MonthPicker
        palette="accent"
        month="long"
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

                <MonthPicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack>
</Story>
