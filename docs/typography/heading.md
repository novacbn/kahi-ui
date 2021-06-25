+++
[[properties.Heading]]
name="align"
description="Changes how the text is aligned within the containing box."
types=["center", "justify", "left", "right"]

[[properties.Heading]]
name="is"
description="Changes the HTML tag used for rendering the text, and the text size."
types=["h1", "h2", "h3", "h4", "h5", "h6"]

[[properties.Text]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Heading]]
name="transform"
description="Alters how the text casing is rendered."
types=["capitalize", "lowercase", "uppercase"]

[[properties.Heading]]
name="variation"
description="Removes parent container overflow from the render, clipping text with an ellipsis."
types=["truncate"]
+++

# Heading

`Heading` is typically used for delineating sections of content within your Web Application.

```html repl Heading Preview
<script>
    import {Heading} from "@kahi-ui/framework";
</script>

<Heading>
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Proin et consectetur orci. mus.
</Heading>
```

## Imports

```html default Heading Imports
<script>
    import {Heading} from "@kahi-ui/framework";
</script>
```

## Size

You can adjust the size of `Heading` by passing the `is` property.

```html repl Heading Size
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">H1</Text>

        <Heading is="h1">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H2</Text>

        <Heading is="h2">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H3</Text>

        <Heading is="h3">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H4</Text>

        <Heading is="h4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H5</Text>

        <Heading is="h5">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H6</Text>

        <Heading is="h6">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
```

## Align

You can adjust the text alignment of the `Heading` via the `align` property.

```html repl Heading Align
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">DEFAULT</Text>

        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">CENTER</Text>

        <Heading align="center">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">JUSTIFY</Text>

        <Heading align="justify">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LEFT</Text>

        <Heading align="left">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">RIGHT</Text>

        <Heading align="right">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
```

## Transform

You can alter the rendered text capitalization via the `transform` property.

```html repl Heading Transform
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">DEFAULT</Text>

        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">CAPITALIZE</Text>

        <Heading transform="capitalize">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LOWERCASE</Text>

        <Heading transform="lowercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">UPPERCASE</Text>

        <Heading transform="uppercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
```

## Variation

You can apply variations to the rendered text, like truncating, via the `variation` property.

```html repl Heading Variation
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">DEFAULT</Text>

        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">TRUNCATE</Text>

        <Heading variation="truncate">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
```
