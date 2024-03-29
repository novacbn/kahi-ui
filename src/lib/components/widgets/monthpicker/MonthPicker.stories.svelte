<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {now_day} from "../../../util/datetime/days";
    import {add_months, subtract_months} from "../../../util/datetime/months";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import MonthPicker from "./MonthPicker.svelte";

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    let calendar;
    let locale;
    let timestamp = now_day();
    let value;

    let disabled = [add_months(timestamp, 1), subtract_months(timestamp, 1)];
    let max = add_months(timestamp, 2);
    let min = subtract_months(timestamp, 2);
    let highlight = [timestamp, add_months(timestamp, 2), subtract_months(timestamp, 2)];
</script>

<Meta title="Widgets/MonthPicker" />

<Template>
    <slot />
</Template>

<Story name="Preview">
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
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <MonthPicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
