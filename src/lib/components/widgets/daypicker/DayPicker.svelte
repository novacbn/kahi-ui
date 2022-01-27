<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_calendar_weeks,
        get_daystamp,
        get_monthstamp,
        has_day,
        is_day_in_range,
    } from "../../../util/datetime";
    import {DEFAULT_CALENDAR, DEFAULT_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
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

        calendar?: string;
        locale?: string;

        day?: Intl.DateTimeFormatOptions["day"];
        weekday?: Intl.DateTimeFormatOptions["weekday"];

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

    export let calendar: $$Props["calendar"] = undefined;
    export let locale: $$Props["locale"] = undefined;

    export let day: $$Props["day"] = undefined;
    export let weekday: $$Props["weekday"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: $$Props["highlight"] = undefined;
    export let timestamp: $$Props["timestamp"] = undefined;
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    function on_day_click(day: Temporal.PlainDate, event: MouseEvent): void {
        if (readonly) return;

        if (!once && has_day(_value, day)) {
            value = multiple ? _value.filter((entry) => !day.equals(entry)) : [];

            dispatch("change");
        } else {
            value = multiple
                ? [..._value, day.toString({calendarName: "always"})]
                : [day.toString({calendarName: "always"})];

            dispatch("change");
        }
    }

    const _daystamp = get_daystamp(calendar ?? DEFAULT_CALENDAR);
    const _monthstamp = get_monthstamp(calendar ?? DEFAULT_CALENDAR);

    $: _highlight = highlight ?? [_daystamp];
    $: _weeks = get_calendar_weeks(timestamp ?? _monthstamp);
    $: _value = value ?? [];
</script>

<StackContainer bind:element {...$$restProps} class="day-picker {_class}" spacing="small">
    <StackContainer orientation="horizontal" spacing="small" alignment_x="stretch">
        {#each _weeks[0] as _day (_day.dayOfWeek)}
            <Text is="strong" sizing="small" alignment_x="center">
                {_day
                    .toLocaleString(locale ?? DEFAULT_LOCALE, {weekday: weekday ?? "short"})
                    .toLocaleUpperCase(locale ?? DEFAULT_LOCALE)}
            </Text>
        {/each}
    </StackContainer>

    {#each _weeks as _week, _week_index (_week_index)}
        <StackContainer orientation="horizontal" spacing="small" alignment_x="stretch">
            {#each _week as _day (`${_day.month}${_day.day}`)}
                <Button
                    variation={has_day(_highlight, _day)
                        ? ["subtle", "outline"]
                        : ["subtle", "clear"]}
                    palette={_day.dayOfWeek > 5 ? undefined : palette}
                    active={has_day(_value, _day)}
                    disabled={!is_day_in_range(_day, max, min, true) ||
                        (disabled instanceof Array ? has_day(disabled, _day) : disabled)}
                    on:click={on_day_click.bind(null, _day)}
                >
                    {_day.toLocaleString(locale, {day: day ?? "2-digit"})}
                </Button>
            {/each}
        </StackContainer>
    {/each}
</StackContainer>
