<script context="module">
    export const SURFACES_MANIFEST = [
        {id: "surfaces-boxes", text: "Boxes"},
        {id: "surfaces-cards", text: "Cards"},
        {id: "surfaces-heroes", text: "Heroes"},
        {id: "surfaces-tiles", text: "Tiles"},
    ];
</script>

<script>
    import {Box, Button, Card, Divider, Grid, Heading, Modifiers, Paragraph} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<style>
    :global(#render-test-card-sample) {
        max-width: var(--sizing-block-huge);
    }
</style>

<article id="surfaces">
    <Menus.Contents links={SURFACES_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="surfaces-boxes">
    <Heading>Surfaces :: Boxes</Heading>

    <Box>This is a Box!</Box>
    <Box href="#surfaces-box">This is an anchor Box!</Box>

    <Heading level={2}>Box Palettes</Heading>

    <Grid points={3} spacing="medium">
        <Box palette="accent">
            This is a
            <Modifiers.Bold>ACCENT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="dark">
            This is a
            <Modifiers.Bold>DARK</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="light">
            This is a
            <Modifiers.Bold>LIGHT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="alert">
            This is a
            <Modifiers.Bold>ALERT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="affirmative">
            This is a
            <Modifiers.Bold>AFFIRMATIVE</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="negative">
            This is a
            <Modifiers.Bold>NEGATIVE</Modifiers.Bold>
            Box!
        </Box>
    </Grid>

    <Heading level={2}>Outline Palettes</Heading>

    <Grid points={3} spacing="medium">
        <Box palette="accent" variation="outline">
            This is a
            <Modifiers.Bold>ACCENT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="dark" variation="outline">
            This is a
            <Modifiers.Bold>DARK</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="light" variation="outline">
            This is a
            <Modifiers.Bold>LIGHT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="alert" variation="outline">
            This is a
            <Modifiers.Bold>ALERT</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="affirmative" variation="outline">
            This is a
            <Modifiers.Bold>AFFIRMATIVE</Modifiers.Bold>
            Box!
        </Box>

        <Box palette="negative" variation="outline">
            This is a
            <Modifiers.Bold>NEGATIVE</Modifiers.Bold>
            Box!
        </Box>
    </Grid>
</article>

<Divider />

<article id="surfaces-cards">
    <Heading>Surfaces :: Cards</Heading>

    <Card.Container id="render-test-card-sample" palette="light">
        <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

        <Card.Heading>
            Ocean Rockies<span class="badge" data-palette="accent" data-size="tiny">TROPICAL</span>
        </Card.Heading>

        <Card.Body>
            <Paragraph>
                While on vacation, you can also boat around the local waters to see various rock
                formations.
            </Paragraph>

            <Modifiers.Small>$740</Modifiers.Small>
        </Card.Body>

        <Card.Footer>
            <Button variation="clear">Dismiss</Button>
            <Button palette="affirmative">Book</Button>
        </Card.Footer>
    </Card.Container>

    <Heading level={2}>Card Palettes</Heading>

    <Grid points={3} spacing="medium">
        <Card.Container>
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>DEFAULT</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="accent">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>ACCENT</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button palette="light" variation="clear">Cancel</Button>
                <Button>Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="dark">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>DARK</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button palette="light" variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="light">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>LIGHT</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="alert">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>ALERT</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button palette="light" variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="affirmative">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>AFFIRMATIVE</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button palette="light" variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>

        <Card.Container palette="negative">
            <Card.Figure><img src="/test/assets/images/background.jpg" /></Card.Figure>

            <Card.Heading>Card<span>NEGATIVE</span></Card.Heading>

            <Card.Body>
                <Paragraph>I am some kind of description text!</Paragraph>

                <Modifiers.Small>But I am a timestamp or some other!</Modifiers.Small>
            </Card.Body>

            <Card.Footer>
                <Button palette="light" variation="clear">Cancel</Button>
                <Button palette="accent">Edit</Button>
            </Card.Footer>
        </Card.Container>
    </Grid>
</article>

<Divider />

<article id="surfaces-heroes">
    <Heading>Surfaces :: Heroes</Heading>
</article>

<Divider />

<article id="surfaces-tiles">
    <Heading>Surfaces :: Tiles</Heading>
</article>
