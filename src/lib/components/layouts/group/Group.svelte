<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_X_BREAKPOINT} from "../../../types/orientations";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        orientation?: PROPERTY_ORIENTATION_X_BREAKPOINT;
        variation?: "stacked";
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<div
    bind:this={element}
    role="group"
    {...map_global_attributes($$props)}
    {...map_data_attributes({orientation, variation})}
>
    <slot />
</div>
