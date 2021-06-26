+++
[[properties."Blockquote.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Blockquote

`Blockquote` is typically used to render a block of text, that's attributed to a certain source of information.

```svelte repl Blockquote Preview
<script>
    import {
        Blockquote,
        Text,
    } from "@kahi-ui/framework";
</script>

<Blockquote.Container max_width="prose">
    <Text margin_bottom="medium">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris porta, urna vel
        tristique varius, ipsum erat auctor odio, id
        imperdiet mauris velit eget quam. Donec viverra
        urna eu ligula eleifend, sed molestie lectus
        convallis. Nullam gravida placerat ex, sodales
        porttitor nibh. Suspendisse vitae nisi euismod,
        venenatis dui eu, hendrerit risus. Maecenas at
        hendrerit odio, at dictum nulla. Morbi
        tristique, augue vel blandit bibendum, mauris
        nibh finibus justo, ut mollis magna neque in
        lectus.
    </Text>

    <Text margin_bottom="medium">
        Sed dignissim, enim sit amet lobortis
        tincidunt, nibh risus elementum urna, vel
        tincidunt nisi elit vel tortor. Curabitur
        iaculis nulla nec odio efficitur, sit amet
        auctor odio mattis. Aenean quam arcu, feugiat
        non turpis eget, aliquet vestibulum lacus.
    </Text>

    <Blockquote.Cite>— Lorem Ipsum</Blockquote.Cite>
</Blockquote.Container>
```

## Imports

```html default Blockquote Imports
<script>
    import {Blockquote} from "@kahi-ui/framework";

    const {Container, Cite} = Blockquote;
</script>
```

## Palette

You can change the color palette of the `Blockquote.Container` via the `palette` property.

```svelte repl Blockquote Palette
<script>
    import {
        Blockquote,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Blockquote.Container max_width="prose">
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— DEFAULT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="accent"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— ACCENT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="dark"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— DARK</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="light"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— LIGHT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="alert"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— ALERT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="affirmative"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>
            — AFFIRMATIVE
        </Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container
        max_width="prose"
        palette="negative"
    >
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus.
        </Text>

        <Blockquote.Cite>— NEGATIVE</Blockquote.Cite>
    </Blockquote.Container>
</Stack>
```
