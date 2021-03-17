<script>
    import {Card} from "@kahi-ui/svelte";

    export let heading = "N/A";
</script>

<Card.Container class="heading-card">
    <Card.Heading>{heading}</Card.Heading>

    <Card.Body>
        <slot />
    </Card.Body>
</Card.Container>

<style>
    :global(.heading-card) {
        --card-heading-font-size: var(--typography-heading-5-font-size);
    }
</style>
