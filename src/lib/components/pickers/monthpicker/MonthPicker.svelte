<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";

    import {get_calendar_quaters, has_month, is_month_in_range} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        year: number;
        value: readonly string[];
    };

    const date = new Date();

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let year: $$Props["year"] = date.getUTCFullYear();
    export let value: $$Props["value"] = [];

    function on_month_click(month: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (has_month(value, month)) {
            value = multiple ? value.filter((entry) => !month.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, month.toString({calendarName: "always"})]
                : [month.toString({calendarName: "always"})];
        }
    }

    $: _quaters = get_calendar_quaters(year, calendar);
</script>

<Stack spacing="small" width="content-max">
    {#each _quaters as quater}
        <Stack orientation="horizontal" spacing="small">
            {#each quater as month}
                <Button
                    variation="clear"
                    palette="accent"
                    active={has_month(value, month)}
                    disabled={!is_month_in_range(month, max, min, true)}
                    on:click={on_month_click.bind(null, month)}
                >
                    {month.toLocaleString(locale, {month: "short"}).toLocaleUpperCase(locale)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
