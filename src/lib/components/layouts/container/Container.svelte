<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {PROPERTY_VIEWPORT_BREAKPOINT} from "../../../types/viewports";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement | HTMLDivElement;

        is?: "div" | "main";

        viewport?: PROPERTY_VIEWPORT_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let is: $$Props["is"] = "div";

    export let viewport: $$Props["viewport"] = undefined;
</script>

{#if is === "main"}
    <main
        bind:this={element}
        {...map_global_attributes($$props)}
        class="container {_class}"
        {...map_data_attributes({viewport})}
    >
        <slot />
    </main>
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="container {_class}"
        {...map_data_attributes({viewport})}
    >
        <slot />
    </div>
{/if}
