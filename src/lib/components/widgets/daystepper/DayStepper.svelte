<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        IDayFormatOptions,
        clamp_day,
        is_day_in_range,
        now_day,
        format_day,
        add_days,
    } from "../../../util/datetime/days";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";
    import Text from "../../typography/text/Text.svelte";

    const dispatch = createEventDispatcher();

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        disabled?: boolean;
        readonly?: boolean;

        locale?: string;

        day?: IDayFormatOptions["day"];
        month?: IDayFormatOptions["month"];
        weekday?: IDayFormatOptions["weekday"];

        max?: string;
        min?: string;
        step?: number | string;

        value?: string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
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

    export let locale: $$Props["locale"] = undefined;

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let weekday: $$Props["weekday"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = undefined;

    export let value: string = now_day();

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_day_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        value = add_days(value, difference);
        value = clamp_day(value, min, max);

        dispatch("change");
    }

    $: _step = Math.abs((typeof step === "string" ? parseInt(step) : step) ?? 1);
</script>

<StackContainer
    bind:element
    {...$$restProps}
    class="day-stepper {_class}"
    orientation="horizontal"
    alignment_y="center"
>
    <Text is="strong" {sizing}>
        {format_day(value, locale, {
            day: day ?? "2-digit",
            month: month ?? "long",
            weekday: weekday ?? "long",
        })}
    </Text>

    <Spacer is="span" />

    <Button
        disabled={disabled || !is_day_in_range(value, min)}
        variation={["subtle", "clear"]}
        {palette}
        {sizing}
        on:click={on_day_select.bind(null, _step * -1)}
    >
        <slot name="previous">&lt;</slot>
    </Button>

    <Button
        disabled={disabled || !is_day_in_range(value, undefined, max)}
        variation={["subtle", "clear"]}
        {palette}
        {sizing}
        on:click={on_day_select.bind(null, _step)}
    >
        <slot name="next">&gt;</slot>
    </Button>
</StackContainer>
