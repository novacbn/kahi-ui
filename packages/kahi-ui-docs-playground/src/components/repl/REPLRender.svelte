<script>
    import {createEventDispatcher} from "svelte";

    import {PIPELINE_RESULT_TYPES, pipeline_svelte} from "svelte-pipeline";

    import Stylesheet from "./Stylesheet.svelte";

    const dispatch = createEventDispatcher();

    export let context = {};
    export let imports = {};
    export let value = "";

    $: store = pipeline_svelte({context, imports});
    $: if (value) $store = value;

    let Component, error, stylesheet;
    $: {
        const result = $store;
        if (result) {
            if (result.type === PIPELINE_RESULT_TYPES.error) {
                error = result.message;

                dispatch("error", {message: error});
            } else {
                error = null;

                Component = result.module.exports.default;
                stylesheet = result.stylesheet;

                dispatch("evaluate", {Component, stylesheet, warnings: []});
            }
        } else (Component = null), (error = null), (stylesheet = null);
    }
</script>

<style>
    :global(.repl-render) {
        padding: var(--repl-render-padding, 0.5em 1em);
    }
</style>

<div class="repl-render">
    {#if stylesheet}
        <Stylesheet value={stylesheet} />
    {/if}

    {#if Component}
        <svelte:component this={Component} />
    {/if}
</div>
