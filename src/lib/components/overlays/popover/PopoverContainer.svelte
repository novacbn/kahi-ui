<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_REFERENCE_TARGET} from "../../../types/references";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";
    import {action_exit} from "../../../util/keybind";

    import PopoverGroup from "./PopoverGroup.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        logic_id?: string;
        logic_state?: boolean;

        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        once?: boolean;

        focus_target?: PROPERTY_REFERENCE_TARGET;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_id: $$Props["logic_id"] = "";
    export let logic_state: $$Props["logic_state"] = false;

    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let once: $$Props["once"] = undefined;

    export let focus_target: $$Props["focus_target"] = null;

    function on_group_change(event: CustomEvent<void>): void {
        dispatch(logic_state ? "active" : "dismiss");
    }

    function on_input_change(event: Event): void {
        logic_state = (event.target as HTMLInputElement).checked;
    }

    function on_dismiss(): void {
        if (dismissible && logic_state) logic_state = false;
    }
</script>

<svelte:window use:action_exit={{on_bind: on_dismiss}} />

{#if logic_id}
    <input
        role="presentation"
        id={logic_id}
        type="checkbox"
        bind:checked={logic_state}
        on:change={on_input_change}
    />
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="popover {_class}"
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
    <PopoverGroup
        {logic_id}
        {focus_target}
        {dismissible}
        {loading}
        {once}
        bind:logic_state
        on:change={on_group_change}
    >
        <slot />
    </PopoverGroup>
</div>
