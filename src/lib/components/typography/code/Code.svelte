<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement | HTMLPreElement;

        is?: "code" | "pre";

        palette?: PROPERTY_PALETTE;
        size?: PROPERTY_SIZING;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

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
