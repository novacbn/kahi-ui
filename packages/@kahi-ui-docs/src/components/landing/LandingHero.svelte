<script lang="ts">
    import {Box, Button, Hero, Text} from "@kahi-ui/framework";
    import {ArrowRight} from "svelte-feather/components/ArrowRight";
    import {Github} from "svelte-feather/components/Github";
</script>

<Hero.Container class="landing-hero" palette="dark" height="viewport-100">
    <Hero.Header>
        Easy to use Svelte UI for
        <Box palette="accent">rapid prototyping</Box>
        <!--
            TODO: Typing animation for couple different phrases
        -->
    </Hero.Header>

    <Hero.Section>
        Kahi UI is a composable and flexible design library for Svelte that allows you to go from <Text
            is="strong"
        >
            0
        </Text>
        to <Text is="strong">60</Text> in no time.
    </Hero.Section>

    <Hero.Footer>
        <Button href="/docs/framework/getting-started" palette="accent" size="large">
            Getting Started
            <ArrowRight />
        </Button>

        <Button
            href="https://github.com/novacbn/kahi-ui"
            rel="noopener noreferrer"
            target="_blank"
            palette="light"
            size="large"
            variation="clear"
        >
            <Github />
            GitHub
        </Button>
    </Hero.Footer>
</Hero.Container>

<style>
    :global(.hero.landing-hero > :is(header, section)) {
        max-width: 50ch;
    }
</style>
