<script lang="ts">
    import {Temporal} from "../../../vendor/js-temporal-polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";
    import type {IDayFormatOptions} from "../../../util/datetime/days";
    import type {IMonthFormatOptions} from "../../../util/datetime/months";
    import type {IYearFormatOptions} from "../../../util/datetime/years";
    import {defaultopt} from "../../../util/functional";
    import {DEFAULT_CALENDAR, DEFAULT_FORMAT_DATE, DEFAULT_LOCALE} from "../../../util/locale";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLTimeElement;

        calendar?: string;
        locale?: string;

        day?: IDayFormatOptions["day"];
        month?: IMonthFormatOptions["month"];
        weekday?: IDayFormatOptions["weekday"];
        year?: IYearFormatOptions["year"];

        timestamp: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let calendar: $$Props["calendar"] = undefined;
    export let locale: $$Props["locale"] = undefined;

    export let day: $$Props["day"] = undefined;
    export let month: $$Props["month"] = undefined;
    export let weekday: $$Props["weekday"] = undefined;
    export let year: $$Props["year"] = undefined;

    export let timestamp: $$Props["timestamp"];

    // TODO: Can you convert between calendars? If so, should always convert
    // to a Gregorian Calendar since `<time>` only supports that

    $: _date = Temporal.PlainDate.from(timestamp);
    $: _options = defaultopt({day, month, weekday, year}, DEFAULT_FORMAT_DATE);
</script>

<time
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="date-stamp {_class}"
    datetime={_date.withCalendar("iso8601").toString({calendarName: "never"})}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    {_date.toLocaleString(locale ?? DEFAULT_LOCALE, {
        calendar: calendar ?? DEFAULT_CALENDAR,
        day: _options.day,
        month: _options.month,
        weekday: _options.weekday,
        year: _options.year,
    })}
</time>
