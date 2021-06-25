+++
[[properties.Spinner]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Spinner]]
name="size"
description="Renders the <code>Spinner</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Spinner]]
name="variation"
description="Changes the how the <code>Spinner</code> is rendered."
types=["dual"]
+++

# Spinner

`Spinner` is an indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Spinner Preview
<script>
    import {
        Button,
        Hero,
        Spinner,
    } from "@kahi-ui/framework";
</script>

<Button palette="affirmative" disabled>
    <Spinner variation="dual" />
    Submit Ticket
</Button>

<Hero.Container margin_top="medium">
    <Hero.Header>Loading</Hero.Header>
    <Hero.Section padding_bottom="medium">
        <Spinner size="medium" />
    </Hero.Section>
</Hero.Container>
```

## Imports

```html default Spinner Imports
<script>
    import {Spinner} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Spinner` via the `palette` property.

```html repl Spinner Palette
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium" orientation="horizontal">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Spinner />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Spinner palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Spinner palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Spinner palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Spinner palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Spinner palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Spinner palette="negative" />
    </div>
</Stack>
```

## Size

You can change the size of the `Spinner` via the `size` property.

```html repl Spinner Size
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Spinner />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Spinner size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Spinner size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Spinner size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Spinner size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Spinner size="huge" />
    </div>
</Stack>
```

## Dual

`Spinner` components also have a special variation to render with two rotating borders on either side.

```html repl Spinner Dual
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium" orientation="horizontal">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Spinner variation="dual" />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Spinner variation="dual" palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Spinner variation="dual" palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Spinner variation="dual" palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Spinner variation="dual" palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Spinner
            variation="dual"
            palette="affirmative"
        />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Spinner variation="dual" palette="negative" />
    </div>
</Stack>
```
