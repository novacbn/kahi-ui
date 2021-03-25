<script>
    import {Hero, Modifiers} from "@kahi-ui/svelte";
    import {XOctagon} from "svelte-feather/components/XOctagon";

    export let size = "parent";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <XOctagon />
    </Hero.Heading>

    <Hero.Body>
        Your client is either
        <Modifiers.Bold>not supported</Modifiers.Bold>
        or has <Modifiers.Bold>Javascript</Modifiers.Bold> disabled!
    </Hero.Body>
</Hero.Container>
