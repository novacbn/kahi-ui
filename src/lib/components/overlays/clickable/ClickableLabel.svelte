<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    import FormGroup from "../../interactables/form/FormGroup.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = undefined;
    export {_for as for};
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    class="clickable-item {_class}"
    {...map_aria_attributes({disabled, pressed: active})}
    for={_for}
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
    <FormGroup logic_id={_for}>
        <slot />
    </FormGroup>
</label>
