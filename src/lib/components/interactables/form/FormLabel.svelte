<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IPaddingProperties} from "../../../types/spacings";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    import FormGroup, {CONTEXT_FORM_ID} from "./FormGroup.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;
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

    const _form_id = CONTEXT_FORM_ID.get();

    $: _logic_for = _form_id ? $_form_id : _for;
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_aria_attributes({disabled, pressed: active})}
    for={_logic_for}
    on:click
>
    {#if !_form_id && _for}
        <FormGroup logic_id={_for}>
            <slot />
        </FormGroup>
    {:else}
        <slot />
    {/if}
</label>
