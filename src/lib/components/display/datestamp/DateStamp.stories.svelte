<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import DateStamp from "./DateStamp.svelte";

    const now = Temporal.Now.plainDate(BROWSER_CALENDAR).toString();
</script>

<Meta title="Display/DateStamp" />

<Template>
    <slot />
</Template>

<Story name="Now">
    <DateStamp timestamp={now} day="numeric" month="long" year="numeric" />
</Story>
