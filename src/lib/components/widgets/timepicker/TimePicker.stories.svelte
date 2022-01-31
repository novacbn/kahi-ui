<script>
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {add_hours, subtract_hours} from "../../../util/datetime/hours";
    import {add_minutes, subtract_minutes} from "../../../util/datetime/minutes";
    import {add_seconds, now_second, subtract_seconds} from "../../../util/datetime/seconds";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import TimePicker from "./TimePicker.svelte";

    const SIZINGS = [
        ["medium", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    let calendar;
    let locale;
    let value;

    let now = now_second();
    let max = add_hours(add_minutes(add_seconds(now, 30), 10), 2);
    let min = subtract_hours(subtract_minutes(subtract_seconds(now, 30), 10), 2);
    let highlight = [
        now,
        subtract_hours(subtract_minutes(subtract_seconds(now, 30), 15), 1),
        add_hours(add_minutes(add_seconds(now, 30), 15), 1),
    ];
</script>

<Meta title="Widgets/TimePicker" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <TimePicker palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Auto Scroll">
    <TimePicker palette="accent" scroll bind:calendar bind:locale bind:value={now} />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value: now}, null, 4)}
    </Code>
</Story>

<Story name="Now Button">
    <TimePicker palette="accent" hour_12 now bind:calendar bind:locale bind:value={now} />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value: now}, null, 4)}
    </Code>
</Story>

<!-- HACK: Story names cannot start with number literals -->
<Story name="Twelve (12) Hour">
    <TimePicker palette="accent" hour_12 bind:calendar bind:locale bind:value={now} />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value: now}, null, 4)}
    </Code>
</Story>

<Story name="Twenty-Four (24) Hour">
    <TimePicker palette="accent" hour_12={false} bind:calendar bind:locale bind:value={now} />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value: now}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <TimePicker palette="accent" disabled bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <TimePicker palette="accent" readonly bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Highlight">
    <TimePicker palette="accent" {highlight} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, highlight}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <TimePicker palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <TimePicker
        palette="accent"
        hour="numeric"
        minute="numeric"
        second="numeric"
        hour_12
        bind:calendar
        bind:locale
        bind:value
    />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <TimePicker
                    palette="accent"
                    width="content-max"
                    sizing={is_default ? undefined : sizing}
                />
            </div>
        {/each}
    </Stack.Container>
</Story>
