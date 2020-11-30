<script>
    import {Box, Stack} from "@kahi-ui/svelte";

    import {PIPELINE_RESULT_TYPES} from "svelte-pipeline";

    import {pipeline} from "../../stores/pipeline";

    import {PLAYGROUND_ROTATION, PLAYGROUND_VIEWS, WORKSPACE_DATA} from "../../util/constants";
    import {get_workspace, set_recent_workspace} from "../../util/workspaces";

    import Layout from "./$layout.svelte";

    import * as Editors from "../../components/editors";

    const store = pipeline();

    let rotation = PLAYGROUND_ROTATION.horizontal;
    let title = "N/A";
    let view = PLAYGROUND_VIEWS.split;

    let filesystem = null;
    let script = "";

    export let params = {};

    async function load_workspace(identifier) {
        const workspace = await get_workspace(identifier);

        filesystem = workspace.filesystem;
        title = workspace.title;
    }

    async function read_script() {
        script = await filesystem.read_file_text("Application.svelte");
    }

    async function write_script(text) {
        await filesystem.write_file_text("Application.svelte", text);
    }

    async function on_title_change(event) {
        const {title} = event.detail;

        if (filesystem) {
            const data = await filesystem.read_file_json(WORKSPACE_DATA);

            filesystem.write_file_json(WORKSPACE_DATA, {...data, title});
        }
    }

    $: if (params.identifier) load_workspace(params.identifier);
    $: if (filesystem) set_recent_workspace(params.identifier);
    $: if (filesystem && !script) read_script();
    $: if (filesystem) write_script(script);

    $: if (script) $store = script;

    let Component, err, stylesheet;
    $: {
        const result = $store;
        if (result) {
            if (result.type === PIPELINE_RESULT_TYPES.error) {
                Component = null;
                err = result.message;
            } else {
                Component = result.module.exports.default;
                err = null;
                stylesheet = result.stylesheet;
            }
        } else (Component = null), (err = null);
    }
</script>

<style>
    :global(.repl-editor-stack) {
        flex-grow: 1;
    }

    :global(.repl-editor-stack > *) {
        flex-grow: 1;

        border: none;
        border-radius: 0;
        resize: none;
    }

    :global(.repl-editor-stack:not([data-orientation])
            > :first-child:not([data-hidden])
            + :last-child) {
        border-top: 1px solid black;
    }

    :global(.repl-editor-stack[data-orientation="horizontal"]
            > :first-child:not([data-hidden])
            + :last-child) {
        border-left: 1px solid black;
    }
</style>

<svelte:head>
    <title>{title} — Playground :: Kahi UI</title>
</svelte:head>

{#if Component && stylesheet}
    <Editors.Stylesheet value={stylesheet} />
{/if}

<Layout bind:rotation bind:title bind:view on:title_change={on_title_change}>
    <Stack
        class="repl-editor-stack"
        alignment-x="stretch"
        alignment-y="stretch"
        orientation={rotation === PLAYGROUND_ROTATION.horizontal ? 'horizontal' : undefined}>
        <textarea
            bind:value={script}
            data-hidden={view === PLAYGROUND_VIEWS.code || view === PLAYGROUND_VIEWS.split ? undefined : true} />

        {#if Component && script}
            <div
                data-hidden={view === PLAYGROUND_VIEWS.preview || view === PLAYGROUND_VIEWS.split ? undefined : true}>
                <svelte:component this={Component} />
            </div>
        {/if}
    </Stack>

    {#if err}
        <Box palette="negative" variation="outline">{err}</Box>
    {/if}
</Layout>
