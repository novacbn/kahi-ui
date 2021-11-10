<script lang="ts">
    import type {Temporal} from "@js-temporal/polyfill";
    import {createEventDispatcher} from "svelte";

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

    const dispatch = createEventDispatcher();

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;
        readonly?: boolean;

        calendar: string;
        locale: string;

        month: Intl.DateTimeFormatOptions["month"];

        disabled: boolean | readonly string[];
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
    export let readonly: $$Props["readonly"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let month: $$Props["month"] = "short";

    export let disabled: $$Props["disabled"] = false;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let timestamp: $$Props["timestamp"] = get_yearstamp(calendar);
    export let value: $$Props["value"] = [];

    export let palette: $$Props["palette"] = undefined;

    function on_month_click(month: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (readonly) return;

        if (has_month(value, month)) {
            value = multiple ? value.filter((entry) => !month.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, month.toString({calendarName: "always"})]
                : [month.toString({calendarName: "always"})];
        }

        dispatch("change");
    }

    $: _quaters = get_calendar_quaters(timestamp);
</script>

<WidgetContainer {...$$props} bind:element class="month-picker {_class}">
    {#each _quaters as _quater, _quater_index (_quater_index)}
        <WidgetSection>
            {#each _quater as _month (_month.toString())}
                <WidgetButton
                    variation={is_current_month(_month) ? "outline" : undefined}
                    palette={_month.month % (_month.monthsInYear / 4) === 1 ? undefined : palette}
                    active={has_month(value, _month)}
                    disabled={!is_month_in_range(_month, max, min, true) ||
                        (typeof disabled === "boolean" ? disabled : has_month(disabled, _month))}
                    on:click={on_month_click.bind(null, _month)}
                >
                    {_month.toLocaleString(locale, {month}).toLocaleUpperCase(locale)}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
