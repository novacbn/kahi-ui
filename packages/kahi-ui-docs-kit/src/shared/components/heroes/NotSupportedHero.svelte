<script>
    import {Hero, Modifiers} from "@kahi-ui/svelte";
    import {IconXOctagon} from "svelte-feather";
</script>

<Hero.Container size="viewport">
    <Hero.Heading>
        <IconXOctagon size="1em" />
    </Hero.Heading>

    <Hero.Body>
        Your client is either
        <Modifiers.Bold>not supported</Modifiers.Bold>
        or has <Modifiers.Bold>Javascript</Modifiers.Bold> disabled!
    </Hero.Body>
</Hero.Container>
