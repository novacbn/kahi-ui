<script>
    import {Box, Button, Group} from "@kahi-ui/svelte";

    import {SAMPLE_SYNTAXES} from "../../util/samples";

    const syntaxes = Object.values(SAMPLE_SYNTAXES);

    export let syntax = SAMPLE_SYNTAXES.html;

    function on_click(_syntax, event) {
        syntax = _syntax;
    }
</script>

<Box palette="light">
    <Group>
        {#each syntaxes as _syntax}
            <Button
                palette="dark"
                variation="clear"
                active={syntax === _syntax}
                on:click={on_click.bind(null, _syntax)}>
                {_syntax.toUpperCase()}
            </Button>
        {/each}
    </Group>
</Box>
