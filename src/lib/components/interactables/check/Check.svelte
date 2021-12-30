<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_TOGGLE} from "../../../types/variations";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import FormLabel from "../form/FormLabel.svelte";
    import FormGroup, {
        CONTEXT_FORM_ID,
        CONTEXT_FORM_NAME,
        CONTEXT_FORM_STATE,
    } from "../form/FormGroup.svelte";

    type $$Events = {
        change: InputEvent;
        input: InputEvent;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLInputElement;

        active?: boolean;
        disabled?: boolean;
        state?: boolean;
        value?: string;

        palette?: PROPERTY_PALETTE;
        size?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_TOGGLE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let id: $$Props["id"] = "";
    export let name: $$Props["name"] = "";

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;
    export let state: $$Props["state"] = undefined;
    export let value: $$Props["value"] = "";

    export let palette: $$Props["palette"] = undefined;
    export let size: $$Props["size"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _form_id = CONTEXT_FORM_ID.get();
    const _form_name = CONTEXT_FORM_NAME.get();
    const _form_state = CONTEXT_FORM_STATE.get();

    function on_change(event: InputEvent): void {
        state = (event.target as HTMLInputElement).checked;
    }

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;

    $: if (_form_state && value) {
        if (state) _form_state.push(value);
        else _form_state.remove(value);
    }

    $: if (_form_state && value) state = $_form_state.includes(value);
</script>

{#if $$slots["default"]}
    <FormGroup logic_id={id}>
        <FormLabel>
            <input
                bind:this={element}
                {...map_global_attributes($$props)}
                type="checkbox"
                {...map_data_attributes({palette, size, variation})}
                {...map_aria_attributes({pressed: active})}
                {...map_attributes({
                    disabled,
                    id,
                    name,
                    value,
                })}
                checked={state}
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
                on:change={on_change}
                on:change
                on:input
            />

            <slot />
        </FormLabel>
    </FormGroup>
{:else}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="checkbox"
        {...map_data_attributes({palette, size, variation})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({
            disabled,
            id: _id,
            name: _name,
            value,
        })}
        checked={state}
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
        on:change={on_change}
        on:change
        on:input
    />
{/if}
