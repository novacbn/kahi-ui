<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    import {CONTEXT_ACCORDION_ID, CONTEXT_ACCORDION_STATE} from "./AccordionGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let loading: $$Props["loading"] = undefined;

    const _accordion_id = CONTEXT_ACCORDION_ID.get();
    const _accordion_state = CONTEXT_ACCORDION_STATE.get();

    // TODO: `Transition` support for `loading=lazy`

    let state: boolean = true;
    $: {
        if (
            _accordion_id &&
            _accordion_state &&
            $_accordion_state &&
            loading === TOKENS_BEHAVIOR_LOADING_LAZY.lazy
        ) {
            // HACK: If the "CONTEXT_ACCORDION_ID" store was made that means `<Accordion.Group>` was
            // initialized with a valid `logic_id` value. So this should /always/ be a string
            state = $_accordion_state.includes($_accordion_id as string);
        }
    }
</script>

<section
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="accordion--section {_class}"
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
    {#if state}
        <slot />
    {/if}
</section>
