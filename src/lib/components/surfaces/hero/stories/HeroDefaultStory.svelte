<script>
    import Button from "../../../interactables/button/Button.svelte";

    import * as Hero from "../index";

</script>

<Hero.Container {...$$props} palette="negative" height="viewport-100">
    <Hero.Header>404</Hero.Header>
    <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

    <Hero.Footer>
        <Button palette="light" variation="clear">Go Back</Button>
        <Button palette="accent">Submit Ticket</Button>
    </Hero.Footer>
</Hero.Container>
