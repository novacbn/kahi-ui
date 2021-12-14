<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_PLACEMENT_X} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLElement;

        palette?: PROPERTY_PALETTE;
        variation?: "sticky";

        placement?: PROPERTY_PLACEMENT_X;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let palette: $$Props["palette"] = undefined;
    export let placement: $$Props["placement"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<nav
    bind:this={element}
    {...map_global_attributes($$props)}
    class="aside {_class}"
    {...map_data_attributes({palette, placement, variation})}
>
    <slot />
</nav>
