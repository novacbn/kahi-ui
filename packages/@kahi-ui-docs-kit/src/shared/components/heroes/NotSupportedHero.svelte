<script lang="ts">
    import {Hero, Text} from "@kahi-ui/framework";
    import {XOctagon} from "svelte-feather/components/XOctagon";
</script>

<Hero.Container {...$$props}>
    <Hero.Header>
        <XOctagon />
    </Hero.Header>

    <Hero.Section>
        Your client is either
        <Text is="strong">not supported</Text>
        or has <Text is="strong">Javascript</Text> disabled!
    </Hero.Section>
</Hero.Container>
