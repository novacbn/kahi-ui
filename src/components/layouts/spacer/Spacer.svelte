<script lang="ts">
    import type {DESIGN_ORIENTATION_ARGUMENT} from "../../../lib/types/orientations";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let orientation: DESIGN_ORIENTATION_ARGUMENT | undefined = undefined;
    export let variation: "inline" | undefined = undefined;

    export let spacing: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let spacing_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let spacing_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

</script>

{#if variation === "inline"}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        class="spacer {_class}"
        {...map_data_attributes({
            orientation,
            spacing,
            "spacing-x": spacing_x,
            "spacing-y": spacing_y,
        })}
    >
        <slot />
    </span>
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="spacer {_class}"
        {...map_data_attributes({
            orientation,
            spacing,
            "spacing-x": spacing_x,
            "spacing-y": spacing_y,
        })}
    >
        <slot />
    </div>
{/if}
