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
    let timestamp;
    let value;

    let disabled = [Temporal.Now.plainTimeISO().add({hours: 2}).toString()];
    let max = Temporal.Now.plainTimeISO()

        .add({hours: 3})
        .toString();
    let min = Temporal.Now.plainTimeISO()

        .subtract({hours: 3})
        .toString();
</script>

<Meta title="Widgets/TimePicker" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <TimePicker palette="accent" bind:calendar bind:locale bind:timestamp bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, timestamp, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">x</Story>

<Story name="Maximum + Minimum">x</Story>

<Story name="Custom Format">x</Story>

<Story name="Sizing">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                x
            </div>
        {/each}
    </Stack>
</Story>
