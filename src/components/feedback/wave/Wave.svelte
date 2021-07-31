<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_POSITION_ARGUMENT} from "../../../lib/types/positions";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLSpanElement;

        palette?: DESIGN_PALETTE_ARGUMENT;
        position?: DESIGN_POSITION_ARGUMENT;
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
