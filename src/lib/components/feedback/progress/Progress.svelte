<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        max?: number | string;
        value?: number | string;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let style: $$Props["style"] = undefined;

    export let max: $$Props["max"] = undefined;
    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    role="progressbar"
    {...map_aria_attributes({valuemax: max ?? 1, valuemin: 0, valuenow: value})}
    {...map_data_attributes({palette})}
    style="{style ? `${style};` : ''}{value ? `--value:${value};` : ''}"
>
    <slot />
</div>
