<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_hours_range,
        get_minutes_range,
        get_seconds_range,
        get_timestamp,
        has_timezone,
    } from "../../../util/datetime";
    import {BROWSER_LOCALE} from "../../../util/locale";

    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetSection from "../widget/WidgetSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        locale: string;

        hour_12: Intl.DateTimeFormatOptions["hour12"];

        disabled: readonly string[];
        max?: string;
        min?: string;
        readonly: boolean;

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

    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let hour_12: $$Props["hour_12"] = false;

    export let disabled: $$Props["disabled"] = [];
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;
    export let readonly: $$Props["readonly"] = false;

    export let timestamp: $$Props["timestamp"] = get_timestamp();
    export let value: $$Props["value"] = timestamp;

    export let palette: $$Props["palette"] = undefined;

    function on_time_click(
        hour?: number,
        minute?: number,
        second?: number,
        event: MouseEvent
    ): void {
        value = _timestamp
            .with({
                hour,
                minute,
                second,
            })
            .toString();
    }

    $: _hours = get_hours_range(hour_12 ?? false);
    $: _minutes = get_minutes_range();
    $: _seconds = get_seconds_range();

    $: _timestamp = has_timezone(timestamp)
        ? Temporal.ZonedDateTime.from(timestamp)
        : Temporal.PlainTime.from(timestamp);
    $: _value = has_timezone(value)
        ? Temporal.ZonedDateTime.from(value)
        : Temporal.PlainTime.from(value);
</script>

<WidgetContainer {...$$props} bind:element class="time-picker {_class}" orientation="horizontal">
    <WidgetSection orientation="vertical">
        {#each _hours as _hour}
            <WidgetButton
                variation={_timestamp.hour === _hour ? "outline" : undefined}
                palette={_hour % 12 === 0 || _hour === 23 ? undefined : palette}
                active={_value.hour === _hour}
                disabled={false}
                on:click={on_time_click.bind(null, _hour, undefined, undefined)}
            >
                {_hour}
            </WidgetButton>
        {/each}
    </WidgetSection>

    <WidgetSection orientation="vertical">
        {#each _minutes as _minute}
            <WidgetButton
                variation={_timestamp.minute === _minute ? "outline" : undefined}
                palette={_minute % 5 === 0 ? undefined : palette}
                active={_value.minute === _minute}
                disabled={false}
                on:click={on_time_click.bind(null, undefined, _minute, undefined)}
            >
                {_minute}
            </WidgetButton>
        {/each}
    </WidgetSection>

    <WidgetSection orientation="vertical">
        {#each _seconds as _second}
            <WidgetButton
                variation={_timestamp.second === _second ? "outline" : undefined}
                palette={_second % 5 === 0 ? undefined : palette}
                active={_value.second === _second}
                disabled={false}
                on:click={on_time_click.bind(null, undefined, undefined, _second)}
            >
                {_second}
            </WidgetButton>
        {/each}
    </WidgetSection>
</WidgetContainer>
