<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT} from "../../../lib/types/orientations";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        orientation?: DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT;
        variation?: "stacked";
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

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
