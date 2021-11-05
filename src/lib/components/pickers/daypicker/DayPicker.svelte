<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_calendar_weeks, has_day} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        multiple?: boolean;

        calendar: string;
        locale: string;

        month: number;
        year: number;
        value: readonly string[];
    };

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    const date = Temporal.Now.plainDate(calendar);

    export let month: $$Props["month"] = date.month;
    export let year: $$Props["year"] = date.year;
    export let value: $$Props["value"] = [];

    function on_day_click(day: Temporal.PlainDate, event: MouseEvent): void {
        if (has_day(value, day)) {
            value = multiple ? value.filter((entry) => !day.equals(entry)) : [];
        } else {
            // NOTE: We want to prevent mutations to our internal representation, so we
            // need to clone the output to the `value` property
            value = multiple
                ? [...value, Temporal.PlainDate.from(day).toString({calendarName: "always"})]
                : [Temporal.PlainDate.from(day).toString({calendarName: "always"})];
        }
    }

    $: _weeks = get_calendar_weeks(year, month, calendar);
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
                    on:click={on_day_click.bind(null, day)}
                >
                    {day.day.toString().padStart(2, "0")}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
