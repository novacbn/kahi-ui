<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_ORIENTATION_VERTICAL_ARGUMENT} from "../../../types/orientations";
    import type {DESIGN_SIZING_ARGUMENT, IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLElement;

        sizing?: DESIGN_SIZING_ARGUMENT;

        orientation?: DESIGN_ORIENTATION_VERTICAL_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

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
