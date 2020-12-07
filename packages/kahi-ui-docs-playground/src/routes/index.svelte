<script>
    import {Heading, Stack} from "@kahi-ui/svelte";

    import {get_recent_workspace, list_workspaces, remove_workspace} from "../util/workspaces";

    import Layout from "./$layout.svelte";

    import * as Heroes from "../components/heroes";
    import * as Tiles from "../components/tiles";

    let resumable = false;
    let workspaces = null;

    async function init() {
        resumable = !!(await get_recent_workspace());
        workspaces = await list_workspaces();
    }

    async function on_delete_click(event) {
        const {workspace} = event.detail;
        const {identifier} = workspace;

        await remove_workspace(identifier);
        init();
    }

    init();
</script>

<style>
    [slot="hero"] {
        display: contents;
    }
</style>

<svelte:head>
    <title>Playground :: Kahi UI</title>
</svelte:head>

<Layout>
    <div slot="hero">
        <Heroes.Landing {resumable} />
    </div>

    <Heading level={2}>Recent Workspaces</Heading>

    {#if workspaces}
        {#if workspaces.length < 1}
            <Heroes.NoWorkspaces />
        {:else}
            <Stack alignment-x="stretch" spacing="medium">
                {#each workspaces as workspace (workspace.identifier)}
                    <Tiles.Workspace {workspace} on:delete={on_delete_click} />
                {/each}
            </Stack>
        {/if}
    {:else}
        <Heroes.LoadingWorkspaces />
    {/if}
</Layout>
