<script>
    import {Button, Hero, Modifiers, Stack} from "@kahi-ui/svelte";

    import {DEFAULT_CONTENT, DEFAULT_SYNTAX} from "../../shared/environment";

    export let recent_workspace = null;
</script>

<Hero.Container palette="accent">
    <Hero.Heading>Welcome to Kahi UI Playground</Hero.Heading>
    <Hero.Body>
        With the
        <Modifiers.Bold>Playground</Modifiers.Bold>, you can create REPLs for testing layouts and
        functionality.
    </Hero.Body>

    <Hero.Footer>
        <Stack orientation="horizontal" spacing="medium">
            {#if recent_workspace}
                <Button href="/repl?workspace={recent_workspace}" palette="affirmative">
                    Continue last Workspace
                </Button>
            {:else}
                <Button
                    href="/repl/create/new?sample={DEFAULT_CONTENT}&syntax={DEFAULT_SYNTAX}"
                    palette="affirmative"
                >
                    Create new Workspace
                </Button>
            {/if}

            <Button href="/repl/create" palette="light" variation="outline">
                Create from Sample
            </Button>
        </Stack>
    </Hero.Footer>
</Hero.Container>
