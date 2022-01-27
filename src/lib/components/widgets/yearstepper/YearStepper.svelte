<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IYearFormatOptions} from "../../../util/datetime/years";
    import {
        add_years,
        clamp_year,
        now_year,
        is_year_in_range,
        format_year,
    } from "../../../util/datetime/years";

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

        year?: IYearFormatOptions["year"];

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

    export let locale: $$Props["locale"] = undefined;

    export let year: $$Props["year"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let step: $$Props["step"] = undefined;

    export let value = now_year();

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_year_select(difference: number, event: MouseEvent): void {
        if (readonly) return;

        value = add_years(value, difference);
        value = clamp_year(value, min, max);

        dispatch("change");
    }

    $: _step = Math.abs((typeof step === "string" ? parseInt(step) : step) ?? 1);
</script>

<StackContainer
    {...$$restProps}
    bind:element
    class="year-stepper {_class}"
    orientation="horizontal"
    alignment_y="center"
>
    <Text is="strong" {sizing}>
        {format_year(value, locale, {
            year: year ?? "numeric",
        })}
    </Text>

    <Spacer is="span" />

    <Button
        disabled={disabled || !is_year_in_range(value, min)}
        variation={["subtle", "clear"]}
        {palette}
        {sizing}
        on:click={on_year_select.bind(null, _step * -1)}
    >
        <slot name="previous">&lt;</slot>
    </Button>

    <Button
        disabled={disabled || !is_year_in_range(value, undefined, max)}
        variation={["subtle", "clear"]}
        {palette}
        {sizing}
        on:click={on_year_select.bind(null, _step)}
    >
        <slot name="next">&gt;</slot>
    </Button>
</StackContainer>
