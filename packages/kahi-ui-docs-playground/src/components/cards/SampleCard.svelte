<script>
    import {Badge, Button, Card} from "@kahi-ui/svelte";

    export let sample = {};
    export let syntax = null;

    $: ({identifier = null, description = "N/A", title = "N/A"} = sample);
    $: _syntax = sample.syntaxes.includes(syntax) ? syntax : "N/A";
</script>

<Card.Container palette="light">
    <Card.Heading>
        {title}
        <Badge palette="accent">{_syntax.toUpperCase()}</Badge>
    </Card.Heading>

    <Card.Body>{description}</Card.Body>

    <Card.Footer>
        <Button href="/repl/create/new?sample={identifier}&syntax={syntax}" palette="affirmative">
            CREATE FROM SAMPLE
        </Button>
    </Card.Footer>
</Card.Container>
