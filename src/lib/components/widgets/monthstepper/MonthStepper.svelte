<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {clamp_month, get_monthstamp, is_month_in_range} from "../../../util/datetime";
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

        calendar?: string;
        locale?: string;

        month?: Intl.DateTimeFormatOptions["month"];
        year?: Intl.DateTimeFormatOptions["year"];

        max?: string;
        min?: string;
        step?: number | string;

        value?: string;
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

    export let disabled: $$Props["disabled"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let calendar: $$Props["calendar"] = undefined;
    export let locale: $$Props["locale"] = undefined;

    export let month: $$Props["month"] = undefined;
    export let year: $$Props["year"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = undefined;

    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    function on_month_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        // HACK: Switch to only using `Temporal.PlainYearMonth.add` whenever bug for chained-subtractions is released
        // https://github.com/js-temporal/temporal-polyfill/issues/44
        // value = _month.add({months: difference}).toString({calendarName: "always"});

        // HACK: `Temporal.PlainDate` doesn't have the same "locking" issue as `Temporal.PlainYearMonth`
        value = clamp_month(
            _month.toPlainDate({day: 1}).add({months: difference}),
            min,
            max
        ).toString({calendarName: "always"});

        dispatch("change");
    }

    const _monthstamp = get_monthstamp(calendar ?? DEFAULT_CALENDAR);

    $: _month = Temporal.PlainYearMonth.from(value ?? _monthstamp);
    $: _step = step ? (typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step)) : 1;
</script>

<WidgetContainer {...$$props} bind:element class="month-stepper {_class}">
    <Stack orientation="horizontal" alignment_y="center">
        <WidgetHeader>
            {_month.toLocaleString(locale ?? DEFAULT_LOCALE, {
                month: month ?? "long",
                year: year ?? "numeric",
            })}
        </WidgetHeader>

        <Spacer is="span" />

        <WidgetButton
            disabled={disabled || !is_month_in_range(_month, undefined, min)}
            {palette}
            on:click={on_month_select.bind(null, _step * -1)}
        >
            <slot name="previous">&lt;</slot>
        </WidgetButton>

        <WidgetButton
            disabled={disabled || !is_month_in_range(_month, max)}
            {palette}
            on:click={on_month_select.bind(null, _step)}
        >
            <slot name="next">&gt;</slot>
        </WidgetButton>
    </Stack>
</WidgetContainer>
