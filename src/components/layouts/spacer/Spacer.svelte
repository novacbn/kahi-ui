<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_ORIENTATION_ARGUMENT} from "../../../lib/types/orientations";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLDivElement | HTMLSpanElement;

        orientation?: DESIGN_ORIENTATION_ARGUMENT;
        variation?: "inline";

        spacing?: DESIGN_SPACING_ARGUMENT;
        spacing_x?: DESIGN_SPACING_ARGUMENT;
        spacing_y?: DESIGN_SPACING_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let orientation: $$Props["orientation"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;
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
