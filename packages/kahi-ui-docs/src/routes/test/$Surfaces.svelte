<script context="module">
    export const SURFACES_MANIFEST = [
        {id: "surfaces-boxes", text: "Boxes"},
        {id: "surfaces-cards", text: "Cards"},
        {id: "surfaces-heroes", text: "Heroes"},
        {id: "surfaces-tiles", text: "Tiles"},
    ];
</script>

<script>
    import {
        Anchor,
        Box,
        Button,
        Card,
        Divider,
        Grid,
        Heading,
        Hero,
        Modifiers,
        Paragraph,
        Tile,
    } from "@kahi-ui/svelte";

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
        <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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

    <Grid points="3 2+small 1+tiny" spacing="medium">
        <Card.Container>
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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
            <Card.Figure><img src="/assets/images/background.jpg" /></Card.Figure>

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

    <Hero.Container>
        <Hero.Heading>404</Hero.Heading>
        <Hero.Body>Page Not Found</Hero.Body>

        <Hero.Footer>
            The page you were
            <Modifiers.Bold>looking for</Modifiers.Bold>
            was
            <Modifiers.Bold>not found</Modifiers.Bold>. Please go back
            <Anchor href="#surfaces-hero">to the homepage</Anchor>.
        </Hero.Footer>
    </Hero.Container>

    <Heading level={2}>Hero Palettes</Heading>

    <Grid points="2 1+tiny" spacing="medium">
        <Hero.Container>
            <Hero.Heading>Hero DEFAULT</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="accent">
            <Hero.Heading>Hero ACCENT</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="dark">
            <Hero.Heading>Hero DARK</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="light">
            <Hero.Heading>Hero LIGHT</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="alert">
            <Hero.Heading>Hero ALERT</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="affirmative">
            <Hero.Heading>Hero AFFIRMATIVE</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>

        <Hero.Container palette="negative">
            <Hero.Heading>Hero NEGATIVE</Hero.Heading>
            <Hero.Body>Content body of a Hero</Hero.Body>
            <Hero.Footer>And the content footer of a Hero</Hero.Footer>
        </Hero.Container>
    </Grid>

    <Heading level={2}>Hero Sizes</Heading>

    <Hero.Container palette="accent" size="viewport">
        <Hero.Heading>Hero VIEWPORT</Hero.Heading>
        <Hero.Body>My height matches your Browser's viewport height!</Hero.Body>
        <Hero.Footer>And the content footer of a Hero</Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="dark" size="parent">
        <Hero.Heading>Hero VIEWPORT</Hero.Heading>
        <Hero.Body>
            My height matches the containing parent element's height!
            <Modifiers.Small>
                <Modifiers.Italic>(if applicable)</Modifiers.Italic>
            </Modifiers.Small>
        </Hero.Body>
        <Hero.Footer>And the content footer of a Hero</Hero.Footer>
    </Hero.Container>
</article>

<Divider />

<article id="surfaces-tiles">
    <Heading>Surfaces :: Tiles</Heading>

    <Tile.Container palette="light" for>
        <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

        <Tile.Body>
            <Tile.Heading>VirusBuster.EXE</Tile.Heading>
            <Paragraph>I go around stopping the viruses from infecting you!</Paragraph>
            <Modifiers.Small>22 minutes ago</Modifiers.Small>
        </Tile.Body>

        <Tile.Footer><input type="checkbox" role="switch" data-palette="negative" /></Tile.Footer>
    </Tile.Container>

    <Heading level={2}>Tile Palettes</Heading>

    <Grid points="2 1+tiny" spacing="medium">
        <Tile.Container>
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile DEFAULT</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="accent">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile ACCENT</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="dark">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile DARK</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="light">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile LIGHT</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="alert">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile ALERT</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="affirmative">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile AFFIRMATIVE</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>

        <Tile.Container palette="negative">
            <Tile.Figure><img src="/assets/images/avatar.png" /></Tile.Figure>

            <Tile.Body>
                <Tile.Heading>Tile NEGATIVE</Tile.Heading>
                <Paragraph>I am some kind of description text!</Paragraph>
                <Modifiers.Small>But I am a timestamp or something!</Modifiers.Small>
            </Tile.Body>
        </Tile.Container>
    </Grid>
</article>
