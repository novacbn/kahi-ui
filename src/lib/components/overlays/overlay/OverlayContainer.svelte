<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {
        PROPERTY_ALIGNMENT_BREAKPOINT,
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "../../../types/alignments";
    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_ORIENTATION_Y_BREAKPOINT} from "../../../types/orientations";
    import type {PROPERTY_REFERENCE_TARGET} from "../../../types/references";
    import type {IPaddingProperties, PROPERTY_SPACING_BREAKPOINT} from "../../../types/spacings";

    import {auto_focus} from "../../../actions/auto_focus";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";
    import {trap_focus} from "../../../actions/trap_focus";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";
    import {action_exit} from "../../../util/keybind";

    import Backdrop from "../backdrop/Backdrop.svelte";

    import OverlayGroup from "./OverlayGroup.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        logic_id?: string;
        logic_state?: boolean;

        captive?: boolean;
        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        once?: boolean;

        focus_first?: PROPERTY_REFERENCE_TARGET;
        focus_last?: PROPERTY_REFERENCE_TARGET;
        focus_target?: PROPERTY_REFERENCE_TARGET;

        orientation?: PROPERTY_ORIENTATION_Y_BREAKPOINT;

        alignment?: PROPERTY_ALIGNMENT_BREAKPOINT;
        alignment_x?: PROPERTY_ALIGNMENT_X_BREAKPOINT;
        alignment_y?: PROPERTY_ALIGNMENT_Y_BREAKPOINT;

        spacing?: PROPERTY_SPACING_BREAKPOINT;
        spacing_x?: PROPERTY_SPACING_BREAKPOINT;
        spacing_y?: PROPERTY_SPACING_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_state: $$Props["logic_state"] = false;

    export let focus_first: $$Props["focus_first"] = undefined;
    export let focus_last: $$Props["focus_last"] = undefined;
    export let focus_target: $$Props["focus_target"] = undefined;

    export let captive: $$Props["captive"] = undefined;
    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let once: $$Props["once"] = undefined;

    export let orientation: $$Props["orientation"] = undefined;

    export let alignment: $$Props["alignment"] = undefined;
    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;
    export let spacing_x: $$Props["spacing_x"] = undefined;
    export let spacing_y: $$Props["spacing_y"] = undefined;

    function on_group_change(event: CustomEvent<void>): void {
        dispatch(logic_state ? "active" : "dismiss");
        console.log("on_group_change", {logic_state});
    }

    function on_input_change(event: Event): void {
        logic_state = (event.target as HTMLInputElement).checked;
        console.log("on_input_change", {logic_state});
    }

    function on_dismiss(): void {
        if (dismissible && logic_state) logic_state = false;
        console.log("on_dismiss", {logic_state, dismissible});
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
    class="overlay {_class}"
    {...map_data_attributes({
        alignment,
        "alignment-x": alignment_x,
        "alignment-y": alignment_y,
        orientation,
        spacing,
        "spacing-x": spacing_x,
        "spacing-y": spacing_y,
    })}
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
    {#if captive}
        <Backdrop for={dismissible ? logic_id : undefined} />
    {/if}

    <OverlayGroup
        {logic_id}
        {focus_first}
        {focus_last}
        {focus_target}
        {dismissible}
        {loading}
        {once}
        bind:logic_state
        on:change={on_group_change}
    >
        <slot />
    </OverlayGroup>
</div>
