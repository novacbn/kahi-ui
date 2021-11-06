<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {get_monthstamp, is_month_in_range} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import PickerButton from "../picker/PickerButton.svelte";
    import PickerContainer from "../picker/PickerContainer.svelte";
    import PickerHeader from "../picker/PickerHeader.svelte";
    import PickerSection from "../picker/PickerSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        value: string;
        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        next: {};

        previous: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let value: $$Props["value"] = get_monthstamp(calendar);

    export let palette: $$Props["palette"] = undefined;

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

<PickerContainer {...$$props} bind:element class="month-selector {_class}">
    <PickerSection variation="flex">
        <PickerHeader>
            {_month.toLocaleString(locale, {month: "long", year: "numeric"})}
        </PickerHeader>

        <Spacer variation="inline" />

        <PickerButton
            disabled={!is_month_in_range(_month, undefined, min)}
            {palette}
            on:click={on_month_select.bind(null, -1)}
        >
            <slot name="previous">&lt;</slot>
        </PickerButton>

        <PickerButton
            disabled={!is_month_in_range(_month, max)}
            {palette}
            on:click={on_month_select.bind(null, 1)}
        >
            <slot name="next">&gt;</slot>
        </PickerButton>
    </PickerSection>
</PickerContainer>
