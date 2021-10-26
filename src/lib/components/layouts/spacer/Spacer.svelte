<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_ORIENTATION_ARGUMENT} from "../../../types/orientations";
    import type {PROPERTY_PALETTE} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement | HTMLSpanElement;

        orientation?: DESIGN_ORIENTATION_ARGUMENT;
        variation?: "inline";

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

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
