<script lang="ts">
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {createEventDispatcher, onMount, tick} from "svelte";

    import type {PROPERTY_CLOCK_PERIOD} from "../../../types/datetime";
    import {TOKENS_CLOCK_PERIOD} from "../../../types/datetime";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import {TOKENS_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {TOKENS_SPACING} from "../../../types/spacings";

    import {get_clock_ranges, get_timestamp, is_time_in_range} from "../../../util/datetime";
    import {scroll_into_container} from "../../../util/element";
    import {DEFAULT_HOUR_12, DEFAULT_LOCALE} from "../../../util/locale";

    import Button from "../../interactables/button/Button.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";
    import Scrollable from "../../layouts/scrollable/Scrollable.svelte";

    type $$Events = {
        change: CustomEvent<void>;

        now: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        now?: boolean;
        readonly?: boolean;
        scroll?: boolean;

        locale?: string;

        hour?: Intl.DateTimeFormatOptions["hour"];
        hour_12?: Intl.DateTimeFormatOptions["hour12"];
        period: PROPERTY_CLOCK_PERIOD;
        minute?: Intl.DateTimeFormatOptions["minute"];
        second?: Intl.DateTimeFormatOptions["second"];

        disabled?: boolean;
        max?: string;
        min?: string;

        highlight?: string;
        value?: string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    const dispatch = createEventDispatcher();

    let container_element: HTMLDivElement;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let now: $$Props["now"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;
    export let scroll: $$Props["scroll"] = undefined;

    export let locale: $$Props["locale"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12: $$Props["hour_12"] = undefined;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: $$Props["highlight"] = undefined;
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    // HACK: For UX (User Experience), it's a good idea here to match the period to the initial time
    export let period: $$Props["period"] =
        value && Temporal.PlainTime.from(value).hour > 12
            ? TOKENS_CLOCK_PERIOD.pm
            : TOKENS_CLOCK_PERIOD.am;

    function scroll_to_current(): void {
        const elements = container_element.querySelectorAll<HTMLElement>(
            `button[aria-pressed="true"]`
        );

        for (const element of elements) scroll_into_container(element, "center", "smooth");
    }

    async function on_now_click(event: MouseEvent): Promise<void> {
        if (readonly) return;

        const current = Temporal.Now.plainTimeISO();

        value = current.toString();
        period = current.hour > 12 ? TOKENS_CLOCK_PERIOD.pm : TOKENS_CLOCK_PERIOD.am;

        dispatch("now");
        dispatch("change");

        await tick();
        scroll_to_current();
    }

    function on_period_click(_period: PROPERTY_CLOCK_PERIOD, event: MouseEvent): void {
        period = _period;
    }

    function on_time_click(timestamp: Temporal.PlainTime, event: MouseEvent): void {
        if (readonly) return;

        value = timestamp.toString();

        dispatch("change");
    }

    onMount(() => {
        if (scroll) scroll_to_current();
    });

    const _timestamp = get_timestamp();

    $: _hour_12 = hour_12 ?? DEFAULT_HOUR_12;

    $: [_hours, _minutes, _seconds] = get_clock_ranges(value || min, _hour_12, period);

    $: _highlight = Temporal.PlainTime.from(highlight ?? _timestamp);
    $: _value = value ? Temporal.PlainTime.from(value) : null;

    $: _sizing = sizing ?? TOKENS_SIZING.medium;
</script>

<StackContainer
    {...$$restProps}
    bind:element
    class="time-picker {_class}"
    spacing={TOKENS_SPACING.small}
>
    <StackContainer bind:element={container_element} orientation="horizontal" alignment_x="stretch">
        <Scrollable height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _hours as _hour (_hour.hour)}
                    <Button
                        variation={_highlight.hour === _hour.hour
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_hour.hour % 12 === 0 || _hour.hour === 23 ? undefined : palette}
                        active={_value ? _value.hour === _hour.hour : false}
                        disabled={disabled || !is_time_in_range(_hour, max, min, true)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _hour)}
                    >
                        {_hour.toLocaleString(locale ?? DEFAULT_LOCALE, {
                            hour: hour ?? "2-digit",
                            hour12: _hour_12,
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>

        <Scrollable height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _minutes as _minute (_minute.minute)}
                    <Button
                        variation={_highlight.hour === _minute.hour &&
                        _highlight.minute === _minute.minute
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_minute.minute % 5 === 0 ? undefined : palette}
                        active={_value
                            ? _value.hour === _minute.hour && _value.minute === _minute.minute
                            : false}
                        disabled={disabled || !is_time_in_range(_minute, max, min, true)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _minute)}
                    >
                        {_minute.toLocaleString(locale ?? DEFAULT_LOCALE, {
                            minute: minute ?? "2-digit",
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>

        <Scrollable height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _seconds as _second (_second.second)}
                    <Button
                        variation={_highlight.hour === _second.hour &&
                        _highlight.minute === _second.minute &&
                        _highlight.second === _second.second
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_second.second % 5 === 0 ? undefined : palette}
                        active={_value
                            ? _value.hour === _second.hour &&
                              _value.minute === _second.minute &&
                              _value.second === _second.second
                            : false}
                        disabled={disabled || !is_time_in_range(_second, max, min, true)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _second)}
                    >
                        {_second.toLocaleString(locale ?? DEFAULT_LOCALE, {
                            second: second ?? "2-digit",
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>
    </StackContainer>

    {#if _hour_12 || now}
        <!-- TODO: Figure out localization strategy for below text strings -->
        <StackContainer
            orientation="horizontal"
            alignment_x="stretch"
            spacing={TOKENS_SPACING.small}
        >
            {#if now}
                <Button
                    variation={["subtle", "clear"]}
                    {disabled}
                    {palette}
                    sizing={_sizing}
                    on:click={on_now_click}
                >
                    NOW
                </Button>
            {/if}

            {#if _hour_12}
                <Button
                    active={period === TOKENS_CLOCK_PERIOD.am}
                    variation={["subtle", "clear"]}
                    {disabled}
                    {palette}
                    sizing={_sizing}
                    on:click={on_period_click.bind(null, TOKENS_CLOCK_PERIOD.am)}
                >
                    AM
                </Button>

                <Button
                    active={period === TOKENS_CLOCK_PERIOD.pm}
                    variation={["subtle", "clear"]}
                    {disabled}
                    {palette}
                    sizing={_sizing}
                    on:click={on_period_click.bind(null, TOKENS_CLOCK_PERIOD.pm)}
                >
                    PM
                </Button>
            {/if}
        </StackContainer>
    {/if}
</StackContainer>
