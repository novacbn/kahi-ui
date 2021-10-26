<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        sizing?: PROPERTY_SIZING;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;
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

    export let sizing: $$Props["sizing"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;
</script>

<nav
    class="menu {_class}"
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({orientation, sizing})}
>
    <ul>
        <slot />
    </ul>
</nav>
