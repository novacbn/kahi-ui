<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {
        get_decade_halves,
        get_yearstamp,
        has_year,
        is_year_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        decade: string;
        value: readonly string[];
    };

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let decade: $$Props["decade"] = get_yearstamp(calendar);
    export let value: $$Props["value"] = [];

    function on_year_click(year: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (has_year(value, year)) {
            value = multiple ? value.filter((entry) => !year.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, year.toString({calendarName: "always"})]
                : [year.toString({calendarName: "always"})];
        }
    }

    $: _decade = Temporal.PlainYearMonth.from(decade);
    $: _halfs = get_decade_halves(_decade.year, calendar);
</script>

<Stack spacing="small" width="content-max">
    {#each _halfs as half}
        <Stack orientation="horizontal" spacing="small">
            {#each half as year}
                <Button
                    variation="clear"
                    palette="accent"
                    active={has_year(value, year)}
                    disabled={!is_year_in_range(year, max, min)}
                    on:click={on_year_click.bind(null, year)}
                >
                    {year.toLocaleString(locale, {year: "numeric"}).toLocaleUpperCase(locale)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
