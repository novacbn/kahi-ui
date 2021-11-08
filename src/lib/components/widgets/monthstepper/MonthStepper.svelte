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
    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetHeader from "../widget/WidgetHeader.svelte";
    import WidgetSection from "../widget/WidgetSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        calendar: string;
        locale: string;

        month: Intl.DateTimeFormatOptions["month"];
        year: Intl.DateTimeFormatOptions["year"];

        max?: string;
        min?: string;
        step: number | string;

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

    export let month: $$Props["month"] = "long";
    export let year: $$Props["year"] = "numeric";

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = 1;

    export let value: $$Props["value"] = get_monthstamp(calendar);

    export let palette: $$Props["palette"] = undefined;

    function on_month_select(difference: number, event: MouseEvent): void {
        // TODO: clamp `step` to `max` / `min`

        // HACK: Switch to only using `Temporal.PlainYearMonth.add` whenever bug for chained-subtractions is released
        // https://github.com/js-temporal/temporal-polyfill/issues/44
        // value = _month.add({months: difference}).toString({calendarName: "always"});

        // HACK: `Temporal.PlainDate` doesn't have the same "locking" issue as `Temporal.PlainYearMonth`
        value = _month
            .toPlainDate({day: 1})
            .add({months: difference})
            .toString({calendarName: "always"});
    }

    $: _month = Temporal.PlainYearMonth.from(value);
    $: _step = typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step);
</script>

<WidgetContainer {...$$props} bind:element class="month-stepper {_class}">
    <WidgetSection variation="flex">
        <WidgetHeader>
            {_month.toLocaleString(locale, {month, year})}
        </WidgetHeader>

        <Spacer variation="inline" />

        <WidgetButton
            disabled={!is_month_in_range(_month, undefined, min)}
            {palette}
            on:click={on_month_select.bind(null, _step * -1)}
        >
            <slot name="previous">&lt;</slot>
        </WidgetButton>

        <WidgetButton
            disabled={!is_month_in_range(_month, max)}
            {palette}
            on:click={on_month_select.bind(null, _step)}
        >
            <slot name="next">&gt;</slot>
        </WidgetButton>
    </WidgetSection>
</WidgetContainer>
