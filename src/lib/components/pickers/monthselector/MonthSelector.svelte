<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_monthstamp, is_month_in_range} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        value: string;
    };

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let value: $$Props["value"] = get_monthstamp(calendar);

    function on_month_select(difference: number, event: MouseEvent): void {
        // HACK: Switch to only using `Temporal.PlainYearMonth.add` whenever bug for chained-subtractions is released
        // https://github.com/js-temporal/temporal-polyfill/issues/44
        if (difference > -1) {
            value = _month.add({months: difference}).toString();
            return;
        }

        // UNKNOWN: Will this have issues with year 0 being subtracted into year -1 (1 BC)?
        // Probably, but who is crazy enough to try subtracting all that way via the UI :)?
        value = Temporal.PlainYearMonth.from({
            calendar: _month.calendar,
            year: _month.month > 1 ? _month.year : _month.year - 1,
            month: _month.month > 1 ? _month.month - 1 : _month.monthsInYear,
        }).toString({calendarName: "always"});
    }

    $: _month = Temporal.PlainYearMonth.from(value);
</script>

<Stack orientation="horizontal" spacing="small" width="content-max">
    <Text is="strong">
        {_month.toLocaleString(locale, {month: "long", year: "numeric"})}
    </Text>

    <Spacer variation="inline" />

    <Button
        variation="clear"
        palette="accent"
        disabled={!is_month_in_range(_month, undefined, min)}
        on:click={on_month_select.bind(null, -1)}
    >
        &lt;
    </Button>

    <Button
        variation="clear"
        palette="accent"
        disabled={!is_month_in_range(_month, max)}
        on:click={on_month_select.bind(null, 1)}
    >
        &gt;
    </Button>
</Stack>
