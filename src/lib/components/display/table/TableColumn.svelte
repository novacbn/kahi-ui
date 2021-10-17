<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLTableCellElement;

        colspan?: number | string;
        rowspan?: number | string;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let colspan: $$Props["colspan"] = undefined;
    export let rowspan: $$Props["rowspan"] = undefined;
</script>

<td bind:this={element} {...map_global_attributes($$props)} {...map_attributes({colspan, rowspan})}>
    <slot />
</td>
