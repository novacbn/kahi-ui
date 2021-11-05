<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import {get_monthstamp} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    type $$Props = {
        calendar: string;
        locale: string;

        value: string;
    };

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let value: $$Props["value"] = get_monthstamp(calendar);

    function on_year_select(difference: number, event: MouseEvent): void {
        value = _year.add({years: difference}).toString();
    }

    $: _year = Temporal.PlainYearMonth.from(value);
</script>

<Stack orientation="horizontal" spacing="small" width="content-max">
    <Text is="strong">
        {_year.toLocaleString(locale, {year: "numeric"})}
    </Text>

    <Spacer variation="inline" />

    <Button variation="clear" palette="accent" on:click={on_year_select.bind(null, -1)}>
        &lt;
    </Button>

    <Button variation="clear" palette="accent" on:click={on_year_select.bind(null, 1)}>&gt;</Button>
</Stack>
