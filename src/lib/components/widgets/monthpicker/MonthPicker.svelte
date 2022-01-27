<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {TOKENS_SPACING} from "../../../types/spacings";

    import {get_month_quaters} from "../../../util/datetime/calendars";
    import type {IMonthFormatOptions} from "../../../util/datetime/months";
    import {
        format_month,
        includes_month,
        is_month,
        is_month_in_range,
        now_month,
    } from "../../../util/datetime/months";
    import {now_year} from "../../../util/datetime/years";

    import Button from "../../interactables/button/Button.svelte";
    import GridContainer from "../../layouts/grid/GridContainer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";

    const dispatch = createEventDispatcher();

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        multiple?: boolean;
        once?: boolean;
        readonly?: boolean;

        locale?: string;

        month?: IMonthFormatOptions["month"];

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

    export let locale: $$Props["locale"] = undefined;

    export let month: $$Props["month"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: readonly string[] = [now_month()];
    export let timestamp: string = now_year();
    export let value: readonly string[] = [];

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_month_click(month: string, event: MouseEvent): void {
        if (readonly) return;

        if (!once && includes_month(month, value)) {
            value = multiple ? value.filter((entry) => !is_month(month, entry)) : [];
        } else value = multiple ? [...value, month] : [month];

        dispatch("change");
    }

    $: _quaters = get_month_quaters(timestamp);
</script>

<StackContainer
    bind:element
    {...$$restProps}
    class="month-picker {_class}"
    spacing={TOKENS_SPACING.small}
>
    {#each _quaters as _quater, _quater_index (_quater_index)}
        <GridContainer spacing="small" style="--points:{_quater.length};">
            {#each _quater as _month, _month_index (_month)}
                <Button
                    variation={includes_month(_month, highlight)
                        ? ["subtle", "outline"]
                        : ["subtle", "clear"]}
                    palette={_month_index === 0 ? undefined : palette}
                    active={includes_month(_month, value)}
                    disabled={!is_month_in_range(_month, min, max, true) ||
                        (disabled instanceof Array ? includes_month(_month, disabled) : disabled)}
                    {sizing}
                    on:click={on_month_click.bind(null, _month)}
                >
                    {format_month(_month, locale, {
                        month: month ?? "short",
                    })}
                </Button>
            {/each}
        </GridContainer>
    {/each}
</StackContainer>
