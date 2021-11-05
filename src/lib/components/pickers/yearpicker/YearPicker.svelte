<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_decade_halves, has_year} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        multiple?: boolean;

        calendar: string;
        locale: string;

        decade: number;
        value: readonly string[];
    };

    const date = new Date();

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let decade: $$Props["decade"] = date.getUTCFullYear();
    export let value: $$Props["value"] = [];

    function on_year_click(year: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (has_year(value, year)) {
            value = multiple ? value.filter((entry) => !year.equals(entry)) : [];
        } else {
            // NOTE: We want to prevent mutations to our internal representation, so we
            // need to clone the output to the `value` property
            value = multiple
                ? [...value, Temporal.PlainYearMonth.from(year).toString({calendarName: "always"})]
                : [Temporal.PlainYearMonth.from(year).toString({calendarName: "always"})];
        }
    }

    $: _halfs = get_decade_halves(decade, calendar);
</script>

<Stack spacing="small" width="content-max">
    {#each _halfs as half}
        <Stack orientation="horizontal" spacing="small">
            {#each half as year}
                <Button
                    variation="clear"
                    palette="accent"
                    active={has_year(value, year)}
                    on:click={on_year_click.bind(null, year)}
                >
                    {year.toLocaleString(locale, {year: "numeric"}).toLocaleUpperCase(locale)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
