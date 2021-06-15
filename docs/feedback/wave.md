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

```html repl Wave Preview
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

```html repl Wave Palette
<script>
    import {Stack, Text, Wave} from "@kahi-ui/framework";
</script>

<Stack spacing="medium" orientation="horizontal">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Wave />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Wave palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Wave palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Wave palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Wave palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Wave palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Wave palette="negative" />
    </div>
</Stack>
```

## Size

You can change the size of the `Wave` via the `palette` property.

```html repl Wave Size
<script>
    import {Stack, Text, Wave} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Wave />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Wave size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Wave size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Wave size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Wave size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Wave size="huge" />
    </div>
</Stack>
```
