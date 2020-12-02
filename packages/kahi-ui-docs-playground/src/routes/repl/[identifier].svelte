<script>
    import {REPL_ROTATION, REPL_VIEWS, WORKSPACE_DATA} from "../../util/constants";
    import {get_workspace, set_recent_workspace} from "../../util/workspaces";

    import Layout from "./$layout.svelte";

    import * as REPL from "../../components/repl";

    let rotation = REPL_ROTATION.horizontal;
    let title = "N/A";
    let view = REPL_VIEWS.split;

    let error = null;
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
        const {value} = event.detail;

        if (filesystem) {
            const data = await filesystem.read_file_json(WORKSPACE_DATA);

            filesystem.write_file_json(WORKSPACE_DATA, {...data, title: value});
        }
    }

    function on_error(event) {
        const {message} = event.detail;

        error = message;
    }

    function on_evaluate(event) {
        error = null;
    }

    $: if (params.identifier) load_workspace(params.identifier);
    $: if (filesystem) set_recent_workspace(params.identifier);
    $: if (filesystem && !script) read_script();
    $: if (filesystem) write_script(script);
</script>

<svelte:head>
    <title>{title} — Playground :: Kahi UI</title>
</svelte:head>

<Layout bind:rotation bind:view on:change={on_title_change} {error} {title}>
    <REPL.REPLSplit
        value={script}
        on:error={on_error}
        on:evaluate={on_evaluate}
        {rotation}
        {view} />
</Layout>
