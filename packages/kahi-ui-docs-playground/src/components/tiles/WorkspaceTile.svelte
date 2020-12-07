<script>
    import {createEventDispatcher} from "svelte";

    import {Button, Modifiers, Tile} from "@kahi-ui/svelte";
    import {IconTrash2} from "svelte-feather";

    const dispatch = createEventDispatcher();

    export let workspace = {};

    function on_delete_click(event) {
        event.preventDefault();

        dispatch("delete", {workspace});
    }

    $: ({identifier = "unknown", title = "N/A"} = workspace);
</script>

<style>
    span {
        margin-right: var(--spacing-text-small);
    }
</style>

<Tile.Container href="#/repl/workspace/{identifier}" palette="light">
    <Tile.Body>
        <Tile.Heading>{title}</Tile.Heading>
        <Modifiers.Small>{identifier}</Modifiers.Small>
    </Tile.Body>

    <Tile.Footer>
        <Button palette="negative" size="small" on:click={on_delete_click}>
            <span><IconTrash2 size="1em" /></span>
            REMOVE
        </Button>
    </Tile.Footer>
</Tile.Container>
