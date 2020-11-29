<script>
    import {Heading, Tile, Stack} from "@kahi-ui/svelte";

    import {list_workspaces} from "../util/workspaces";

    import Layout from "./$layout.svelte";

    let workspaces = [];

    async function init() {
        workspaces = await list_workspaces();
    }

    init();
</script>

<Layout>
    <Heading level={2}>Recent Workspaces</Heading>

    <Stack alignment-x="stretch" spacing="small">
        {#each workspaces as workspace (workspace.identifier)}
            <Tile.Container href="#/repl/{workspace.identifier}" palette="light">
                <Tile.Body>
                    <Tile.Heading>{workspace.identifier}</Tile.Heading>
                </Tile.Body>
            </Tile.Container>
        {/each}
    </Stack>
</Layout>
