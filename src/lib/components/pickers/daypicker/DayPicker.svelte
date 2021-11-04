<script lang="ts">
    import {get_calendar_weeks} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        month?: number;
        year?: number;
    };

    const date = new Date();

    export let month: $$Props["month"] = date.getUTCMonth() + 1;
    export let year: $$Props["year"] = date.getUTCFullYear();

    $: _weeks = get_calendar_weeks(year as number, month as number);
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
                <Button variation="clear" palette={day.dayOfWeek > 5 ? undefined : "accent"}>
                    {day.day.toString().padStart(2, "0")}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
