<script>
    import {Temporal} from "@js-temporal/polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {BROWSER_CALENDAR} from "../../../util/locale";

    import TimeStamp from "./TimeStamp.svelte";

    const now = Temporal.Now.plainDateTime(BROWSER_CALENDAR).toString();
</script>

<Meta title="Feedback/TimeStamp" />

<Template>
    <slot />
</Template>

<Story name="Time">
    <TimeStamp value={now} hour="numeric" minute="numeric" second="numeric" />
</Story>
