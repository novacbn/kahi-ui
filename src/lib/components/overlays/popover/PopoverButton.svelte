<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    import type {IForwardedActions} from "../../../actions/forward_actions";

    import Button from "../../interactables/button/Button.svelte";

    import {CONTEXT_POPOVER_ID} from "./PopoverGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
        variation?: PROPERTY_VARIATION_BUTTON;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

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

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    const _popover_id = CONTEXT_POPOVER_ID.get();

    if (!_popover_id) {
        throw new ReferenceError(
            "bad initialization to `Popover.Button` (failed to get `popover_id` Svelte Store from context)"
        );
    }
</script>

<Button
    {...$$restProps}
    bind:element
    is="label"
    class="popover--button {_class}"
    for={$_popover_id}
    {actions}
    {active}
    {disabled}
    {palette}
    {sizing}
    {variation}
    {tabindex}
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
</Button>
