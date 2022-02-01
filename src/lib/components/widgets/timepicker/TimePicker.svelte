<script lang="ts">
    import {createEventDispatcher, onMount, tick} from "svelte";

    import type {PROPERTY_CLOCK_PERIOD} from "../../../types/datetime";
    import {TOKENS_CLOCK_PERIOD} from "../../../types/datetime";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import {TOKENS_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {TOKENS_SPACING} from "../../../types/spacings";

    import {
        get_clock_hours,
        get_clock_minutes,
        get_clock_seconds,
        is_pm,
    } from "../../../util/datetime/clocks";
    import type {IHourFormatOptions} from "../../../util/datetime/hours";
    import {
        format_hour,
        includes_hour,
        is_hour,
        is_hour_in_range,
    } from "../../../util/datetime/hours";
    import type {IMinuteFormatOptions} from "../../../util/datetime/minutes";
    import {
        format_minute,
        includes_minute,
        is_minute,
        is_minute_in_range,
    } from "../../../util/datetime/minutes";
    import type {ISecondFormatOptions} from "../../../util/datetime/seconds";
    import {
        format_second,
        includes_second,
        is_second,
        is_second_in_range,
        now_second,
    } from "../../../util/datetime/seconds";
    import {scroll_into_container} from "../../../util/element";
    import {DEFAULT_HOUR_12} from "../../../util/locale";

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

        hour?: IHourFormatOptions["hour"];
        hour_12?: IHourFormatOptions["hour_12"];
        period?: PROPERTY_CLOCK_PERIOD;
        minute?: IMinuteFormatOptions["minute"];
        second?: ISecondFormatOptions["second"];

        disabled?: boolean | readonly string[];
        max?: string;
        min?: string;

        highlight?: readonly string[];
        value?: string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    const dispatch = createEventDispatcher();

    let hour_column: HTMLDivElement;
    let minute_column: HTMLDivElement;
    let second_column: HTMLDivElement;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let now: $$Props["now"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;
    export let scroll: $$Props["scroll"] = undefined;

    export let locale: $$Props["locale"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12 = DEFAULT_HOUR_12;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: readonly string[] = [now_second()];
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    // HACK: For UX (User Experience), it's a good idea here to match the period to the initial time
    export let period: PROPERTY_CLOCK_PERIOD =
        value && is_pm(value) ? TOKENS_CLOCK_PERIOD.pm : TOKENS_CLOCK_PERIOD.am;

    function scroll_column(container: HTMLElement): void {
        const element = container.querySelector<HTMLElement>(`[aria-pressed="true"]`);
        if (element) scroll_into_container(element, "center", "smooth", container);
    }

    function scroll_to_current(): void {
        scroll_column(hour_column);
        scroll_column(minute_column);
        scroll_column(second_column);
    }

    async function on_now_click(event: MouseEvent): Promise<void> {
        if (readonly) return;

        value = now_second();
        period = is_pm(value) ? TOKENS_CLOCK_PERIOD.pm : TOKENS_CLOCK_PERIOD.am;

        dispatch("now");
        dispatch("change");

        await tick();
        scroll_to_current();
    }

    function on_period_click(_period: PROPERTY_CLOCK_PERIOD, event: MouseEvent): void {
        period = _period;
    }

    function on_time_click(timestamp: string, event: MouseEvent): void {
        if (readonly) return;

        value = timestamp;
        dispatch("change");
    }

    onMount(async () => {
        if (scroll) {
            await tick();
            scroll_to_current();
        }
    });

    $: _timestamp = value ?? min ?? "00:00:00";

    $: _hours = get_clock_hours(_timestamp, hour_12, period);
    $: _minutes = get_clock_minutes(_timestamp);
    $: _seconds = get_clock_seconds(_timestamp);

    $: _sizing = sizing ?? TOKENS_SIZING.medium;
</script>

<StackContainer
    {...$$restProps}
    bind:element
    class="time-picker {_class}"
    spacing={TOKENS_SPACING.small}
>
    <StackContainer orientation="horizontal" alignment_x="stretch">
        <Scrollable bind:element={hour_column} height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _hours as _hour, _hour_index (_hour)}
                    <Button
                        variation={includes_hour(_hour, highlight)
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_hour_index % 11 === 0 ? undefined : palette}
                        active={value ? is_hour(_hour, value) : false}
                        disabled={!is_hour_in_range(_hour, min, max, true) ||
                            (disabled instanceof Array ? includes_hour(_hour, disabled) : disabled)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _hour)}
                    >
                        {format_hour(_hour, locale, {
                            hour: hour ?? "2-digit",
                            hour_12,
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>

        <Scrollable bind:element={minute_column} height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _minutes as _minute, _minute_index (_minute)}
                    <Button
                        variation={includes_minute(_minute, highlight)
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_minute_index % 5 === 0 ? undefined : palette}
                        active={value ? is_minute(_minute, value) : false}
                        disabled={!is_minute_in_range(_minute, min, max, true) ||
                            (disabled instanceof Array
                                ? includes_minute(_minute, disabled)
                                : disabled)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _minute)}
                    >
                        {format_minute(_minute, locale, {
                            minute: minute ?? "2-digit",
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>

        <Scrollable bind:element={second_column} height={_sizing}>
            <StackContainer spacing={TOKENS_SPACING.small}>
                {#each _seconds as _second, _second_index (_second)}
                    <Button
                        variation={includes_second(_second, highlight)
                            ? ["subtle", "outline"]
                            : ["subtle", "clear"]}
                        palette={_second_index % 5 === 0 ? undefined : palette}
                        active={value ? is_second(_second, value) : false}
                        disabled={!is_second_in_range(_second, min, max, true) ||
                            (disabled instanceof Array
                                ? includes_second(_second, disabled)
                                : disabled)}
                        sizing={_sizing}
                        on:click={on_time_click.bind(null, _second)}
                    >
                        {format_second(_second, locale, {
                            second: second ?? "2-digit",
                        })}
                    </Button>
                {/each}
            </StackContainer>
        </Scrollable>
    </StackContainer>

    {#if hour_12 || now}
        <!-- TODO: Figure out localization strategy for below text strings -->
        <StackContainer
            orientation="horizontal"
            alignment_x="stretch"
            spacing={TOKENS_SPACING.small}
        >
            {#if now}
                <Button
                    variation={["subtle", "clear"]}
                    disabled={disabled === true}
                    sizing={_sizing}
                    {palette}
                    on:click={on_now_click}
                >
                    NOW
                </Button>
            {/if}

            {#if hour_12}
                <Button
                    active={period === TOKENS_CLOCK_PERIOD.am}
                    disabled={disabled === true}
                    variation={["subtle", "clear"]}
                    sizing={_sizing}
                    {palette}
                    on:click={on_period_click.bind(null, TOKENS_CLOCK_PERIOD.am)}
                >
                    AM
                </Button>

                <Button
                    active={period === TOKENS_CLOCK_PERIOD.pm}
                    disabled={disabled === true}
                    variation={["subtle", "clear"]}
                    sizing={_sizing}
                    {palette}
                    on:click={on_period_click.bind(null, TOKENS_CLOCK_PERIOD.pm)}
                >
                    PM
                </Button>
            {/if}
        </StackContainer>
    {/if}
</StackContainer>
