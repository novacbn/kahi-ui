<script lang="ts">
    // TODO: Stories (?)

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {CONTEXT_FORM_ID, get_id_context, make_id_context} from "../../../lib/stores/id";
    import {map_attributes, map_global_attributes} from "../../../lib/util/attributes";

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

    export let _for: string = "";

    export {_for as for};

    const _form_id = get_id_context(CONTEXT_FORM_ID) ?? make_id_context(_for, CONTEXT_FORM_ID);

    $: if (_for) $_form_id = _for;
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_attributes({for: $_form_id})}
    on:click
>
    <slot />
</label>
