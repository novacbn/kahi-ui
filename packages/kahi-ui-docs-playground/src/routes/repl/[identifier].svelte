<script>
    import {join} from "uristorage";

    import {Box} from "@kahi-ui/svelte";

    import {PIPELINE_RESULT_TYPES} from "svelte-pipeline";

    import {pipeline} from "../../stores/pipeline";

    import {get_filesystem} from "../../util/storage";
    import {get_workspace, set_recent_workspace} from "../../util/workspaces";

    import Layout from "../$layout.svelte";

    const store = pipeline();
    const filesystem = get_filesystem();

    let script = "";
    let path = "";

    export let params = {};

    async function get_path(identifier) {
        path = (await get_workspace(identifier)).path;
    }

    async function read_script(path) {
        const script_path = join(path, "Application.svelte");
        console.log({script_path});

        script = await filesystem.read_file_text(script_path);
    }

    async function write_script(path, text) {
        const script_path = join(path, "Application.svelte");

        await filesystem.write_file_text(script_path, text);
    }

    $: if (params.identifier) get_path(params.identifier);
    $: if (path) set_recent_workspace(params.identifier);
    $: if (path && !script) read_script(path);
    $: if (path) write_script(path, script);

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
