<script>
    import {Tile} from "@kahi-ui/svelte";

    export let workspace = {};

    $: ({identifier} = workspace);
</script>

{#if identifier}
    <Tile.Container href="#/repl/{identifier}" palette="light">
        <Tile.Body>
            <Tile.Heading>{identifier}</Tile.Heading>
        </Tile.Body>
    </Tile.Container>
{:else}
    <Tile.Container palette="light">
        <Tile.Body>
            <Tile.Heading>Loading Workspace...</Tile.Heading>
        </Tile.Body>
    </Tile.Container>
{/if}
