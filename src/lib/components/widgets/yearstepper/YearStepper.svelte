<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {clamp_year, get_yearstamp, is_year_in_range} from "../../../util/datetime";
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

        year: Intl.DateTimeFormatOptions["year"];

        max?: string;
        min?: string;
        step: number | string;

        value: string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
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

    export let year: $$Props["year"] = "numeric";

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = 1;

    export let value: $$Props["value"] = get_yearstamp(calendar);

    export let palette: $$Props["palette"] = undefined;

    function on_year_select(difference: number, event: MouseEvent): void {
        value = clamp_year(_year.add({years: difference}), min, max).toString({
            calendarName: "always",
        });
    }

    $: _step = typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step);
    $: _year = Temporal.PlainYearMonth.from(value);
</script>

<WidgetContainer {...$$props} bind:element class="year-stepper {_class}">
    <WidgetSection variation="flex">
        <WidgetHeader>
            {_year.toLocaleString(locale, {year})}
        </WidgetHeader>

        <Spacer variation="inline" />

        <WidgetButton
            disabled={!is_year_in_range(_year, undefined, min)}
            {palette}
            on:click={on_year_select.bind(null, _step * -1)}
        >
            <slot name="previous">&lt;</slot>
        </WidgetButton>

        <WidgetButton
            disabled={!is_year_in_range(_year, max)}
            {palette}
            on:click={on_year_select.bind(null, _step)}
        >
            <slot name="next">&gt;</slot>
        </WidgetButton>
    </WidgetSection>
</WidgetContainer>
