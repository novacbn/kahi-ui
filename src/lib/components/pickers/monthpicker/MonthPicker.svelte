<script lang="ts">
    import {get_calendar_quaters} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        multiple?: boolean;

        months: number[];
        year: number;
    };

    const date = new Date();

    export let multiple: $$Props["multiple"] = false;

    export let months: $$Props["months"] = [];
    export let year: $$Props["year"] = date.getUTCFullYear();

    function on_month_click(_month: number, event: MouseEvent): void {
        if (multiple) {
            if (months.includes(_month)) months = months.filter((value) => value !== _month);
            else months = [...months, _month];

            return;
        }

        if (months.includes(_month)) months = [];
        else months = [_month];
    }

    $: _quaters = get_calendar_quaters(year);
</script>

<Stack spacing="small" width="content-max">
    {#each _quaters as quater}
        <Stack orientation="horizontal" spacing="small">
            {#each quater as _month}
                <Button
                    variation="clear"
                    palette="accent"
                    active={months.includes(_month.month)}
                    on:click={on_month_click.bind(null, _month.month)}
                >
                    {_month
                        .toLocaleString(BROWSER_LOCALE, {month: "short"})
                        .toLocaleUpperCase(BROWSER_LOCALE)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
