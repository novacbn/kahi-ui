<script>
    import {Formatting, Hero, Modifiers} from "@kahi-ui/svelte";
    import {IconSearch} from "svelte-feather";

    export let size = undefined;
    export let syntax = "N/A";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <IconSearch size="1em" />
    </Hero.Heading>

    <Hero.Body>
        No Samples were found for
        <Modifiers.Small>
            <Formatting.Code>{syntax.toUpperCase()}</Formatting.Code>
        </Modifiers.Small>
    </Hero.Body>
</Hero.Container>
