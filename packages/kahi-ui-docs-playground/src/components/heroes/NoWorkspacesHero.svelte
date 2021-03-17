<script>
    import {IconSearch} from "svelte-feather";
    import {Hero} from "@kahi-ui/svelte";

    export let size = undefined;
</script>

<Hero.Container {size}>
    <Hero.Heading>
        <IconSearch size="1em" />
    </Hero.Heading>

    <Hero.Body>No Workspaces Available</Hero.Body>
</Hero.Container>
