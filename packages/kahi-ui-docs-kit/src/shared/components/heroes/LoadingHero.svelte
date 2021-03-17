<script>
    import {Hero} from "@kahi-ui/svelte";
    import {IconRefreshCcw} from "svelte-feather";

    export let size = "parent";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <IconRefreshCcw size="1em" />
    </Hero.Heading>

    <Hero.Body>Currently loading page...</Hero.Body>
</Hero.Container>
