<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y} from "../../../types/orientations";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        orientation?: PROPERTY_ORIENTATION_Y;
        sizing?: PROPERTY_SIZING;
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

    export let orientation: $$Props["orientation"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="widget {_class}"
    {...map_data_attributes({orientation, sizing})}
>
    <slot />
</div>
