<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {clamp_day, get_daystamp, is_day_in_range} from "../../../util/datetime";
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

        day: Intl.DateTimeFormatOptions["day"];
        month: Intl.DateTimeFormatOptions["month"];
        weekday: Intl.DateTimeFormatOptions["weekday"];

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

    export let day: $$Props["day"] = "2-digit";
    export let month: $$Props["month"] = "long";
    export let weekday: $$Props["weekday"] = "long";

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = 1;

    export let value: $$Props["value"] = get_daystamp(calendar);

    export let palette: $$Props["palette"] = undefined;

    function on_day_select(difference: number, event: MouseEvent): void {
        value = clamp_day(_day.add({days: difference}), min, max).toString({
            calendarName: "always",
        });
    }

    $: _step = typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step);
    $: _day = Temporal.PlainDate.from(value);
</script>

<WidgetContainer {...$$props} bind:element class="day-stepper {_class}">
    <WidgetSection variation="flex">
        <WidgetHeader>
            {_day.toLocaleString(locale, {month, weekday, day})}
        </WidgetHeader>

        <Spacer variation="inline" />

        <WidgetButton
            disabled={!is_day_in_range(_day, undefined, min)}
            {palette}
            on:click={on_day_select.bind(null, _step * -1)}
        >
            <slot name="previous">&lt;</slot>
        </WidgetButton>

        <WidgetButton
            disabled={!is_day_in_range(_day, max)}
            {palette}
            on:click={on_day_select.bind(null, _step)}
        >
            <slot name="next">&gt;</slot>
        </WidgetButton>
    </WidgetSection>
</WidgetContainer>
