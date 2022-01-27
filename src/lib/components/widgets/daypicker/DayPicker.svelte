<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {TOKENS_SPACING} from "../../../types/spacings";

    import {get_week_days} from "../../../util/datetime/calendars";
    import type {IDayFormatOptions} from "../../../util/datetime/days";
    import {
        format_day,
        includes_day,
        is_day,
        is_day_in_range,
        now_day,
    } from "../../../util/datetime/days";
    import {now_month} from "../../../util/datetime/months";

    import Button from "../../interactables/button/Button.svelte";
    import GridContainer from "../../layouts/grid/GridContainer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";
    import Text from "../../typography/text/Text.svelte";

    const dispatch = createEventDispatcher();

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;
        once?: boolean;
        readonly?: boolean;

        locale?: string;

        day?: IDayFormatOptions["day"];
        weekday?: IDayFormatOptions["weekday"];

        disabled?: boolean | readonly string[];
        max?: string;
        min?: string;

        highlight?: readonly string[];
        timestamp?: string;
        value?: readonly string[];

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let multiple: $$Props["multiple"] = undefined;
    export let once: $$Props["once"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let locale: $$Props["locale"] = undefined;

    export let day: $$Props["day"] = undefined;
    export let weekday: $$Props["weekday"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: readonly string[] = [now_day()];
    export let timestamp: string = now_month();
    export let value: readonly string[] = [];

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_day_click(day: string, event: MouseEvent): void {
        if (readonly) return;

        if (!once && includes_day(day, value)) {
            value = multiple ? value.filter((entry) => !is_day(day, entry)) : [];
        } else value = multiple ? [...value, day] : [day];

        dispatch("change");
    }

    $: _weeks = get_week_days(timestamp);
</script>

<StackContainer
    bind:element
    {...$$restProps}
    class="day-picker {_class}"
    spacing={TOKENS_SPACING.small}
>
    <GridContainer spacing={TOKENS_SPACING.small} style="--points:{_weeks[0].length};">
        {#each _weeks[0] as _day (_day)}
            <Text is="strong" alignment_x="center" {sizing}>
                {format_day(_day, locale, {
                    weekday: weekday ?? "short",
                })}
            </Text>
        {/each}
    </GridContainer>

    {#each _weeks as _week, _week_index (_week_index)}
        <GridContainer spacing={TOKENS_SPACING.small} style="--points:{_week.length};">
            {#each _week as _day, _day_index (_day)}
                <Button
                    variation={includes_day(_day, highlight)
                        ? ["subtle", "outline"]
                        : ["subtle", "clear"]}
                    palette={_day_index === 0 || _day_index === _week.length - 1
                        ? undefined
                        : palette}
                    active={includes_day(_day, value)}
                    disabled={!is_day_in_range(_day, min, max, true) ||
                        (disabled instanceof Array ? includes_day(_day, disabled) : disabled)}
                    {sizing}
                    on:click={on_day_click.bind(null, _day)}
                >
                    {format_day(_day, locale, {
                        day: day ?? "2-digit",
                    })}
                </Button>
            {/each}
        </GridContainer>
    {/each}
</StackContainer>
