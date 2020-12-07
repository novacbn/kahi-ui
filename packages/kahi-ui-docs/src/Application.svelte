<script>
    import APPLICATION_ROUTER from "./router.manifest";

    import Error404 from "./routes/$404.svelte";

    const {component, page} = APPLICATION_ROUTER;
    const {path, params, query} = page;
</script>

{#if $component}
    <svelte:component this={$component} params={$params} query={$query} />
{:else}
    <Error404 path={$path} />
{/if}
