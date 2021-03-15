<script>
    import {Button, Hero, Stack} from "@kahi-ui/svelte";
</script>

<Hero.Container palette="light" size="viewport">
    <Hero.Heading class="landing-hero-heading">
        Straight-forward UI for the Modern Web Application
    </Hero.Heading>

    <Hero.Footer>
        <Stack orientation="horizontal" spacing="small">
            <Button href="/docs" palette="accent">Getting Started</Button>

            <Button
                href="https://novacbn.github.io/kahi-ui/playground"
                target="_blank"
                palette="dark"
                variation="outline"
            >
                Playground
            </Button>
        </Stack>
    </Hero.Footer>
</Hero.Container>

<style>
    :global(.landing-hero-heading) {
        margin-bottom: var(--spacing-block-large);
    }
</style>
