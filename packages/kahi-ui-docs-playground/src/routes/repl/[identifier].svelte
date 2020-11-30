<script>
    import {Box} from "@kahi-ui/svelte";

    import {PIPELINE_RESULT_TYPES} from "svelte-pipeline";

    import {pipeline} from "../../stores/pipeline";

    import {get_workspace, set_recent_workspace} from "../../util/workspaces";

    import Layout from "../$layout.svelte";

    import * as Editors from "../../components/editors";

    const store = pipeline();

    let filesystem = null;
    let script = "";

    export let params = {};

    async function get_filesystem(identifier) {
        filesystem = (await get_workspace(identifier)).filesystem;
    }

    async function read_script() {
        script = await filesystem.read_file_text("Application.svelte");
    }

    async function write_script(text) {
        await filesystem.write_file_text("Application.svelte", text);
    }

    $: if (params.identifier) get_filesystem(params.identifier);
    $: if (filesystem) set_recent_workspace(params.identifier);
    $: if (filesystem && !script) read_script();
    $: if (filesystem) write_script(script);

    $: if (script) $store = script;

    let Component, err;
    $: {
        const result = $store;
        if (result) {
            if (result.type === PIPELINE_RESULT_TYPES.error) {
                Component = null;
                err = result.message;
            } else {
                Component = result.module.exports.default;
                err = null;
            }
        } else (Component = null), (err = null);
    }
</script>

<svelte:head>
    <title>{params.identifier || 'Loading Workspace...'} — Playground :: Kahi UI</title>
</svelte:head>

<textarea bind:value={script} />

{#if Component && script}
    <svelte:component this={Component} />
{/if}

{#if err}
    <Box palette="negative" variation="outline">{err}</Box>
{/if}
