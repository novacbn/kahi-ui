<script context="module">
    import {browser} from "$app/env";

    import {get_recent_workspace, list_workspaces, remove_workspace} from "../client/workspaces";

    export const load = browser
        ? async () => {
              const [workspace_list, workspace_recent] = await Promise.all([
                  list_workspaces(),
                  get_recent_workspace(),
              ]);

              return {
                  props: {
                      workspace_list,
                      workspace_recent,
                  },
              };
          }
        : null;
</script>

<script>
    import {Heroes as KitHeroes} from "@kahi-ui/docs-kit/shared";
    import {Container, Heading, Stack} from "@kahi-ui/svelte";

    import * as Heroes from "../components/heroes";
    import * as Tiles from "../components/tiles";

    export let workspace_list = [];
    export let workspace_recent = null;

    async function on_delete_click(workspace, event) {
        const {identifier} = workspace;

        // TODO: Display loading hero while removal in progress
        await remove_workspace(identifier);

        [workspace_list, workspace_recent] = await Promise.all([
            list_workspaces(),
            get_recent_workspace(),
        ]);
    }
</script>

{#if browser}
    <Heroes.Landing recent_workspace={workspace_recent} />

    <Container as="main" viewport="medium">
        <Heading level={2}>Recent Workspaces</Heading>

        {#if workspace_list.length > 0}
            <Stack alignment-x="stretch" spacing="medium">
                {#each workspace_list as workspace (workspace.identifier)}
                    <Tiles.Workspace
                        {workspace}
                        on:delete={on_delete_click.bind(null, workspace)}
                    />
                {/each}
            </Stack>
        {/if}
    </Container>

    {#if workspace_list.length < 1}
        <Heroes.NoWorkspaces />
    {/if}
{:else}
    <KitHeroes.NotSupported />
{/if}
