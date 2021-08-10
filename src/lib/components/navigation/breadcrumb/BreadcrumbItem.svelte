<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {get_component_context} from "../../../stores/component";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLLIElement;

        active?: boolean;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;

    const _component = get_component_context();
</script>

<li bind:this={element} {...map_global_attributes($$props)}>
    <slot />

    {#if $_component && !active}
        <span role="presentation">
            {#if typeof $_component === "string"}
                {$_component}
            {:else}
                <svelte:component this={$_component} />
            {/if}
        </span>
    {/if}
</li>
