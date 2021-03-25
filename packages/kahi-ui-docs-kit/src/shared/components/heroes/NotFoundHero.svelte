<script>
    import {Anchor, Hero, Modifiers} from "@kahi-ui/svelte";
    import {Map} from "svelte-feather/components/Map";

    export let size = "parent";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <Map />
    </Hero.Heading>

    <Hero.Body>
        The page you were
        <Modifiers.Bold>looking for</Modifiers.Bold>
        was
        <Modifiers.Bold>not found</Modifiers.Bold>. Please go back
        <Anchor href="/">to the homepage</Anchor>.
    </Hero.Body>
</Hero.Container>
