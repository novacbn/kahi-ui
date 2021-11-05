<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {
        get_calendar_weeks,
        get_monthstamp,
        has_day,
        is_day_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        month: string;
        value: readonly string[];
    };

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let month: $$Props["month"] = get_monthstamp(calendar);
    export let value: $$Props["value"] = [];

    function on_day_click(day: Temporal.PlainDate, event: MouseEvent): void {
        if (has_day(value, day)) {
            value = multiple ? value.filter((entry) => !day.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, day.toString({calendarName: "always"})]
                : [day.toString({calendarName: "always"})];
        }
    }

    $: _month = Temporal.PlainDate.from(month);
    $: _weeks = get_calendar_weeks(_month.year, _month.month, calendar);
</script>

<Stack spacing="small" width="content-max">
    <Stack orientation="horizontal" spacing="small">
        {#each _weeks[0] as day}
            <Text is="strong" align="center" size="small" style="flex-grow:1;">
                {day
                    .toLocaleString(BROWSER_LOCALE, {weekday: "short"})
                    .toLocaleUpperCase(BROWSER_LOCALE)}
            </Text>
        {/each}
    </Stack>

    {#each _weeks as week}
        <Stack orientation="horizontal" spacing="small">
            {#each week as day}
                <Button
                    variation="clear"
                    palette={day.dayOfWeek > 5 ? undefined : "accent"}
                    active={has_day(value, day)}
                    disabled={!is_day_in_range(day, max, min, true)}
                    on:click={on_day_click.bind(null, day)}
                >
                    {day.day.toString().padStart(2, "0")}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
