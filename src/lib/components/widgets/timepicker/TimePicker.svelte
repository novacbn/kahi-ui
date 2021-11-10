<script context="module" lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    const DEFAULT_TIME = new Temporal.PlainTime(0, 0, 0);
</script>

<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {get_clock_ranges, get_timestamp, is_time_in_range} from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetSection from "../widget/WidgetSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        readonly?: boolean;

        locale: string;

        hour?: Intl.DateTimeFormatOptions["hour"];
        hour_12?: Intl.DateTimeFormatOptions["hour12"];
        minute?: Intl.DateTimeFormatOptions["minute"];
        second?: Intl.DateTimeFormatOptions["second"];

        disabled: boolean;
        max?: string;
        min?: string;

        timestamp: string;
        value: string;

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

    export let readonly: $$Props["readonly"] = false;

    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let hour: $$Props["hour"] = "2-digit";
    export let hour_12: $$Props["hour_12"] = false;
    export let minute: $$Props["minute"] = "2-digit";
    export let second: $$Props["second"] = "2-digit";

    export let disabled: $$Props["disabled"] = false;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let timestamp: $$Props["timestamp"] = get_timestamp();
    export let value: $$Props["value"] = "";

    export let palette: $$Props["palette"] = undefined;

    function on_time_click(
        hour: Temporal.PlainTime | undefined,
        minute: Temporal.PlainTime | undefined,
        second: Temporal.PlainTime | undefined,
        event: MouseEvent
    ): void {
        if (readonly) return;

        // TODO: Incorporate `min` into default time?
        value = (_value || DEFAULT_TIME)
            .with({
                hour: hour ? hour.hour : undefined,
                minute: minute ? minute.minute : undefined,
                second: second ? second.second : undefined,
            })
            .toString();
    }

    $: [_hours, _minutes, _seconds] = get_clock_ranges();

    $: _timestamp = Temporal.PlainTime.from(timestamp);
    $: _value = value ? Temporal.PlainTime.from(value) : null;
</script>

<WidgetContainer {...$$props} bind:element class="time-picker {_class}" orientation="horizontal">
    <WidgetSection orientation="vertical">
        {#each _hours as _hour}
            <WidgetButton
                variation={_timestamp.hour === _hour.hour ? "outline" : undefined}
                palette={_hour.hour % 12 === 0 || _hour.hour === 23 ? undefined : palette}
                active={_value ? _value.hour === _hour.hour : false}
                disabled={disabled ||
                    !is_time_in_range(_value ? _value.with({hour: _hour.hour}) : _hour, max, min)}
                on:click={on_time_click.bind(null, _hour, undefined, undefined)}
            >
                {_hour.toLocaleString(locale, {hour, hour12: hour_12})}
            </WidgetButton>
        {/each}
    </WidgetSection>

    <WidgetSection orientation="vertical">
        {#each _minutes as _minute}
            <WidgetButton
                variation={_timestamp.minute === _minute.minute ? "outline" : undefined}
                palette={_minute.minute % 5 === 0 ? undefined : palette}
                active={_value ? _value.minute === _minute.minute : false}
                disabled={disabled ||
                    !is_time_in_range(
                        _value ? _value.with({minute: _minute.minute}) : _minute,
                        max,
                        min
                    )}
                on:click={on_time_click.bind(null, undefined, _minute, undefined)}
            >
                {_minute.toLocaleString(locale, {minute})}
            </WidgetButton>
        {/each}
    </WidgetSection>

    <WidgetSection orientation="vertical">
        {#each _seconds as _second}
            <WidgetButton
                variation={_timestamp.second === _second.second ? "outline" : undefined}
                palette={_second.second % 5 === 0 ? undefined : palette}
                active={_value ? _value.second === _second.second : false}
                disabled={disabled ||
                    !is_time_in_range(
                        _value ? _value.with({second: _second.second}) : _second,
                        max,
                        min
                    )}
                on:click={on_time_click.bind(null, undefined, undefined, _second)}
            >
                {_second.toLocaleString(locale, {second})}
            </WidgetButton>
        {/each}
    </WidgetSection>
</WidgetContainer>
