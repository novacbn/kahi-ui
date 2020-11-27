<script>
    import {Anchor, Hero, Modifiers} from "@kahi-ui/svelte";
</script>

<Hero.Container size="viewport">
    <Hero.Heading>404</Hero.Heading>
    <Hero.Body>Page Not Found</Hero.Body>

    <Hero.Footer>
        The page you were
        <Modifiers.Bold>looking for</Modifiers.Bold>
        was
        <Modifiers.Bold>not found</Modifiers.Bold>. Please go back
        <Anchor href="#/">to the homepage</Anchor>.
    </Hero.Footer>
</Hero.Container>
