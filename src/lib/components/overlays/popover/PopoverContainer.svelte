<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_REFERENCE_TARGET} from "../../../types/references";
    import type {PROPERTY_VARIATION_POPOVER} from "../../../types/variations";
    import {TOKENS_VARIATION_POPOVER} from "../../../types/variations";

    import {click_inside} from "../../../actions/click_inside";
    import {click_outside} from "../../../actions/click_outside";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";
    import {lost_focus} from "../../../actions/lost_focus";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";
    import {can_focus} from "../../../util/element";
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

        focus_target?: PROPERTY_REFERENCE_TARGET;

        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        once?: boolean;

        variation?: PROPERTY_VARIATION_POPOVER;
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

    // HACK: Focus management properties need default invalid references so
    // the Context Stores get created. Due to `<element bind:this>` / `<Component bind:element>`
    // taking a frame to be initialized

    export let focus_target: $$Props["focus_target"] = null;

    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let once: $$Props["once"] = undefined;

    export let variation: $$Props["variation"] = undefined;

    function on_click_inside(event: MouseEvent): void {
        if (once) logic_state = false;
        else if (_is_control) {
            const {target} = event;
            if (target && !can_focus(target as Element)) logic_state = false;
        }
    }

    function on_dismiss(): void {
        if (!logic_state) return;

        if (_is_control || (_is_popover && dismissible)) logic_state = false;
    }

    function on_focus_in(event: FocusEvent): void {
        if (logic_state || !_is_control) return;

        logic_state = true;
    }

    function on_group_change(event: CustomEvent<void>): void {
        dispatch(logic_state ? "active" : "dismiss");
    }

    function on_input_change(event: Event): void {
        logic_state = (event.target as HTMLInputElement).checked;
    }

    $: _is_control = variation === TOKENS_VARIATION_POPOVER.control;
    $: _is_popover = !variation || variation === TOKENS_VARIATION_POPOVER.popover;

    $: _label = logic_id ? `label[for="${logic_id}"]` : undefined;
</script>

<svelte:window use:action_exit={{on_bind: () => on_dismiss}} />

{#if _is_popover && logic_id}
    <input
        role="presentation"
        class="popover--state"
        id={logic_id}
        type="checkbox"
        bind:checked={logic_state}
        on:change={on_input_change}
    />
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="popover {_class}"
    {...map_data_attributes({variation})}
    use:forward_actions={{actions}}
    use:click_inside={{
        ignore: _label,
        on_click_inside: on_click_inside,
    }}
    use:click_outside={{
        ignore: _label,
        on_click_outside: on_dismiss,
    }}
    use:lost_focus={{
        enabled: _is_control || _is_popover,
        ignore: _label,
        on_lost_focus: on_dismiss,
    }}
    on:focusin={on_focus_in}
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
        variation={variation ?? TOKENS_VARIATION_POPOVER.popover}
        {focus_target}
        {loading}
        {logic_id}
        bind:logic_state
        on:change={on_group_change}
    >
        <slot />
    </PopoverGroup>
</div>
