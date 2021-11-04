<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";

    import {get_calendar_month} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        value: Temporal.PlainYearMonth;
    };

    const date = new Date();

    export let value: $$Props["value"] = get_calendar_month(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1
    );

    function on_month_select(difference: number, event: MouseEvent): void {
        value = value.add({months: difference});
    }
</script>

<Stack orientation="horizontal" spacing="small" width="content-max">
    <Text is="strong">
        {value.toLocaleString(BROWSER_LOCALE, {month: "long", year: "numeric"})}
    </Text>

    <Spacer variation="inline" />

    <Button variation="clear" palette="accent" on:click={on_month_select.bind(null, -1)}>
        &lt;
    </Button>

    <Button variation="clear" palette="accent" on:click={on_month_select.bind(null, 1)}>
        &gt;
    </Button>
</Stack>
