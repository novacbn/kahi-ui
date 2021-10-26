<script lang="ts">
    import type {PROPERTY_BEHAVIOR_TOGGLE} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_TOGGLE} from "../../../types/behaviors";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    import AccordionGroup from "./AccordionGroup.svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
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

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = "";

    export let behavior: $$Props["behavior"] = TOKENS_BEHAVIOR_TOGGLE.exclusive;
</script>

<div bind:this={element} {...map_global_attributes($$props)} class="accordion {_class}">
    <AccordionGroup {behavior} {logic_name} {logic_state} on:change>
        <slot />
    </AccordionGroup>
</div>
