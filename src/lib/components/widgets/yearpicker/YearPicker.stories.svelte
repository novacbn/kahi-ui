<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

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

<Meta title="Widgets/YearPicker" />

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
