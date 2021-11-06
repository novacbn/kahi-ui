<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {
        get_calendar_weeks,
        get_monthstamp,
        has_day,
        is_current_day,
        is_day_in_range,
    } from "../../../util/datetime";
    import {BROWSER_CALENDAR, BROWSER_LOCALE} from "../../../util/locale";

    import PickerButton from "../picker/PickerButton.svelte";
    import PickerContainer from "../picker/PickerContainer.svelte";
    import PickerHeader from "../picker/PickerHeader.svelte";
    import PickerSection from "../picker/PickerSection.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;

        calendar: string;
        locale: string;

        max?: string;
        min?: string;

        month: string;
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

    export let month: $$Props["month"] = get_monthstamp(calendar);
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

    $: _month = Temporal.PlainDate.from(month);
    $: _weeks = get_calendar_weeks(_month.year, _month.month, calendar);
</script>

<PickerContainer {...$$props} bind:element class="day-picker {_class}">
    <PickerSection>
        {#each _weeks[0] as day}
            <PickerHeader>
                {day
                    .toLocaleString(BROWSER_LOCALE, {weekday: "short"})
                    .toLocaleUpperCase(BROWSER_LOCALE)}
            </PickerHeader>
        {/each}
    </PickerSection>

    {#each _weeks as week}
        <PickerSection>
            {#each week as day}
                <PickerButton
                    variation={is_current_day(day) ? "outline" : undefined}
                    palette={day.dayOfWeek > 5 ? undefined : palette}
                    active={has_day(value, day)}
                    disabled={!is_day_in_range(day, max, min, true)}
                    on:click={on_day_click.bind(null, day)}
                >
                    {day.day.toString().padStart(2, "0")}
                </PickerButton>
            {/each}
        </PickerSection>
    {/each}
</PickerContainer>
