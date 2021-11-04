<script lang="ts">
    import {get_calendar_quaters} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type $$Props = {
        year?: number;
    };

    const date = new Date();

    export let year: $$Props["year"] = date.getUTCFullYear();

    $: _quaters = get_calendar_quaters(year as number);
</script>

<Stack spacing="small" width="content-max">
    {#each _quaters as quater}
        <Stack orientation="horizontal" spacing="small">
            {#each quater as month}
                <Button variation="clear" palette="accent">
                    {month
                        .toLocaleString(BROWSER_LOCALE, {month: "short"})
                        .toLocaleUpperCase(BROWSER_LOCALE)}
                </Button>
            {/each}
        </Stack>
    {/each}
</Stack>
