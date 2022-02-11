<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {add_days, now_day, subtract_days} from "../../../util/datetime/days";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import DayStepper from "./DayStepper.svelte";

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
    let value = now_day();

    let max = add_days(value, 5);
    let min = subtract_days(value, 5);
    let steps = 3;
</script>

<Meta title="Widgets/DayStepper" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DayStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <DayStepper palette="accent" disabled bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <DayStepper palette="accent" readonly bind:calendar bind:locale bind:value />

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

<Story name="Steps">
    <DayStepper palette="accent" {steps} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, steps}, null, 4)}
    </Code>
</Story>

<Story name="Steps + Maximum + Minimum">
    <DayStepper palette="accent" {steps} {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, steps, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <DayStepper
        palette="accent"
        day="numeric"
        month="numeric"
        weekday="short"
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

                <DayStepper palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
