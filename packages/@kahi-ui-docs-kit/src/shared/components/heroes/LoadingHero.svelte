<script lang="ts">
    import {Hero, Spinner} from "@kahi-ui/framework";
</script>

<Hero.Container {...$$props} class="loading-hero">
    <Hero.Header>
        <Spinner />
    </Hero.Header>

    <Hero.Section>Currently loading page...</Hero.Section>
</Hero.Container>
