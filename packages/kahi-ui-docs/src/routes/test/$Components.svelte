<script context="module">
    export const COMPONENTS_MANIFEST = [
        {id: "components-button", text: "Buttons"},
        {id: "components-badges", text: "Badges"},
        {id: "components-dividers", text: "Dividers"},
        {id: "components-dots", text: "Dots"},
        {id: "components-loaders", text: "Loaders"},
        {id: "components-placeholders", text: "Placeholders"},
        {id: "components-spacers", text: "Spacers"},
        {id: "components-tabs", text: "Tabs"},
    ];
</script>

<script>
    import {Box, Button, Divider, Heading} from "@kahi-ui/svelte";

    import * as Menus from "../../components/menus";
</script>

<article id="components">
    <Menus.Contents links={COMPONENTS_MANIFEST} heading="Table of Contents" palette="light" />
</article>

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

<article id="components-badges">
    <Heading>Components :: Badge</Heading>
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
</article>

<Divider />

<article id="components-loaders">
    <Heading>Components :: Loaders</Heading>
</article>
