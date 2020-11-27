<script>
    import {Card} from "@kahi-ui/svelte";

    export let heading = "N/A";
</script>

<style>
    :global(.landing-card) {
        --card-heading-font-size: var(--typography-heading-5-font-size);
    }
</style>

<Card.Container class="landing-card">
    <Card.Heading>{heading}</Card.Heading>

    <Card.Body>
        <slot />
    </Card.Body>
</Card.Container>
