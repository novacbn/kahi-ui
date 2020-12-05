<script>
    import {Button, Hero, Modifiers, Stack} from "@kahi-ui/svelte";

    export let resumable = false;
</script>

<Hero.Container palette="accent">
    <Hero.Heading>Welcome to Kahi UI Playground</Hero.Heading>
    <Hero.Body>
        With the
        <Modifiers.Bold>Playground</Modifiers.Bold>, you can create REPLs for testing layouts.
    </Hero.Body>

    <Hero.Footer>
        <Stack orientation="horizontal" spacing="medium">
            {#if resumable}
                <Button href="#/repl" palette="affirmative">Continue last Workspace</Button>
            {:else}
                <Button href="#/repl" palette="affirmative">Create new Workspace</Button>
            {/if}

            <Button href="#/repl/create" palette="light" variation="outline">
                Create from Template
            </Button>
        </Stack>
    </Hero.Footer>
</Hero.Container>
