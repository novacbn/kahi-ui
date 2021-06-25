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

```svelte repl Spinner Palette
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-palette"
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Spinner />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Spinner palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Spinner palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Spinner palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Spinner palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Spinner palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Spinner palette="negative" />
    </div>
</Stack>

<style>
    :global(.spinner-palette .spinner) {
        display: block;
    }
</style>
```

## Size

You can change the size of the `Spinner` via the `size` property.

```svelte repl Spinner Size
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-size"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Spinner />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Spinner size="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Spinner size="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Spinner size="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Spinner size="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Spinner size="huge" />
    </div>
</Stack>

<style>
    :global(.spinner-size .spinner) {
        display: block;
    }
</style>
```

## Dual

`Spinner` components also have a special variation to render with two rotating borders on either side.

```svelte repl Spinner Dual
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-dual"
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Spinner variation="dual" />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Spinner variation="dual" palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Spinner variation="dual" palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Spinner variation="dual" palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Spinner variation="dual" palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Spinner
            variation="dual"
            palette="affirmative"
        />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Spinner variation="dual" palette="negative" />
    </div>
</Stack>

<style>
    :global(.spinner-dual .spinner) {
        display: block;
    }
</style>
```
