<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";
    import {defaultopt} from "../../../util/functional";
    import {DEFAULT_CALENDAR, DEFAULT_FORMAT_DATE, DEFAULT_LOCALE} from "../../../util/locale";

    type $$Props = {
        element?: HTMLTimeElement;

        calendar: string;
        locale: string;

        day?: Intl.DateTimeFormatOptions["day"];
        month?: Intl.DateTimeFormatOptions["month"];
        year?: Intl.DateTimeFormatOptions["year"];

        timestamp: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let calendar: $$Props["calendar"] = DEFAULT_CALENDAR;
    export let locale: $$Props["locale"] = DEFAULT_LOCALE;

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let year: $$Props["year"] = undefined;

    export let timestamp: $$Props["timestamp"];

    // TODO: Can you convert between calendars? If so, should always convert
    // to a Gregorian Calendar since `<time>` only supports that

    $: _date = Temporal.PlainDate.from(timestamp);
    $: _options = defaultopt({day, month, year}, DEFAULT_FORMAT_DATE);
</script>

<time
    bind:this={element}
    {...map_global_attributes($$props)}
    class="date-stamp {_class}"
    datetime={_date.toString({calendarName: "never"})}
>
    {_date.toLocaleString(locale, {
        calendar,
        day: _options.day,
        month: _options.month,
        year: _options.year,
    })}
</time>
