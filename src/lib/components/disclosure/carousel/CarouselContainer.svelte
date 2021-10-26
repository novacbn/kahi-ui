<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {
        PROPERTY_SPACING_BREAKPOINT,
        IMarginProperties,
        IPaddingProperties,
    } from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        orientation?: "vertical";

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
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

    export let orientation: $$Props["orientation"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="carousel {_class}"
    {...map_data_attributes({orientation, spacing, "spacing-x": spacing_x, "spacing-y": spacing_y})}
>
    <slot />
</div>
