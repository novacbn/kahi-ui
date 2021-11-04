<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_calendar_weeks} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        multiple?: boolean;

        month: number;
        year: number;
        value: readonly Temporal.PlainDate[];
    };

    const date = new Date();

    export let multiple: $$Props["multiple"] = false;

    export let month: $$Props["month"] = date.getUTCMonth() + 1;
    export let year: $$Props["year"] = date.getUTCFullYear();
    export let value: $$Props["value"] = [];

    function is_day_active(days: readonly Temporal.PlainDate[], day: Temporal.PlainDate): boolean {
        return !!days.find((entry) => day.equals(entry));
    }

    function on_day_click(day: Temporal.PlainDate, event: MouseEvent): void {
        if (is_day_active(value, day)) {
            value = multiple ? value.filter((entry) => !day.equals(entry)) : [];
        } else {
            // NOTE: We want to prevent mutations to our internal representation, so we
            // need to clone the output to the `value` property
            value = multiple
                ? [...value, Temporal.PlainDate.from(day)]
                : [Temporal.PlainDate.from(day)];
        }
    }

    $: _weeks = get_calendar_weeks(year, month);
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
                    active={is_day_active(value, day)}
                    on:click={on_day_click.bind(null, day)}
                >
                    {day.day.toString().padStart(2, "0")}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
