<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import {behavior_button} from "../../../actions/behavior_button";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import FormGroup from "../../interactables/form/FormGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let tabindex: $$Props["tabindex"] = 0;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = "";
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;

    // HACK: Svelte has `tabindex` typed as `number | undefined` unless
    // you pass a string literal into the markup
    $: _tabindex = tabindex as number | undefined;
</script>

<FormGroup logic_id={_for}>
    <label
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        class="menu--item {_class}"
        {...map_data_attributes({palette})}
        {...map_aria_attributes({disabled, pressed: active})}
        for={_for}
        tabindex={_tabindex}
        use:behavior_button={{enabled: true}}
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
</FormGroup>
