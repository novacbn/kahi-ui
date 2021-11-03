<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement | HTMLPreElement;

        is?: "code" | "pre";

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let is: $$Props["is"] = "code";

    export let palette: $$Props["palette"] = undefined;
</script>

{#if is === "pre"}
    <pre
        bind:this={element}
        {...map_global_attributes($$props)}
        class="code {_class}"
        {...map_data_attributes({
            palette,
        })}>
        <code >
            <slot />
        </code>
    </pre>
{:else}
    <code
        bind:this={element}
        {...map_global_attributes($$props)}
        class="code {_class}"
        {...map_data_attributes({palette})}
    >
        <slot />
    </code>
{/if}
