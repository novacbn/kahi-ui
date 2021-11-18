<script lang="ts">
    import type {PROPERTY_BEHAVIOR_TOGGLE} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_TOGGLE} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    import AccordionGroup from "./AccordionGroup.svelte";

    type $$Events = {
        change: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        logic_name?: string;
        logic_state?: string | string[];

        behavior?: PROPERTY_BEHAVIOR_TOGGLE;
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

    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = "";

    export let behavior: $$Props["behavior"] = TOKENS_BEHAVIOR_TOGGLE.exclusive;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="accordion {_class}"
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
    <AccordionGroup {behavior} {logic_name} {logic_state} on:change>
        <slot />
    </AccordionGroup>
</div>
