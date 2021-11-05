<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../../typography/code/Code.svelte";

    import MonthSelector from "./MonthSelector.svelte";

    let calendar;
    let locale;
    let value;

    let max = `${new Date().getUTCFullYear()}-${(new Date().getUTCMonth() + 1 + 1)
        .toString()
        .padStart(2, "0")}-01`;
    let min = `${new Date().getUTCFullYear()}-${(new Date().getUTCMonth() + 1 - 1)
        .toString()
        .padStart(2, "0")}-01`;
</script>

<Meta title="Pickers/MonthSelector" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <MonthSelector bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <MonthSelector {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>
