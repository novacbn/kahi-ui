<script>
    import {Box, Button, Group} from "@kahi-ui/svelte";

    import {DEFAULT_SYNTAX} from "../../shared/environment";

    export let syntax = DEFAULT_SYNTAX;
    export let syntaxes = [];

    function on_click(_syntax, event) {
        syntax = _syntax;
    }
</script>

<Box palette="light">
    <Group>
        {#each syntaxes as _syntax (_syntax)}
            <Button
                palette="dark"
                variation="clear"
                active={syntax === _syntax}
                on:click={on_click.bind(null, _syntax)}
            >
                {_syntax.toUpperCase()}
            </Button>
        {/each}
    </Group>
</Box>
