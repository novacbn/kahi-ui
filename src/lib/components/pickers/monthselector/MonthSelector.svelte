<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

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
        // HACK: Switch to only using `Temporal.PlainYearMonth.add` whenever bug for chained-subtractions is released
        // https://github.com/js-temporal/temporal-polyfill/issues/44
        if (difference > -1) {
            value = value.add({months: difference});
            return;
        }

        // UNKNOWN: Will this have issues with year 0 being subtracted into year -1 (1 BC)?
        // Probably, but who is crazy enough to try subtracting all that way via the UI :)?
        value = Temporal.PlainYearMonth.from({
            calendar: value.calendar,
            year: value.month > 1 ? value.year : value.year - 1,
            month: value.month > 1 ? value.month - 1 : value.monthsInYear,
        });
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
