<script lang="ts">
    import {Anchor, Hero, Text} from "@kahi-ui/framework";
    import {Map} from "svelte-feather/components/Map";
</script>

<Hero.Container {...$$props} class="not-found-hero">
    <Hero.Header>
        <Map />
    </Hero.Header>

    <Hero.Section>
        The page you were
        <Text is="strong">looking for</Text>
        was
        <Text is="strong">not found</Text>. Please go back
        <Anchor href="/">to the homepage</Anchor>.
    </Hero.Section>
</Hero.Container>
