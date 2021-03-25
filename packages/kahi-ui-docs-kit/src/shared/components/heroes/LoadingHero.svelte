<script>
    import {Hero} from "@kahi-ui/svelte";
    import {RefreshCcw} from "svelte-feather/components/RefreshCcw";

    export let size = "parent";
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <RefreshCcw />
    </Hero.Heading>

    <Hero.Body>Currently loading page...</Hero.Body>
</Hero.Container>
