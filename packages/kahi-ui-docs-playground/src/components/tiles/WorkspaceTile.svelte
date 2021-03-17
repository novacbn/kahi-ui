<script>
    import {createEventDispatcher} from "svelte";

    import {Button, Modifiers, Spacer, Tile} from "@kahi-ui/svelte";
    import {IconTrash2} from "svelte-feather";

    const dispatch = createEventDispatcher();

    export let workspace = {};

    function on_delete_click(event) {
        event.preventDefault();

        dispatch("delete", {workspace});
    }

    $: ({identifier = null, title = "N/A"} = workspace);
</script>

<Tile.Container href="/repl?workspace={identifier}" palette="light">
    <Tile.Body>
        <Tile.Heading>{title}</Tile.Heading>
        <Modifiers.Small>{identifier}</Modifiers.Small>
    </Tile.Body>

    <Tile.Footer>
        <Button palette="negative" size="small" on:click={on_delete_click}>
            <IconTrash2 size="1em" />
            <Spacer orientation="horizontal" spacing="tiny" inline />
            REMOVE
        </Button>
    </Tile.Footer>
</Tile.Container>
