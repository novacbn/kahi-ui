<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {clamp_year, get_yearstamp, is_year_in_range} from "../../../util/datetime";
    import {DEFAULT_CALENDAR, DEFAULT_LOCALE} from "../../../util/locale";

    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetHeader from "../widget/WidgetHeader.svelte";

    const dispatch = createEventDispatcher();

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        disabled?: boolean;
        readonly?: boolean;

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

    export let disabled: $$Props["disabled"] = false;
    export let readonly: $$Props["readonly"] = false;

    export let calendar: $$Props["calendar"] = DEFAULT_CALENDAR;
    export let locale: $$Props["locale"] = DEFAULT_LOCALE;

    export let year: $$Props["year"] = "numeric";

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = 1;

    export let value: $$Props["value"] = get_yearstamp(calendar);

    export let palette: $$Props["palette"] = undefined;

    function on_year_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        value = clamp_year(_year.add({years: difference}), min, max).toString({
            calendarName: "always",
        });

        dispatch("change");
    }

    $: _step = typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step);
    $: _year = Temporal.PlainYearMonth.from(value);
</script>

<WidgetContainer {...$$props} bind:element class="year-stepper {_class}">
    <Stack orientation="horizontal" alignment_y="center">
        <WidgetHeader>
            {_year.toLocaleString(locale, {year})}
        </WidgetHeader>

        <Spacer variation="inline" />

        <WidgetButton
            disabled={disabled || !is_year_in_range(_year, undefined, min)}
            {palette}
            on:click={on_year_select.bind(null, _step * -1)}
        >
            <slot name="previous">&lt;</slot>
        </WidgetButton>

        <WidgetButton
            disabled={disabled || !is_year_in_range(_year, max)}
            {palette}
            on:click={on_year_select.bind(null, _step)}
        >
            <slot name="next">&gt;</slot>
        </WidgetButton>
    </Stack>
</WidgetContainer>
