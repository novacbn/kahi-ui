+++
[[properties.Wave]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Wave]]
name="size"
description="Renders the <code>Wave</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]
+++

# Wave

`Wave` is an indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Wave Preview
<script>
    import {Hero, Wave} from "@kahi-ui/framework";
</script>

<Hero.Container margin_top="medium">
    <Hero.Header>Loading</Hero.Header>
    <Hero.Section padding_bottom="medium">
        <Wave size="tiny" />
    </Hero.Section>
</Hero.Container>
```

## Imports

```html default Wave Imports
<script>
    import {Wave} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Wave` via the `palette` property.

```svelte repl Wave Palette
<script>
    import {
        Stack,
        Text,
        Wave,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="wave-palette"
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Wave />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Wave palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Wave palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Wave palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Wave palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Wave palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Wave palette="negative" />
    </div>
</Stack>

<style>
    :global(.wave-palette .wave) {
        display: block;
    }
</style>
```

## Size

You can change the size of the `Wave` via the `size` property.

```svelte repl Wave Size
<script>
    import {
        Stack,
        Text,
        Wave,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="wave-size"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Wave />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Wave size="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Wave size="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Wave size="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Wave size="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Wave size="huge" />
    </div>
</Stack>

<style>
    :global(.wave-size .wave) {
        display: block;
    }
</style>
```
