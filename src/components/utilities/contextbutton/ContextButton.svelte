<script lang="ts">
    // TODO: Stories (?)

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";
    import type {DESIGN_VARIATION_INTERACTIVE_ARGUMENT} from "../../../lib/types/variations";

    import {get_id_context} from "../../../lib/stores/id";

    import Button from "../../interactables/button/Button.svelte";

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

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let shape: undefined = undefined;
    export let size: DESIGN_SIZE_ARGUMENT | undefined = undefined;
    export let variation: DESIGN_VARIATION_INTERACTIVE_ARGUMENT | undefined = undefined;

    export let active: boolean = false;
    export let disabled: boolean = false;

    const store = get_id_context();

</script>

<Button bind:element {...$$props} class="context-button {_class}" for={$store} on:click>
    <slot />
</Button>
