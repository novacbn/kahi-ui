<script>
    import {Temporal} from "../../../vendor/js-temporal";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {DEFAULT_CALENDAR} from "../../../util/locale";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import YearPicker from "./YearPicker.svelte";

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
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({years: 1}).toString(),
    ];
    let max = Temporal.Now.plainDate(DEFAULT_CALENDAR)
        .toPlainYearMonth()
        .add({years: 3})
        .toString();
    let min = Temporal.Now.plainDate(DEFAULT_CALENDAR)
        .toPlainYearMonth()
        .subtract({years: 3})
        .toString();
    let highlight = [
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({years: 1}).toString(),

        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({years: 2}).toString(),
        Temporal.Now.plainDate(DEFAULT_CALENDAR).toPlainYearMonth().add({years: 3}).toString(),
    ];
</script>

<Meta title="Widgets/YearPicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <YearPicker palette="accent" bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <YearPicker palette="accent" disabled bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled Years">
    <YearPicker palette="accent" {disabled} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, disabled, value}, null, 4)}
    </Code>
</Story>

<Story name="Once">
    <YearPicker palette="accent" once bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <YearPicker palette="accent" readonly bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Multiple">
    <YearPicker palette="accent" multiple bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Highlight">
    <YearPicker palette="accent" {highlight} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, highlight}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <YearPicker palette="accent" {max} {min} bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <YearPicker
        palette="accent"
        year="2-digit"
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

                <YearPicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack>
</Story>
