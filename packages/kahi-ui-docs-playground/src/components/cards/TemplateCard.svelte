<script>
    import {Button, Card} from "@kahi-ui/svelte";

    export let sample = {};

    $: ({description = "N/A", title = "N/A", syntax = "unknown"} = sample);
</script>

<Card.Container palette="light">
    <Card.Heading>
        {title}
        <span class="badge" data-palette="accent">{syntax.toUpperCase()}</span>
    </Card.Heading>

    <Card.Body>{description}</Card.Body>

    <Card.Footer>
        <Button palette="affirmative" on:click>USE TEMPLATE</Button>
    </Card.Footer>
</Card.Container>
