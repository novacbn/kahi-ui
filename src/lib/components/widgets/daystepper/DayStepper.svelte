<script lang="ts">
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {clamp_day, get_daystamp, is_day_in_range} from "../../../util/datetime";
    import {DEFAULT_CALENDAR, DEFAULT_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";
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

        day?: Intl.DateTimeFormatOptions["day"];
        month?: Intl.DateTimeFormatOptions["month"];
        weekday?: Intl.DateTimeFormatOptions["weekday"];

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

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let weekday: $$Props["weekday"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = undefined;

    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    function on_day_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        value = clamp_day(_day.add({days: difference}), min, max).toString({
            calendarName: "always",
        });

        dispatch("change");
    }

    const _daystamp = get_daystamp(calendar ?? DEFAULT_CALENDAR);

    $: _day = Temporal.PlainDate.from(value ?? _daystamp);
    $: _step = step ? (typeof step === "string" ? Math.abs(parseInt(step)) : Math.abs(step)) : 1;
</script>

<StackContainer
    bind:element
    {...$$restProps}
    class="day-stepper {_class}"
    orientation="horizontal"
    alignment_y="center"
>
    <WidgetHeader>
        {_day.toLocaleString(locale ?? DEFAULT_LOCALE, {
            day: day ?? "2-digit",
            month: month ?? "long",
            weekday: weekday ?? "long",
        })}
    </WidgetHeader>

    <Spacer is="span" />

    <Button
        disabled={disabled || !is_day_in_range(_day, undefined, min)}
        variation={["subtle", "clear"]}
        {palette}
        on:click={on_day_select.bind(null, _step * -1)}
    >
        <slot name="previous">&lt;</slot>
    </Button>

    <Button
        disabled={disabled || !is_day_in_range(_day, max)}
        variation={["subtle", "clear"]}
        {palette}
        on:click={on_day_select.bind(null, _step)}
    >
        <slot name="next">&gt;</slot>
    </Button>
</StackContainer>
