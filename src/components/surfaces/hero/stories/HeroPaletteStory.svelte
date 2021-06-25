<script>
    import Button from "../../../interactables/button/Button.svelte";
    import * as Grid from "../../../layouts/grid/index";

    import * as Hero from "../index";
</script>

<Grid.Container spacing="medium" points={["2", "desktop:1", "tablet:1", "mobile:1"]}>
    <Hero.Container {...$$props}>
        <Hero.Header>404 (DEFAULT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="accent" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="accent">
        <Hero.Header>404 (ACCENT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="dark">
        <Hero.Header>404 (DARK)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="light">
        <Hero.Header>404 (LIGHT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="dark" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="alert">
        <Hero.Header>404 (ALERT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="affirmative">
        <Hero.Header>404 (AFFIRMATIVE)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container {...$$props} palette="negative">
        <Hero.Header>404 (NEGATIVE)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="accent">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>
</Grid.Container>
