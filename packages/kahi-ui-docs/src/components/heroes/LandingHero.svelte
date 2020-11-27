<script>
    import {Button, Hero} from "@kahi-ui/svelte";
</script>

<style>
    :global(.landing-hero-body) {
        margin-top: var(--spacing-block-large);
    }
</style>

<Hero.Container palette="light" size="viewport">
    <Hero.Heading>Straight-forward UI for the Modern Web Application</Hero.Heading>

    <Hero.Body class="landing-hero-body">
        <Button href="#/documentation/getting-started" palette="accent" size="small">
            Getting Started
        </Button>

        <Button href="./test" target="_blank" palette="dark" variation="outline" size="small">
            Render Test
        </Button>
    </Hero.Body>
</Hero.Container>
