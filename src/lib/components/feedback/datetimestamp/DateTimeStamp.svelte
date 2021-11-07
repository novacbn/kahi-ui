<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {has_timezone} from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

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

        value: string;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let year: $$Props["year"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12: $$Props["hour_12"] = undefined;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let value: $$Props["value"];

    $: _datetime = has_timezone(value)
        ? Temporal.ZonedDateTime.from(value)
        : Temporal.PlainDateTime.from(value);
</script>

<time class="date-time-stamp {_class}" datetime={_datetime.toString({calendarName: "never"})}>
    {_datetime.toLocaleString(locale, {
        calendar,
        day,
        month,
        year,
        hour,
        hour12: hour_12,
        minute,
        second,
    })}
</time>
