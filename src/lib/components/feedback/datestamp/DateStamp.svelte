<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    type $$Props = {
        element?: HTMLTimeElement;

        calendar: string;
        locale: string;

        day?: Intl.DateTimeFormatOptions["day"];
        month?: Intl.DateTimeFormatOptions["month"];
        year?: Intl.DateTimeFormatOptions["year"];

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

    export let value: $$Props["value"];

    $: _date = Temporal.PlainDate.from(value);
</script>

<time class="date-stamp {_class}" datetime={_date.toString({calendarName: "never"})}>
    {_date.toLocaleString(locale, {
        calendar,
        day,
        month,
        year,
    })}
</time>
