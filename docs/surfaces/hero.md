+++
[[properties."Hero.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Hero

`Hero` is a multi-part surface pattern for displaying banner text with subtitling and actions, typically used for landing pages, error messages, and loading placeholders.

<!-- prettier-ignore -->
```html repl Hero Preview
<script>
    import {Button, Hero} from "@kahi-ui/framework";
</script>

<Hero.Container palette="negative" height="viewport-100">
    <Hero.Header>404</Hero.Header>
    <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

    <Hero.Footer>
        <Button palette="light" variation="clear">Go Back</Button>
        <Button palette="accent">Submit Ticket</Button>
    </Hero.Footer>
</Hero.Container>
```

## Imports

```html default Hero Imports
<script>
    import {Hero} from "@kahi-ui/framework";

    const {Container, Footer, Header, Section} = Hero;
</script>
```

## Palette

You can change the color palette of the `Hero` via the `palette` property.

<!-- prettier-ignore -->
```html repl Hero Palette
<script>
    import {Button, Hero, Stack} from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <Hero.Container>
        <Hero.Header>404 (DEFAULT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="accent" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="accent">
        <Hero.Header>404 (ACCENT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="dark">
        <Hero.Header>404 (DARK)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="light">
        <Hero.Header>404 (LIGHT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="dark" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="alert">
        <Hero.Header>404 (ALERT)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="affirmative">
        <Hero.Header>404 (AFFIRMATIVE)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="negative">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="negative">
        <Hero.Header>404 (NEGATIVE)</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="accent">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>
</Stack>
```
