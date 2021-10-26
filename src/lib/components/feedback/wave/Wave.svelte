<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let palette: $$Props["palette"] = undefined;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="wave {_class}"
    {...map_data_attributes({palette})}
>
    <span />
    <span />
    <span />
    <span />
    <span />
</span>
