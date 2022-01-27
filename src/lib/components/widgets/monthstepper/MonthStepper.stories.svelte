<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {add_months, now_month, subtract_months} from "../../../util/datetime/months";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import MonthStepper from "./MonthStepper.svelte";

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
    let value = now_month();

    let max = add_months(value, 5);
    let min = subtract_months(value, 5);
    let step = 3;
</script>

<Meta title="Widgets/MonthStepper" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <MonthStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <MonthStepper palette="accent" disabled bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <MonthStepper palette="accent" readonly bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthStepper palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Step">
    <MonthStepper palette="accent" {step} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step}, null, 4)}
    </Code>
</Story>

<Story name="Step + Maximum + Minimum">
    <MonthStepper palette="accent" {step} {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <MonthStepper
        palette="accent"
        month="numeric"
        year="2-digit"
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

                <MonthStepper palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
