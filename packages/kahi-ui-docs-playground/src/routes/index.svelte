<script>
    import {Heading, Stack} from "@kahi-ui/svelte";

    import {get_recent_workspace, list_workspaces} from "../util/workspaces";

    import Layout from "./$layout.svelte";

    import * as Heroes from "../components/heroes";
    import * as Tiles from "../components/tiles";

    let resumable = false;
    let workspaces = null;

    async function init() {
        resumable = !!(await get_recent_workspace());
        workspaces = await list_workspaces();
    }

    init();
</script>

<style>
    [slot="hero"] {
        display: contents;
    }
</style>

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
                    <Tiles.Workspace {workspace} />
                {/each}
            </Stack>
        {/if}
    {:else}
        <Heroes.LoadingWorkspaces />
    {/if}
</Layout>
