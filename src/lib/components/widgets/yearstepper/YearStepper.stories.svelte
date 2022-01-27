<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {add_years, now_year, subtract_years} from "../../../util/datetime/years";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import YearStepper from "./YearStepper.svelte";

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
    let value = now_year();

    let max = add_years(value, 5);
    let min = subtract_years(value, 5);
    let step = 3;
</script>

<Meta title="Widgets/YearStepper" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <YearStepper palette="accent" bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Disabled">
    <YearStepper palette="accent" disabled bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Readonly">
    <YearStepper palette="accent" readonly bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <YearStepper palette="accent" {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Step">
    <YearStepper palette="accent" {step} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step}, null, 4)}
    </Code>
</Story>

<Story name="Step + Maximum + Minimum">
    <YearStepper palette="accent" {step} {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, step, max, min}, null, 4)}
    </Code>
</Story>

<Story name="Custom Format">
    <YearStepper palette="accent" year="2-digit" bind:calendar bind:locale bind:value />

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

                <YearStepper palette="accent" width="content-max" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
