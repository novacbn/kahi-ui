<script lang="ts">
    import {Card} from "@kahi-ui/framework";

</script>

<Card.Container {...$$props} class="heading-card">
    <Card.Header>
        <slot name="heading" />
    </Card.Header>

    <Card.Section>
        <slot />
    </Card.Section>
</Card.Container>
