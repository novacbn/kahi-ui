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
        get_decade_halves,
        get_yearstamp,
        has_year,
        is_current_year,
        is_year_in_range,
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
        once?: boolean;
        readonly?: boolean;

        calendar: string;
        locale: string;

        year: Intl.DateTimeFormatOptions["year"];

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
    export let once: $$Props["once"] = false;
    export let readonly: $$Props["readonly"] = false;

    export let calendar: $$Props["calendar"] = BROWSER_CALENDAR;
    export let locale: $$Props["locale"] = BROWSER_LOCALE;

    export let year: $$Props["year"] = "numeric";

    export let disabled: $$Props["disabled"] = [];
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let timestamp: $$Props["timestamp"] = get_yearstamp(calendar);
    export let value: $$Props["value"] = [];

    export let palette: $$Props["palette"] = undefined;

    function on_year_click(year: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (readonly) return;

        if (!once && has_year(value, year)) {
            value = multiple ? value.filter((entry) => !year.equals(entry)) : [];

            dispatch("change");
        } else {
            value = multiple
                ? [...value, year.toString({calendarName: "always"})]
                : [year.toString({calendarName: "always"})];

            dispatch("change");
        }
    }

    $: _halfs = get_decade_halves(timestamp);
</script>

<WidgetContainer {...$$props} bind:element class="year-picker {_class}">
    {#each _halfs as _half, _half_index (_half_index)}
        <WidgetSection>
            {#each _half as _year (_year.year)}
                <WidgetButton
                    variation={is_current_year(_year) ? "outline" : undefined}
                    palette={_year.year % 10 === 0 || _year.year % 10 === 9 ? undefined : palette}
                    active={has_year(value, _year)}
                    disabled={!is_year_in_range(_year, max, min, true) ||
                        (typeof disabled === "boolean" ? disabled : has_year(disabled, _year))}
                    on:click={on_year_click.bind(null, _year)}
                >
                    {_year.toLocaleString(locale, {year}).toLocaleUpperCase(locale)}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
