<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";
    import type {
        DESIGN_HEADING_VARIATION_ARGUMENT,
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
    } from "../../../lib/types/text";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let margin: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let align: DESIGN_TEXT_ALIGNMENT_ARGUMENT | undefined = undefined;
    export let is: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1";
    export let transform: DESIGN_TEXT_TRANSFORM_ARGUMENT | undefined = undefined;
    export let variation: DESIGN_HEADING_VARIATION_ARGUMENT | undefined = undefined;

</script>

{#if is === "h6"}
    <h6
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h6>
{:else if is === "h5"}
    <h5
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h5>
{:else if is === "h4"}
    <h4
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h4>
{:else if is === "h3"}
    <h3
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h3>
{:else if is === "h2"}
    <h2
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h2>
{:else}
    <h1
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, transform, variation})}
    >
        <slot />
    </h1>
{/if}
