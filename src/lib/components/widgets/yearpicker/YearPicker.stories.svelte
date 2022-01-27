<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {add_years, now_year, subtract_years} from "../../../util/datetime/years";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import YearPicker from "./YearPicker.svelte";

    const SIZINGS = [
        ["medium", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const now = now_year();

    let calendar;
    let locale;
    let timestamp;
    let value;

    let disabled = [add_years(now, 1), subtract_years(now, 1)];
    let max = add_years(now, 2);
    let min = subtract_years(now, 2);
    let highlight = [now, add_years(now, 2), subtract_years(now, 2)];
</script>

<Meta title="Widgets/YearPicker" />

<Template>
    <slot />
</Template>

<Story name="Preview">
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
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <YearPicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
