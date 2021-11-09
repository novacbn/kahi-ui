<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_BREAKPOINT} from "../../../types/orientations";
    import type {PROPERTY_SPACING_BREAKPOINT} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement | HTMLSpanElement;

        is?: "div" | "span";

        orientation?: PROPERTY_ORIENTATION_BREAKPOINT;
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

    export let is: $$Props["is"] = "div";

    let _class: $$Props["class"] = "";
    export {_class as class};

    /**
     * @deprecated Use `<Spacer spacing_x="...">` / `<Spacer spacing_y="...">` instead.
     */
    export let orientation: $$Props["orientation"] = undefined;
    /**
     * @deprecated Use `<Spacer is="span">` instead.
     */
    export let variation: $$Props["variation"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;
</script>

{#if is === "span" || variation === "inline"}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        class="spacer {_class}"
        {...map_data_attributes({
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
            spacing,
            "spacing-x": spacing_x,
            "spacing-y": spacing_y,
        })}
    >
        <slot />
    </div>
{/if}
