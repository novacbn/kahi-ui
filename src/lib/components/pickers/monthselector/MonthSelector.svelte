<script lang="ts">
    import {get_calendar_month} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        year: number;
        value: number;
    };

    const date = new Date();

    export let year: $$Props["year"] = date.getUTCFullYear();
    export let value: $$Props["value"] = date.getUTCMonth() + 1;

    function on_month_select(difference: number, event: MouseEvent): void {
        const new_month = _month.add({months: difference});

        year = new_month.year;
        value = new_month.month;
    }

    $: _month = get_calendar_month(year, value);
</script>

<Stack orientation="horizontal" spacing="small" width="content-max">
    <Text is="strong">
        {_month.toLocaleString(BROWSER_LOCALE, {month: "long", year: "numeric"})}
    </Text>

    <Spacer variation="inline" />

    <Button variation="clear" palette="accent" on:click={on_month_select.bind(null, -1)}>
        &lt;
    </Button>

    <Button variation="clear" palette="accent" on:click={on_month_select.bind(null, 1)}>
        &gt;
    </Button>
</Stack>
