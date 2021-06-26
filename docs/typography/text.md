+++
[[properties.Text]]
name="is"
description="Changes the HTML tag used for rendering the text, altering its appearance."
default="p"
types=["abbr", "b", "del", "em", "i", "ins", "kbd", "mark", "p", "pre", "s", "samp", "small", "span", "strong", "sub", "sup", "u"]

[[properties.Text]]
name="align"
description="Changes how the text is aligned within the containing box."
types=["center", "justify", "left", "right"]

[[properties.Text]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Text]]
name="size"
description="Changes how big the text will be rendered."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Text]]
name="transform"
description="Alters how the text casing is rendered."
types=["capitalize", "lowercase", "uppercase"]

[[properties.Text]]
name="variation"
description="Removes parent container overflow from the render, clipping text with an ellipsis."
types=["truncate"]
+++

# Text

`Text` is used to render paragraphs of text in your interface, among other types of text.

```svelte repl Text Preview
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Proin et consectetur orci. Curabitur a
    egestas turpis, vitae convallis sapien. Sed
    pellentesque rutrum tellus, in iaculis dolor
    tincidunt non. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus
    mus.
</Text>
```

## Imports

```html default Text Imports
<script>
    import {Text} from "@kahi-ui/framework";
</script>
```

## Size

You can adjust the size of `Text` by passing the `size` property.

```svelte repl Text Size
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack
    class="text-size"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Text size="tiny">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Text size="small">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Text size="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Text size="large">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Text size="huge">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-size > div) {
        max-width: 25ch;
    }
</style>
```

## Align

You can adjust the text alignment of the `Text` via the `align` property.

```svelte repl Text Align
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">CENTER</Text>
        <Text align="center">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">JUSTIFY</Text>
        <Text align="justify">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LEFT</Text>
        <Text align="left">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">RIGHT</Text>
        <Text align="right">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>
```

## Transform

You can alter the rendered text capitalization via the `transform` property.

```svelte repl Text Transform
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack
    class="text-transform"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">CAPITALIZE</Text>
        <Text transform="capitalize">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LOWERCASE</Text>
        <Text transform="lowercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">UPPERCASE</Text>
        <Text transform="uppercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-transform > div) {
        max-width: 25ch;
    }
</style>
```

## Variation

You can apply variations to the rendered text, like truncating, via the `variation` property.

```svelte repl Text Variation
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack class="text-variation" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">TRUNCATE</Text>
        <Text variation="truncate">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-variation > div) {
        max-width: 50ch;
    }
</style>
```

## Pre Formatted

You can render text with whitespace and linebreaks preserved via the `is` property.

<!-- prettier-ignore -->
```svelte repl Text Pre Formatted
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text is="pre">
P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9
</Text>
```

## Other Tags

You can also access most of the other HTML text tags via the `is` property.

```svelte repl Text Other Tags
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack alignment_x="left" spacing="medium">
    <Text is="abbr">Abbreviation</Text>

    <Text is="b">Bold</Text>
    <Text is="strong">Strong</Text>

    <Text is="del">Deleted</Text>
    <Text is="s">Strikethrough</Text>

    <Text is="em">Emphasis</Text>
    <Text is="i">Italic</Text>

    <Text is="ins">Inserted</Text>
    <Text is="u">Underline</Text>

    <Text is="kbd">CTRL + C</Text>
    <Text is="mark">Highlighted</Text>
    <Text is="samp">Sample</Text>

    <Text is="sub">sub</Text>
    <Text is="sup">sup</Text>
</Stack>
```
