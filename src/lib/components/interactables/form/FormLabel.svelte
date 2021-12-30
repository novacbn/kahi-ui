<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    import FormGroup, {CONTEXT_FORM_ID} from "./FormGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
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

    export let actions: $$Props["actions"] = undefined;
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
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    {#if !_form_id && _for}
        <FormGroup logic_id={_for}>
            <slot />
        </FormGroup>
    {:else}
        <slot />
    {/if}
</label>
