<script lang="ts">
    import {afterUpdate} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {
        CONTEXT_ACCORDION_BEHAVIOR,
        CONTEXT_ACCORDION_ID,
        CONTEXT_ACCORDION_NAME,
        CONTEXT_ACCORDION_STATE,
    } from "./AccordionGroup.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;
        state?: boolean;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};

        close: {};
        open: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;
    export let state: $$Props["state"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    const _accordion_behavior = CONTEXT_ACCORDION_BEHAVIOR.get();
    const _accordion_id = CONTEXT_ACCORDION_ID.get();
    const _accordion_name = CONTEXT_ACCORDION_NAME.get();
    const _accordion_state = CONTEXT_ACCORDION_STATE.get();

    if (!_accordion_behavior) {
        throw new ReferenceError(
            "bad initialization to `Accordion.Label` (failed to get `accordion_behavior` Svelte Store from context)"
        );
    }

    if (!_accordion_id) {
        throw new ReferenceError(
            "bad initialization to `Accordion.Label` (failed to get `accordion_id` Svelte Store from context)"
        );
    }

    if (!_accordion_name) {
        throw new ReferenceError(
            "bad initialization to `Accordion.Label` (failed to get `accordion_name` Svelte Store from context)"
        );
    }

    if (!_accordion_state) {
        throw new ReferenceError(
            "bad initialization to `Accordion.Label` (failed to get `accordion_state` Svelte Store from context)"
        );
    }

    function on_change(event: Event): void {
        state = (event.target as HTMLInputElement).checked;
    }

    afterUpdate(() => {
        if ($_accordion_behavior === "inclusive") {
            if (state) _accordion_state.push($_accordion_id);
            else _accordion_state.remove($_accordion_id);
        } else if (state) $_accordion_state = $_accordion_id;
    });

    $: state = $_accordion_state.includes($_accordion_id);
</script>

{#if $_accordion_behavior === "inclusive"}
    <input
        role="presentation"
        type="checkbox"
        id={$_accordion_id}
        name={$_accordion_name}
        checked={state}
        value={$_accordion_id}
        on:change={on_change}
        on:change
    />
{:else}
    <input
        role="presentation"
        type="radio"
        id={$_accordion_id}
        name={$_accordion_name}
        checked={state}
        value={$_accordion_id}
        on:change={on_change}
        on:change
    />
{/if}

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette})}
    {...map_aria_attributes({disabled, pressed: active})}
    for={$_accordion_id}
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
    <slot />

    <slot name="open" />
    <slot name="close" />
</label>
