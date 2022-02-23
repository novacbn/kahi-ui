<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import {TOKENS_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {TOKENS_SPACING} from "../../../types/spacings";

    import {get_year_halves} from "../../../util/datetime/calendars";
    import type {IYearFormatOptions} from "../../../util/datetime/years";
    import {
        format_year,
        now_year,
        includes_year,
        is_year,
        is_year_in_range,
    } from "../../../util/datetime/years";

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

        year?: IYearFormatOptions["year"];

        disabled?: boolean | readonly string[];
        max?: string;
        min?: string;

        highlight?: readonly string[];
        timestamp?: string;
        value?: readonly string[];

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
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

    export let year: $$Props["year"] = undefined;

    export let disabled: $$Props["disabled"] = undefined;
    export let max: $$Props["max"] = undefined;
    export let min: $$Props["min"] = undefined;

    export let highlight: readonly string[] = [now_year()];
    export let timestamp: string = now_year();
    export let value: readonly string[] = [];

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function on_year_click(year: string, event: MouseEvent): void {
        if (readonly) return;

        if (!once && includes_year(year, value)) {
            value = multiple ? value.filter((entry) => !is_year(year, entry)) : [];
        } else value = multiple ? [...value, year] : [year];

        dispatch("change");
    }

    $: _halfves = get_year_halves(timestamp);

    $: _sizing = sizing ?? TOKENS_SIZING.small;
</script>

<StackContainer
    bind:element
    {...$$restProps}
    class="year-picker {_class}"
    spacing={TOKENS_SPACING.small}
    variation="relative"
    style="font-size:calc(var(--fonts-sizes-inline-{_sizing}) * 1em);"
>
    {#each _halfves as _half, _half_index (_half_index)}
        <GridContainer
            spacing={TOKENS_SPACING.small}
            style="--points:{_half.length};"
            variation="relative"
        >
            {#each _half as _year, _year_index (_year)}
                <Button
                    variation={includes_year(_year, highlight)
                        ? ["subtle", "outline"]
                        : ["subtle", "clear"]}
                    palette={_year_index === 0 ? undefined : palette}
                    active={includes_year(_year, value)}
                    disabled={!is_year_in_range(_year, min, max, true) ||
                        (disabled instanceof Array ? includes_year(_year, disabled) : disabled)}
                    sizing={_sizing}
                    on:click={on_year_click.bind(null, _year)}
                >
                    {format_year(_year, locale, {
                        year: year ?? "numeric",
                    })}
                </Button>
            {/each}
        </GridContainer>
    {/each}
</StackContainer>
