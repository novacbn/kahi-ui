<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import TimePicker from "./TimePicker.svelte";

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
    let value;

    let now = Temporal.Now.plainTimeISO().toString();
    let max = Temporal.Now.plainTimeISO().add({hours: 2, minutes: 10, seconds: 30}).toString();
    let min = Temporal.Now.plainTimeISO().subtract({hours: 2, minutes: 10, seconds: 30}).toString();
    let highlight = Temporal.Now.plainTimeISO()
        .add({hours: 1, minutes: 15, seconds: 30})
        .toString();
</script>

<Meta title="Widgets/TimePicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
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
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <TimePicker palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack>
</Story>
