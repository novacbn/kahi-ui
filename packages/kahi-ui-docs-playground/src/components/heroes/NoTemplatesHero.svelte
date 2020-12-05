<script>
    import {IconBook} from "svelte-feather";
    import {Formatting, Hero, Modifiers} from "@kahi-ui/svelte";

    export let syntax = "unknown";
</script>

<Hero.Container>
    <Hero.Heading>
        <IconBook size="1em" />
    </Hero.Heading>

    <Hero.Body>
        No Templates for
        <Modifiers.Small>
            <Formatting.Code>{syntax.toUpperCase()}</Formatting.Code>
        </Modifiers.Small>
        Found
    </Hero.Body>
</Hero.Container>
