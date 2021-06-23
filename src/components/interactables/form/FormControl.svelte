<script lang="ts">
    // TODO: Stories (?)

    import {CONTEXT_FORM_ID, make_id_context} from "../../../lib/stores/id";

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

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

    export let logic_id: string = "";

    const _logic_id = make_id_context(logic_id, CONTEXT_FORM_ID);

    $: $_logic_id = logic_id;
</script>

<div bind:this={element} {...$$props} class="form-control {_class}">
    <slot />
</div>
