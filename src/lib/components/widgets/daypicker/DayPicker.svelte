<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_calendar_weeks,
        get_monthstamp,
        has_day,
        is_current_day,
        is_day_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetHeader from "../widget/WidgetHeader.svelte";
    import WidgetSection from "../widget/WidgetSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;

        calendar: string;
        locale: string;

        day: Intl.DateTimeFormatOptions["day"];
        weekday: Intl.DateTimeFormatOptions["weekday"];

        max?: string;
        min?: string;

        timestamp: string;
        value: readonly string[];

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

    export let multiple: $$Props["multiple"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let day: $$Props["day"] = "2-digit";
    export let weekday: $$Props["weekday"] = "short";

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let timestamp: $$Props["timestamp"] = get_monthstamp(calendar);
    export let value: $$Props["value"] = [];

    export let palette: $$Props["palette"] = undefined;

    function on_day_click(day: Temporal.PlainDate, event: MouseEvent): void {
        if (has_day(value, day)) {
            value = multiple ? value.filter((entry) => !day.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, day.toString({calendarName: "always"})]
                : [day.toString({calendarName: "always"})];
        }
    }

    $: _weeks = get_calendar_weeks(timestamp);
</script>

<WidgetContainer {...$$props} bind:element class="day-picker {_class}">
    <WidgetSection>
        {#each _weeks[0] as _day}
            <WidgetHeader>
                {_day.toLocaleString(locale, {weekday}).toLocaleUpperCase(locale)}
            </WidgetHeader>
        {/each}
    </WidgetSection>

    {#each _weeks as _week}
        <WidgetSection>
            {#each _week as _day}
                <WidgetButton
                    variation={is_current_day(_day) ? "outline" : undefined}
                    palette={_day.dayOfWeek > 5 ? undefined : palette}
                    active={has_day(value, _day)}
                    disabled={!is_day_in_range(_day, max, min, true)}
                    on:click={on_day_click.bind(null, _day)}
                >
                    {_day.toLocaleString(locale, {day})}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
