<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_ORIENTATION_VERTICAL_ARGUMENT} from "../../../lib/types/orientations";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLElement;

        orientation?: DESIGN_ORIENTATION_VERTICAL_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let orientation: $$Props["orientation"] = undefined;
</script>

<nav
    class="menu {_class}"
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({orientation})}
>
    <ul>
        <slot />
    </ul>
</nav>
