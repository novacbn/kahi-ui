<script lang="ts">
    import type {PROPERTY_ALIGNMENT_X} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import TabGroup from "./TabGroup.svelte";

    type $$Events = {
        change: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        logic_name?: string;
        logic_state?: string;

        sizing?: PROPERTY_SIZING;

        alignment_x?: PROPERTY_ALIGNMENT_X;
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
    export let logic_state: $$Props["logic_state"] = undefined;

    export let sizing: $$Props["sizing"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="tab {_class}"
    {...map_data_attributes({"alignment-x": alignment_x, sizing})}
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
    <TabGroup {logic_name} {logic_state} on:change>
        <slot />
    </TabGroup>
</div>
