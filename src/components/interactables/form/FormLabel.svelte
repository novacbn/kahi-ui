<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {IPaddingProperties} from "../../../lib/types/spacings";

    import {CONTEXT_FORM_ID, get_id_context, make_id_context} from "../../../lib/stores/id";
    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;
    export let disabled: $$Props["disabled"] = false;

    let _for: $$Props["for"] = "";
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;

    const _form_id =
        get_id_context(CONTEXT_FORM_ID) ?? make_id_context(_for as string, CONTEXT_FORM_ID);

    $: if (_for) $_form_id = _for;
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_attributes({for: $_form_id})}
    {...map_data_attributes({palette})}
    {...map_aria_attributes({disabled, pressed: active})}
    on:click
>
    <slot />
</label>
