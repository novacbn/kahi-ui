<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_calendar_quaters} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        multiple?: boolean;

        year: number;
        value: readonly Temporal.PlainYearMonth[];
    };

    const date = new Date();

    export let multiple: $$Props["multiple"] = false;

    export let year: $$Props["year"] = date.getUTCFullYear();
    export let value: $$Props["value"] = [];

    function is_month_active(
        months: readonly Temporal.PlainYearMonth[],
        month: Temporal.PlainYearMonth
    ): boolean {
        return !!months.find((entry) => month.equals(entry));
    }

    function on_month_click(month: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (is_month_active(value, month)) {
            value = multiple ? value.filter((entry) => !month.equals(entry)) : [];
        } else {
            // NOTE: We want to prevent mutations to our internal representation, so we
            // need to clone the output to the `value` property
            value = multiple
                ? [...value, Temporal.PlainYearMonth.from(month)]
                : [Temporal.PlainYearMonth.from(month)];
        }
    }

    $: _quaters = get_calendar_quaters(year);
</script>

<Stack spacing="small" width="content-max">
    {#each _quaters as quater}
        <Stack orientation="horizontal" spacing="small">
            {#each quater as month}
                <Button
                    variation="clear"
                    palette="accent"
                    active={is_month_active(value, month)}
                    on:click={on_month_click.bind(null, month)}
                >
                    {month
                        .toLocaleString(BROWSER_LOCALE, {month: "short"})
                        .toLocaleUpperCase(BROWSER_LOCALE)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
