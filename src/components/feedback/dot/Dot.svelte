<script lang="ts">
    import type {DESIGN_ANIMATION_ARGUMENT} from "../../../lib/types/animations";
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_POSITION_ARGUMENT} from "../../../lib/types/positions";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
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

    export let animation: DESIGN_ANIMATION_ARGUMENT | undefined = undefined;
    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let position: DESIGN_POSITION_ARGUMENT | undefined = undefined;

</script>

<span
    bind:this={element}
    {...map_global_attributes($$props)}
    class="dot {_class}"
    {...map_data_attributes({animation, palette, position})}
/>
