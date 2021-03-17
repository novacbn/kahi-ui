<script>
    import {createEventDispatcher} from "svelte";

    import {PIPELINE_RESULT_TYPES, pipeline_svelte} from "svelte-pipeline";

    import REPLComponent from "../inserts/REPLComponent.svelte";
    import REPLStylesheet from "../inserts/REPLStylesheet.svelte";

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
        } else {
            (Component = null), (error = null), (stylesheet = null);
        }
    }
</script>

<div class="repl-render">
    {#if stylesheet}
        <REPLStylesheet value={stylesheet} />
    {/if}

    {#if value && Component}
        <REPLComponent {Component} on:error />
    {/if}
</div>

<style>
    :global(.repl-render) {
        padding: var(--repl-render-padding, 0.5em 1em);
    }
</style>
