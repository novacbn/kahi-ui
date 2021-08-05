<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {IMarginProperties} from "../../../lib/types/spacings";
    import type {
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
        DESIGN_TEXT_VARIATION_ARGUMENT,
    } from "../../../lib/types/text";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLHeadingElement;

        is?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

        align?: DESIGN_TEXT_ALIGNMENT_ARGUMENT;
        transform?: DESIGN_TEXT_TRANSFORM_ARGUMENT;

        palette?: DESIGN_PALETTE_ARGUMENT;
        variation?: DESIGN_TEXT_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let is: $$Props["is"] = "h1";

    export let align: $$Props["align"] = undefined;
    export let transform: $$Props["transform"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

{#if is === "h6"}
    <h6
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h6>
{:else if is === "h5"}
    <h5
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h5>
{:else if is === "h4"}
    <h4
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h4>
{:else if is === "h3"}
    <h3
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h3>
{:else if is === "h2"}
    <h2
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h2>
{:else}
    <h1
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, transform, variation})}
    >
        <slot />
    </h1>
{/if}
