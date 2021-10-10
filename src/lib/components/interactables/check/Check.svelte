<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../types/sizes";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {DESIGN_FILL_TOGGLE_VARIATION_ARGUMENT} from "../../../types/variations";

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
        blur: FocusEvent;
        change: InputEvent;
        click: MouseEvent;
        focus: FocusEvent;
        input: InputEvent;
    };

    type $$Props = {
        element?: HTMLInputElement;

        active?: boolean;
        disabled?: boolean;
        state?: boolean;
        value?: string;

        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        variation?: DESIGN_FILL_TOGGLE_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

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

    $: _id = _form_id ? $_form_id : id;
    $: _name = _form_name ? $_form_name : name;

    $: if (_form_state && value) {
        if (state) _form_state.push(value);
        else _form_state.remove(value);
    }

    $: if (_form_state && value) state = $_form_state.includes(value);

    function on_change(event: InputEvent): void {
        state = (event.target as HTMLInputElement).checked;
    }
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
                on:change={on_change}
                on:blur
                on:change
                on:click
                on:focus
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
        on:change={on_change}
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{/if}
