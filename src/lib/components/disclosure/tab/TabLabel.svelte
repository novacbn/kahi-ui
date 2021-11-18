<script lang="ts">
    import {afterUpdate} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import {CONTEXT_TAB_ID, CONTEXT_TAB_NAME, CONTEXT_TAB_STATE} from "./TabGroup.svelte";

    type $$Events = IHTML5Events;

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
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;
    export let state: $$Props["state"] = undefined;

    export let palette: $$Props["palette"] = undefined;

    const _tab_id = CONTEXT_TAB_ID.get();
    const _tab_name = CONTEXT_TAB_NAME.get();
    const _tab_state = CONTEXT_TAB_STATE.get();

    if (!_tab_id) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `tab_id` Svelte Store from context)"
        );
    }

    if (!_tab_name) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `tab_name` Svelte Store from context)"
        );
    }

    if (!_tab_state) {
        throw new ReferenceError(
            "bad initialization to `Tab.Label` (failed to get `tab_state` Svelte Store from context)"
        );
    }

    function on_change(event: Event): void {
        // HACK: We can't directly bind `checked` on `type="radio"`, so we need to watch events
        state = true;
    }

    afterUpdate(() => {
        if (state) $_tab_state = $_tab_id;
    });

    $: state = $_tab_state === $_tab_id;
</script>

<input
    role="presentation"
    type="radio"
    id={$_tab_id}
    name={$_tab_name}
    checked={state}
    value={$_tab_id}
    on:change={on_change}
    on:change
/>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_data_attributes({palette})}
    {...map_aria_attributes({disabled, pressed: active})}
    for={$_tab_id}
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
</label>
