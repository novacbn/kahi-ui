<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {LOADING_BEHAVIORS_ARGUMENT} from "../../../types/loading";
    import {LOADING_BEHAVIORS} from "../../../types/loading";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    import {CONTEXT_TAB_ID, CONTEXT_TAB_STATE} from "./TabGroup.svelte";

    type $$Props = {
        element?: HTMLElement;

        loading?: LOADING_BEHAVIORS_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let loading: $$Props["loading"] = undefined;

    const _tab_id = CONTEXT_TAB_ID.get();
    const _tab_state = CONTEXT_TAB_STATE.get();

    // TODO: `Transition` support for `loading=lazy`

    let state: boolean = true;
    $: if (_tab_id && _tab_state && loading === LOADING_BEHAVIORS.lazy)
        state = $_tab_state === $_tab_id;
</script>

<section bind:this={element} {...map_global_attributes($$props)}>
    {#if state}
        <slot />
    {/if}
</section>
