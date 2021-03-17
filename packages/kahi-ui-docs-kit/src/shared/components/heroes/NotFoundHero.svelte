<script>
    import {Anchor, Hero, Modifiers} from "@kahi-ui/svelte";
    import {IconMap} from "svelte-feather";
</script>

<Hero.Container size="viewport">
    <Hero.Heading>
        <IconMap size="1em" />
    </Hero.Heading>

    <Hero.Body>
        The page you were
        <Modifiers.Bold>looking for</Modifiers.Bold>
        was
        <Modifiers.Bold>not found</Modifiers.Bold>. Please go back
        <Anchor href="/">to the homepage</Anchor>.
    </Hero.Body>
</Hero.Container>
