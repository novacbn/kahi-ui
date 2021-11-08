<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_calendar_quaters,
        get_yearstamp,
        has_month,
        is_current_month,
        is_month_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import WidgetButton from "../widget/WidgetButton.svelte";
    import WidgetContainer from "../widget/WidgetContainer.svelte";
    import WidgetSection from "../widget/WidgetSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        year: string;
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

    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let year: $$Props["year"] = get_yearstamp(calendar);
    export let value: $$Props["value"] = [];

    export let palette: $$Props["palette"] = undefined;

    function on_month_click(month: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (has_month(value, month)) {
            value = multiple ? value.filter((entry) => !month.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, month.toString({calendarName: "always"})]
                : [month.toString({calendarName: "always"})];
        }
    }

    $: _quaters = get_calendar_quaters(year);
</script>

<WidgetContainer {...$$props} bind:element class="month-picker {_class}">
    {#each _quaters as quater}
        <WidgetSection>
            {#each quater as month}
                <WidgetButton
                    variation={is_current_month(month) ? "outline" : undefined}
                    palette={month.month % (month.monthsInYear / 4) === 1 ? undefined : palette}
                    active={has_month(value, month)}
                    disabled={!is_month_in_range(month, max, min, true)}
                    on:click={on_month_click.bind(null, month)}
                >
                    {month.toLocaleString(locale, {month: "short"}).toLocaleUpperCase(locale)}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
