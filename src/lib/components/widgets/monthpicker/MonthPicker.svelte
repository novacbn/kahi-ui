<script lang="ts">
    import type {Temporal} from "../../../../vendor/js-temporal";
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_calendar_quaters,
        get_monthstamp,
        get_yearstamp,
        has_month,
        is_month_in_range,
    } from "../../../util/datetime";
    import {DEFAULT_CALENDAR, DEFAULT_LOCALE} from "../../../util/locale";

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
        once?: boolean;
        readonly?: boolean;

        calendar?: string;
        locale?: string;

        month?: Intl.DateTimeFormatOptions["month"];

        disabled?: boolean | readonly string[];
        max?: string;
        min?: string;

        highlight?: readonly string[];
        timestamp?: string;
        value?: readonly string[];

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

    export let multiple: $$Props["multiple"] = undefined;
    export let once: $$Props["once"] = undefined;
    export let readonly: $$Props["readonly"] = undefined;

    export let calendar: $$Props["calendar"] = undefined;
    export let locale: $$Props["locale"] = undefined;

    export let month: $$Props["month"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: $$Props["highlight"] = undefined;
    export let timestamp: $$Props["timestamp"] = undefined;
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    function on_month_click(month: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (readonly) return;

        if (!once && has_month(_value, month)) {
            value = multiple ? _value.filter((entry) => !month.equals(entry)) : [];

            dispatch("change");
        } else {
            value = multiple
                ? [..._value, month.toString({calendarName: "always"})]
                : [month.toString({calendarName: "always"})];

            dispatch("change");
        }
    }

    const _monthstamp = get_monthstamp(calendar ?? DEFAULT_CALENDAR);
    const _yearstamp = get_yearstamp(calendar ?? DEFAULT_CALENDAR);

    $: _highlight = highlight ?? [_monthstamp];
    $: _quaters = get_calendar_quaters(timestamp ?? _yearstamp);
    $: _value = value ?? [];
</script>

<WidgetContainer {...$$props} bind:element class="month-picker {_class}">
    {#each _quaters as _quater, _quater_index (_quater_index)}
        <WidgetSection>
            {#each _quater as _month (_month.month)}
                <WidgetButton
                    variation={has_month(_highlight, _month) ? "outline" : undefined}
                    palette={_month.month % (_month.monthsInYear / 4) === 1 ? undefined : palette}
                    active={has_month(_value, _month)}
                    disabled={!is_month_in_range(_month, max, min, true) ||
                        (disabled instanceof Array ? has_month(disabled, _month) : disabled)}
                    on:click={on_month_click.bind(null, _month)}
                >
                    {_month
                        .toLocaleString(locale ?? DEFAULT_LOCALE, {month: month ?? "short"})
                        .toLocaleUpperCase(locale ?? DEFAULT_LOCALE)}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
