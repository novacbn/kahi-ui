<script>
    import {
        Box,
        Badge,
        Button,
        Container,
        Divider,
        Dot,
        Heading,
        Loader,
        Paragraph,
        Spacer,
    } from "@kahi-ui/svelte";
</script>

<Container>
    <article id="components-badges">
        <Heading>Components :: Badges</Heading>

        <Badge>Badge DEFAULT</Badge>

        <Heading level="2">Badge Palettes</Heading>

        <Badge>Badge DEFAULT</Badge>

        <Badge palette="accent">Badge ACCENT</Badge>

        <Badge palette="dark">Badge DARK</Badge>
        <Badge palette="light">Badge LIGHT</Badge>

        <Badge palette="alert">Badge ALERT</Badge>
        <Badge palette="affirmative">Badge AFFIRMATIVE</Badge>
        <Badge palette="negative">Badge NEGATIVE</Badge>

        <Heading level="2">Badge Sizes</Heading>

        <Badge size="tiny">Badge TINY</Badge>
        <Badge size="small">Badge SMALL</Badge>

        <Badge>Badge DEFAULT</Badge>

        <Badge size="large">Badge LARGE</Badge>
        <Badge size="huge">Badge HUGE</Badge>

        <Heading level="2">Badge Shapes</Heading>

        <Badge shape="pill">Badge PILL</Badge>

        <Heading level="2">Badge Position</Heading>

        <span>
            This is sample text.
            <Badge position="raised">Badge RAISED</Badge>
        </span>

        <Spacer spacing="huge" />

        <Button>
            This is a sample Button
            <Badge palette="accent" position="floated">Badge FLOATED</Badge>
        </Button>

        <Heading level="2">Badge Animations</Heading>

        <Button palette="accent">
            Open Inbox
            <Badge palette="negative" position="floated" animation="pulse">99+</Badge>
        </Button>
    </article>

    <Divider />

    <article id="components-buttons">
        <Heading>Components :: Buttons</Heading>

        <Button>Button DEFAULT</Button>
        <Button active>Button ACTIVE</Button>
        <Button disabled>Button DISABLED</Button>

        <Heading level="2">Block Palettes</Heading>

        <Button>Block DEFAULT</Button>

        <Button palette="accent">Block ACCENT</Button>

        <Button palette="dark">Block DARK</Button>
        <Button palette="light">Block LIGHT</Button>

        <Button palette="alert">Block ALERT</Button>
        <Button palette="affirmative">Block AFFIRMATIVE</Button>
        <Button palette="negative">Block NEGATIVE</Button>

        <Heading level="2">Clear Palettes</Heading>

        <Button variation="clear">Clear ACCENT</Button>

        <Button variation="clear" palette="accent">Clear DEFAULT</Button>

        <Button variation="clear" palette="dark">Clear DARK</Button>
        <Button variation="clear" palette="light">Clear LIGHT</Button>

        <Button variation="clear" palette="alert">Clear ALERT</Button>
        <Button variation="clear" palette="affirmative">Clear AFFIRMATIVE</Button>
        <Button variation="clear" palette="negative">Clear NEGATIVE</Button>

        <Heading level="2">Outline Palettes</Heading>

        <Button variation="outline">Outline DEFAULT</Button>

        <Button variation="outline" palette="accent">Outline ACCENT</Button>

        <Button variation="outline" palette="dark">Outline DARK</Button>
        <Button variation="outline" palette="light">Outline LIGHT</Button>

        <Button variation="outline" palette="alert">Outline ALERT</Button>
        <Button variation="outline" palette="affirmative">Outline AFFIRMATIVE</Button>
        <Button variation="outline" palette="negative">Outline NEGATIVE</Button>

        <Heading level="2">Button Sizes</Heading>

        <Button size="tiny">Button TINY</Button>
        <Button size="small">Button SMALL</Button>

        <Button>Button DEFAULT</Button>

        <Button size="large">Button LARGE</Button>
        <Button size="huge">Button HUGE</Button>

        <Heading level="2">Button Shapes</Heading>

        <Button shape="pill">Block PILL</Button>
        <Button shape="pill" variation="clear">Clear PILL</Button>
        <Button shape="pill" variation="outline">Outline PILL</Button>
    </article>

    <Divider />

    <article id="components-dividers">
        <Heading>Components :: Dividers</Heading>

        <Box>
            <Divider />
        </Box>

        <Heading level={2}>Divider Palettes</Heading>

        <Box>
            <Divider />

            <Divider palette="accent" />

            <Divider palette="dark" />
            <Divider palette="light" />

            <Divider palette="alert" />
            <Divider palette="affirmative" />
            <Divider palette="negative" />
        </Box>

        <Heading level={2}>Text Separator Palettes</Heading>

        <Box>
            <Divider>Separator DEFAULT</Divider>

            <Divider palette="accent">Separator ACCENT</Divider>

            <Divider palette="dark">Separator DARK</Divider>
            <Divider palette="light">Separator LIGHT</Divider>

            <Divider palette="alert">Separator ALERT</Divider>
            <Divider palette="affirmative">Separator AFFIRMATIVE</Divider>
            <Divider palette="negative">Separator NEGATIVE</Divider>
        </Box>
    </article>

    <Divider />

    <article id="components-dots">
        <Heading>Components :: Dots</Heading>

        <Dot />

        <Heading level="2">Dot Palettes</Heading>

        <Dot />

        <Dot palette="accent" />

        <Dot palette="dark" />
        <Dot palette="light" />

        <Dot palette="alert" />
        <Dot palette="affirmative" />
        <Dot palette="negative" />

        <Heading level="2">Dot Position</Heading>

        <span>
            This is sample text. (RAISED)
            <Dot position="raised" />
        </span>

        <Spacer spacing="huge" />

        <Button>
            This is a sample Button (FLOATED)
            <Dot palette="accent" position="floated" />
        </Button>

        <Heading level="2">Dot Animations</Heading>

        <Button palette="affirmative" variation="outline">
            Save Available Changes?
            <Dot palette="negative" position="floated" animation="pulse" />
        </Button>
    </article>

    <Divider />

    <article id="components-loaders">
        <Heading>Components :: Loaders</Heading>

        <Paragraph>Await Loader</Paragraph>
        <Loader variation="await" />

        <Paragraph>Wave Loader</Paragraph>
        <Loader variation="wave" />

        <Heading level="2">Await Palettes</Heading>

        <Paragraph>Await DEFAULT</Paragraph>
        <Loader variation="await" />

        <Paragraph>Await ACCENT</Paragraph>
        <Loader variation="await" palette="accent" />

        <Paragraph>Await DARK</Paragraph>
        <Loader variation="await" palette="dark" />

        <Paragraph>Await LIGHT</Paragraph>
        <Loader variation="await" palette="light" />

        <Paragraph>Await ALERT</Paragraph>
        <Loader variation="await" palette="alert" />

        <Paragraph>Await AFFIRMATIVE</Paragraph>
        <Loader variation="await" palette="affirmative" />

        <Paragraph>Await NEGATIVE</Paragraph>
        <Loader variation="await" palette="negative" />

        <Heading level="2">Await Sizes</Heading>

        <Paragraph>Await TINY</Paragraph>
        <Loader variation="await" size="tiny" />

        <Paragraph>Await SMALL</Paragraph>
        <Loader variation="await" size="small" />

        <Paragraph>Await MEDIUM</Paragraph>
        <Loader size="medium" />

        <Paragraph>Await LARGE</Paragraph>
        <Loader variation="await" size="large" />

        <Paragraph>Await HUGE</Paragraph>
        <Loader variation="await" size="huge" />

        <Heading level="2">Wave Palettes</Heading>

        <Paragraph>Wave DEFAULT</Paragraph>
        <Loader variation="wave" />

        <Paragraph>Wave ACCENT</Paragraph>
        <Loader variation="wave" palette="accent" />

        <Paragraph>Wave DARK</Paragraph>
        <Loader variation="wave" palette="dark" />

        <Paragraph>Wave LIGHT</Paragraph>
        <Loader variation="wave" palette="light" />

        <Paragraph>Wave ALERT</Paragraph>
        <Loader variation="wave" palette="alert" />

        <Paragraph>Wave AFFIRMATIVE</Paragraph>
        <Loader variation="wave" palette="affirmative" />

        <Paragraph>Wave NEGATIVE</Paragraph>
        <Loader variation="wave" palette="negative" />

        <Heading level="2">Await Sizes</Heading>

        <Paragraph>Wave TINY</Paragraph>
        <Loader variation="wave" size="tiny" />

        <Paragraph>Wave SMALL</Paragraph>
        <Loader variation="wave" size="small" />

        <Paragraph>Wave MEDIUM</Paragraph>
        <Loader variation="wave" size="medium" />

        <Paragraph>Wave LARGE</Paragraph>
        <Loader variation="wave" size="large" />

        <Paragraph>Wave HUGE</Paragraph>
        <Loader variation="wave" size="huge" />
    </article>
</Container>
