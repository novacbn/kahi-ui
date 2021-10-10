<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {IPaddingProperties} from "../../../types/spacings";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {CONTEXT_FORM_ID} from "./FormGroup.svelte";

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

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = "";
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();

    $: _logic_for = _form_id ? $_form_id : _for;
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_attributes({for: _logic_for})}
    {...map_data_attributes({palette})}
    {...map_aria_attributes({disabled, pressed: active})}
    on:click
>
    <slot />
</label>
