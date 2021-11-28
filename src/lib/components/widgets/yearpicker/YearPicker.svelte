<script lang="ts">
    import type {Temporal} from "../../../vendor/js-temporal";
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
        is_year_in_range,
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

        year?: Intl.DateTimeFormatOptions["year"];

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

    export let year: $$Props["year"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: $$Props["highlight"] = undefined;
    export let timestamp: $$Props["timestamp"] = undefined;
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    function on_year_click(year: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (readonly) return;

        if (!once && has_year(_value, year)) {
            value = multiple ? _value.filter((entry) => !year.equals(entry)) : [];

            dispatch("change");
        } else {
            value = multiple
                ? [..._value, year.toString({calendarName: "always"})]
                : [year.toString({calendarName: "always"})];

            dispatch("change");
        }
    }

    // HACK: We could do `_highlight = [_timestamp]`, however that would tie `highlight`'s
    // default value to `timestamp`. Which might not be expected or wanted default behavior

    const _yearstamp = get_yearstamp(calendar ?? DEFAULT_CALENDAR);

    $: _highlight = highlight ?? [_yearstamp];
    $: _halfs = get_decade_halves(timestamp ?? _yearstamp);
    $: _value = value ?? [];
</script>

<WidgetContainer {...$$props} bind:element class="year-picker {_class}">
    {#each _halfs as _half, _half_index (_half_index)}
        <WidgetSection>
            {#each _half as _year (_year.year)}
                <WidgetButton
                    variation={has_year(_highlight, _year) ? "outline" : undefined}
                    palette={_year.year % 10 === 0 || _year.year % 10 === 9 ? undefined : palette}
                    active={has_year(_value, _year)}
                    disabled={!is_year_in_range(_year, max, min, true) ||
                        (disabled instanceof Array ? has_year(disabled, _year) : disabled)}
                    on:click={on_year_click.bind(null, _year)}
                >
                    {_year
                        .toLocaleString(locale ?? DEFAULT_LOCALE, {year: year ?? "numeric"})
                        .toLocaleUpperCase(locale ?? DEFAULT_LOCALE)}
                </WidgetButton>
            {/each}
        </WidgetSection>
    {/each}
</WidgetContainer>
