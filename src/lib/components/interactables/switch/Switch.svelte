<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../types/sizes";
    import type {IMarginProperties} from "../../../types/spacings";

    import {get_formstate_context, make_formstate_context} from "../../../stores/formstate";
    import {
        CONTEXT_FORM_ID,
        CONTEXT_FORM_NAME,
        get_id_context,
        make_id_context,
    } from "../../../stores/id";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import FormLabel from "../form/FormLabel.svelte";

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

    const _form_id =
        get_id_context(CONTEXT_FORM_ID) ?? make_id_context(id as string, CONTEXT_FORM_ID);
    const _form_name =
        get_id_context(CONTEXT_FORM_NAME) ?? make_id_context(name as string, CONTEXT_FORM_NAME);
    const _form_state =
        get_formstate_context() ?? make_formstate_context(state ? (value as string) : "");

    $: if (id) $_form_id = id;
    $: if (name) $_form_name = name;

    $: {
        if (state) _form_state.push_value(value as string);
        else _form_state.remove_value(value as string);
    }

    $: if (value) state = $_form_state.includes(value);

    $: if (element) {
        element.addEventListener(
            "change",
            (event) => (state = (event.target as HTMLInputElement).checked)
        );
    }
</script>

{#if $$slots["default"]}
    <FormLabel>
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            type="checkbox"
            role="switch"
            {...map_data_attributes({palette, size})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({
                disabled,
                id: $_form_id,
                name: $_form_name,
                value,
            })}
            checked={state}
            on:blur
            on:change
            on:click
            on:focus
            on:input
        />

        <slot />
    </FormLabel>
{:else}
    <input
        bind:this={element}
        {...map_global_attributes($$props)}
        type="checkbox"
        role="switch"
        {...map_data_attributes({palette, size})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({
            disabled,
            id: $_form_id,
            name: $_form_name,
            value,
        })}
        checked={state}
        on:blur
        on:change
        on:click
        on:focus
        on:input
    />
{/if}
