<script>
    import {APPLICATION_ROUTER} from "./util/router";
    import {is_mounted, mount} from "./util/storage";

    import Error404 from "./routes/$404.svelte";

    const {component, page} = APPLICATION_ROUTER;
    const {path, params, query} = page;

    let mounted = is_mounted();

    async function _mount() {
        await mount();
        mounted = true;
    }

    if (!mounted) _mount();
</script>

{#if mounted}
    {#if $component}
        <svelte:component this={$component} params={$params} query={$query} />
    {:else}
        <Error404 path={$path} />
    {/if}
{:else}Loading storage...{/if}
