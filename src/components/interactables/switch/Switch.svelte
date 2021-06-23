<script lang="ts">
    import {CONTEXT_FORM_ID, CONTEXT_FORM_NAME, get_id_context} from "../../../lib/stores/id";

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

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

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let size: DESIGN_SIZE_ARGUMENT | undefined = undefined;

    export let active: boolean = false;
    export let disabled: boolean = false;
    export let state: boolean = false;
    export let value: string = "";

    const _form_id = get_id_context(CONTEXT_FORM_ID);
    const _form_name = get_id_context(CONTEXT_FORM_NAME);
</script>

<input
    bind:this={element}
    {...map_global_attributes($$props)}
    role="switch"
    type="checkbox"
    {...map_data_attributes({palette, size})}
    {...map_aria_attributes({pressed: active})}
    {...map_attributes({
        checked: state,
        disabled,
        id: _form_id && $_form_id ? $_form_id : id,
        name: _form_name && $_form_name ? $_form_name : name,
        value,
    })}
    on:change
    on:click
    on:input
/>
