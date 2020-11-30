<script>
    import {Modifiers, Tile} from "@kahi-ui/svelte";

    export let workspace = {};

    $: ({identifier, title} = workspace);
</script>

{#if identifier}
    <Tile.Container href="#/repl/{identifier}" palette="light">
        <Tile.Body>
            <Tile.Heading>{title}</Tile.Heading>
            <Modifiers.Small>{identifier}</Modifiers.Small>
        </Tile.Body>
    </Tile.Container>
{:else}
    <Tile.Container palette="light">
        <Tile.Body>
            <Tile.Heading>Loading Workspace...</Tile.Heading>
        </Tile.Body>
    </Tile.Container>
{/if}
