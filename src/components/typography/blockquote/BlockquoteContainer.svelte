<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_INTRINSIC_SIZING_ARGUMENT} from "../../../lib/types/sizings";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let margin: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let padding: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let padding_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let padding_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let max_height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let min_height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;

    export let width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let max_width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let min_width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;

</script>

<blockquote
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette})}
>
    <slot />
</blockquote>
