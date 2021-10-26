<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_LOADING} from "../../../types/behaviors";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    import {CONTEXT_ACCORDION_ID, CONTEXT_ACCORDION_STATE} from "./AccordionGroup.svelte";

    type $$Props = {
        element?: HTMLElement;

        loading?: PROPERTY_BEHAVIOR_LOADING;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let loading: $$Props["loading"] = undefined;

    const _accordion_id = CONTEXT_ACCORDION_ID.get();
    const _accordion_state = CONTEXT_ACCORDION_STATE.get();

    // TODO: `Transition` support for `loading=lazy`

    let state: boolean = true;
    $: if (_accordion_id && _accordion_state && loading === TOKENS_BEHAVIOR_LOADING.lazy)
        state = $_accordion_state.includes($_accordion_id);
</script>

<section bind:this={element} {...map_global_attributes($$props)}>
    {#if state}
        <slot />
    {/if}
</section>
