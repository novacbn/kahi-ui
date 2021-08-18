<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {LOADING_BEHAVIORS_ARGUMENT} from "../../../types/loading";
    import {LOADING_BEHAVIORS} from "../../../types/loading";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {CONTEXT_FORM_ID, get_id_context} from "../../../stores/id";

    import {map_global_attributes} from "../../../util/attributes";
    import {get_formstate_context} from "../../../stores/formstate";

    type $$Props = {
        element?: HTMLElement;

        loading?: LOADING_BEHAVIORS_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    export let loading: $$Props["loading"] = undefined;

    const _form_id = get_id_context(CONTEXT_FORM_ID);
    const _form_state = get_formstate_context();

    let state: boolean = true;
    $: if (_form_id && _form_state && loading === LOADING_BEHAVIORS.lazy)
        state = $_form_state === $_form_id;
</script>

<section bind:this={element} {...map_global_attributes($$props)}>
    {#if state}
        <slot />
    {/if}
</section>
