<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_decade_halves,
        get_yearstamp,
        has_year,
        is_current_year,
        is_year_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import PickerButton from "../picker/PickerButton.svelte";
    import PickerContainer from "../picker/PickerContainer.svelte";
    import PickerSection from "../picker/PickerSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        decade: string;
        value: readonly string[];

        palette?: PROPERTY_PALETTE;
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

    export let decade: $$Props["decade"] = get_yearstamp(calendar);
    export let value: $$Props["value"] = [];

    export let palette: $$Props["palette"] = undefined;

    function on_year_click(year: Temporal.PlainYearMonth, event: MouseEvent): void {
        if (has_year(value, year)) {
            value = multiple ? value.filter((entry) => !year.equals(entry)) : [];
        } else {
            value = multiple
                ? [...value, year.toString({calendarName: "always"})]
                : [year.toString({calendarName: "always"})];
        }
    }

    $: _decade = Temporal.PlainYearMonth.from(decade);
    $: _halfs = get_decade_halves(_decade.year, calendar);
</script>

<PickerContainer {...$$props} bind:element class="year-picker {_class}">
    {#each _halfs as half}
        <PickerSection>
            {#each half as year}
                <PickerButton
                    variation={is_current_year(year) ? "outline" : undefined}
                    palette={year.year % 10 === 0 || year.year % 10 === 9 ? undefined : palette}
                    active={has_year(value, year)}
                    disabled={!is_year_in_range(year, max, min, true)}
                    on:click={on_year_click.bind(null, year)}
                >
                    {year.toLocaleString(locale, {year: "numeric"}).toLocaleUpperCase(locale)}
                </PickerButton>
            {/each}
        </PickerSection>
    {/each}
</PickerContainer>
