<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import {TOKENS_SIZING} from "../../../types/sizings";
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
    import FormLegend from "../../interactables/form/FormLegend.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";

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
        steps?: number | string;

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
    export let steps: $$Props["steps"] = undefined;

    export let value: string = now_day();

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_day_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        value = add_days(value, difference);
        value = clamp_day(value, min, max);

        dispatch("change");
    }

    $: _steps = Math.abs((typeof steps === "string" ? parseInt(steps) : steps) ?? 1);

    $: _sizing = sizing ?? TOKENS_SIZING.small;
</script>

<!--
    HACK: We want textual Components, e.g. `<Form.Legend>` to scale with the
    non-textual, e.g. `<Button>` in a way that keeps the size difference intact.

    We could do mapping to the next lower tier, e.g. `<YearStepper sizing="medium">` maps
    to `<Form.Legend sizing="small">`, but that wouldn't work in edge cases
    like `<YearStepper sizing="nano">`. And since the datetime Widgets are JS-only, we can
    ignore size considerations and just throw in a quick inline-style
-->

<StackContainer
    bind:element
    {...$$restProps}
    class="day-stepper {_class}"
    orientation="horizontal"
    alignment_y="center"
    style="font-size:calc(var(--fonts-sizes-inline-{_sizing}) * 1rem);"
>
    <FormLegend is="span">
        {format_day(value, locale, {
            day: day ?? "2-digit",
            month: month ?? "long",
            weekday: weekday ?? "long",
        })}
    </FormLegend>

    <Spacer is="span" />

    <Button
        disabled={disabled || !is_day_in_range(value, min)}
        variation={["subtle", "clear"]}
        sizing={_sizing}
        {palette}
        on:click={on_day_select.bind(null, _steps * -1)}
    >
        <slot name="previous">&lt;</slot>
    </Button>

    <Button
        disabled={disabled || !is_day_in_range(value, undefined, max)}
        variation={["subtle", "clear"]}
        sizing={_sizing}
        {palette}
        on:click={on_day_select.bind(null, _steps)}
    >
        <slot name="next">&gt;</slot>
    </Button>
</StackContainer>
