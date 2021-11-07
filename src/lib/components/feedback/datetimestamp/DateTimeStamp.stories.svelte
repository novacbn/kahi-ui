<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import DateTimeStamp from "./DateTimeStamp.svelte";

    const now = Temporal.Now.zonedDateTime(BROWSER_CALENDAR).toString();
</script>

<Meta title="Feedback/DateTimeStamp" />

<Template>
    <slot />
</Template>

<Story name="Date">
    <DateTimeStamp value={now} day="numeric" month="long" year="numeric" />
</Story>

<Story name="Time">
    <DateTimeStamp value="04:24:09" hour="numeric" minute="numeric" second="numeric" />
</Story>

<Story name="Date + Time">
    <DateTimeStamp
        value={now}
        day="numeric"
        month="long"
        year="numeric"
        hour="numeric"
        minute="numeric"
        second="numeric"
    />
</Story>
