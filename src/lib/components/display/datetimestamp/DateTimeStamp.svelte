<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";
    import {has_timezone} from "../../../util/datetime";
    import {defaultopt} from "../../../util/functional";
    import {DEFAULT_CALENDAR, DEFAULT_FORMAT_DATETIME, DEFAULT_LOCALE} from "../../../util/locale";

    type $$Props = {
        element?: HTMLTimeElement;

        calendar: string;
        locale: string;

        day?: Intl.DateTimeFormatOptions["day"];
        month?: Intl.DateTimeFormatOptions["month"];
        year?: Intl.DateTimeFormatOptions["year"];

        hour?: Intl.DateTimeFormatOptions["hour"];
        hour_12?: Intl.DateTimeFormatOptions["hour12"];
        minute?: Intl.DateTimeFormatOptions["minute"];
        second?: Intl.DateTimeFormatOptions["second"];

        timestamp: string;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let calendar: $$Props["calendar"] = DEFAULT_CALENDAR;
    export let locale: $$Props["locale"] = DEFAULT_LOCALE;

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let year: $$Props["year"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12: $$Props["hour_12"] = undefined;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let timestamp: $$Props["timestamp"];

    // TODO: Can you convert between calendars? If so, should always convert
    // to a Gregorian Calendar since `<time>` only supports that

    $: _datetime = has_timezone(timestamp)
        ? Temporal.ZonedDateTime.from(timestamp)
        : Temporal.PlainDateTime.from(timestamp);
    $: _options = defaultopt(
        {day, month, year, hour, hour_12, minute, second},
        DEFAULT_FORMAT_DATETIME
    );
</script>

<time
    bind:this={element}
    {...map_global_attributes($$props)}
    class="date-time-stamp {_class}"
    datetime={_datetime.toString({calendarName: "never"})}
>
    {_datetime.toLocaleString(locale, {
        calendar,
        day: _options.day,
        month: _options.month,
        year: _options.year,
        hour: _options.hour,
        hour12: _options.hour_12,
        minute: _options.minute,
        second: _options.second,
    })}
</time>
