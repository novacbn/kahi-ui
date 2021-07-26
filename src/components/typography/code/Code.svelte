<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLElement | HTMLPreElement;

        is?: "code" | "pre";

        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let is: $$Props["is"] = "code";

    export let palette: $$Props["palette"] = undefined;
    export let size: $$Props["size"] = undefined;
</script>

{#if is === "pre"}
    <pre
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({
            palette,
            size,
        })}>
        <code>
            <slot />
        </code>
    </pre>
{:else}
    <code
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, size})}
    >
        <slot />
    </code>
{/if}
