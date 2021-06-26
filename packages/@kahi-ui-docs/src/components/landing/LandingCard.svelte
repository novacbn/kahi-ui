<script lang="ts">
    import {Card, Spacer, Text} from "@kahi-ui/framework";
    import type {SvelteComponent} from "svelte";
    import type {SvelteComponentDev} from "svelte/internal";

    import LandingIconFigure from "./LandingIconFigure.svelte";

    export let heading: string = "N/A";
    export let icon: SvelteComponent | SvelteComponentDev;
</script>

<Card.Container>
    <Card.Header>
        {heading}
        <Spacer />
        <LandingIconFigure {icon} />
    </Card.Header>
    <Card.Section padding_bottom="medium">
        <Text size="medium">
            <slot />
        </Text>
    </Card.Section>
</Card.Container>
