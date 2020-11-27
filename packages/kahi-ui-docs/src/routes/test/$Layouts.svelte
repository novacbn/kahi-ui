<script context="module">
    export const LAYOUTS_MANIFEST = [
        {id: "layouts-grid", text: "Grid"},
        {id: "layouts-group", text: "Group"},
        {id: "layouts-mosaic", text: "Mosaic"},
        {id: "layouts-stack", text: "Stack"},
    ];
</script>

<script>
    import {Box, Button, Divider, Grid, Group, Heading, Mosaic, Stack} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<article id="layouts">
    <Menus.Contents links={LAYOUTS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="layouts-grid">
    <Heading>Layouts :: Grid</Heading>

    <Grid points="4 1+tiny 2+small 3+medium" spacing="large">
        <Box palette="light">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>

        <Box palette="dark">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>

        <Box palette="accent">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>

        <Box palette="light">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>

        <Box palette="dark">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>

        <Box palette="accent">
            <span data-hidden="tiny small medium">4 Grid Points</span>
            <span data-hidden="tiny small large">3 Grid Points</span>
            <span data-hidden="tiny medium large">2 Grid Points</span>
            <span data-hidden="small medium large">1 Grid Points</span>
        </Box>
    </Grid>
</article>

<Divider />

<article id="layouts-group">
    <Heading>Layouts :: Group</Heading>

    <Group>
        <Button palette="negative" size="small">Subscribe</Button>
        <span class="badge">+922</span>
    </Group>

    <Heading level={2}>Horizontal Group</Heading>

    <Group>
        <Button>Button #1</Button>
        <Button palette="accent">Button #2</Button>
        <Button palette="dark">Button #3</Button>
        <Button palette="light">Button #4</Button>
        <Button palette="alert">Button #5</Button>
        <Button palette="affirmative">Button #6</Button>
        <Button palette="negative">Button #7</Button>
    </Group>

    <Heading level={2}>Vertical Group</Heading>

    <Group orientation="vertical">
        <Button>Button #1</Button>
        <Button palette="accent">Button #2</Button>
        <Button palette="dark">Button #3</Button>
        <Button palette="light">Button #4</Button>
        <Button palette="alert">Button #5</Button>
        <Button palette="affirmative">Button #6</Button>
        <Button palette="negative">Button #7</Button>
    </Group>
</article>

<Divider />

<article id="layouts-mosaic">
    <Heading>Layouts :: Mosaic</Heading>

    <Mosaic sizing="large medium+tiny" spacing="huge medium+small">
        <Box palette="light">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>

        <Box palette="dark">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>

        <Box palette="accent">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>

        <Box palette="light">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>

        <Box palette="dark">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>

        <Box palette="accent">
            <span data-hidden="tiny">Large Sizing</span>
            <span data-hidden="small medium large">Medium Sizing</span>

            <Divider />

            <span data-hidden="small">Huge Spacing</span>
            <span data-hidden="tiny medium large">Medium Spacing</span>
        </Box>
    </Mosaic>
</article>

<Divider />

<!--
    TODO: Add alignment samples
-->

<article id="layouts-stack">
    <Heading>Layouts :: Stack</Heading>

    <Stack>
        <Box>Item #1</Box>
        <Box>Item #2</Box>
        <Box>Item #3</Box>
    </Stack>

    <Heading level={2}>Vertical Stack w/ Spacing</Heading>

    <Stack spacing="medium">
        <Box>Item #1</Box>
        <Box>Item #2</Box>
        <Box>Item #3</Box>
    </Stack>

    <Heading level={2}>Horizontal Stack w/ Spacing</Heading>

    <Stack orientation="horizontal" spacing="medium">
        <Box>Item #1</Box>
        <Box>Item #2</Box>
        <Box>Item #3</Box>
    </Stack>
</article>
