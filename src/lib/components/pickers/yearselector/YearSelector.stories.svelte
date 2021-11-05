<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Code from "../../typography/code/Code.svelte";

    import YearSelector from "./YearSelector.svelte";

    let calendar;
    let locale;
    let value;

    let max = `${new Date().getUTCFullYear() + 2}-01-01`;
    let min = `${new Date().getUTCFullYear() - 2}-01-01`;
</script>

<Meta title="Pickers/YearSelector" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <YearSelector bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value}, null, 4)}
    </Code>
</Story>

<Story name="Maximum + Minimum">
    <YearSelector {max} {min} bind:calendar bind:locale bind:value />

    <Code is="pre">
        {JSON.stringify({calendar, locale, value, max, min}, null, 4)}
    </Code>
</Story>
