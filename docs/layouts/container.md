+++
[[properties.Container]]
name="viewport"
description="Controls the max width of the <code>Container</code> in relation to a Viewport preset."
default="prose"
types=["prose", "mobile", "table", "desktop", "widescreen", "{VIEWPORT}:{SIZE}"]
+++

# Container

`Container` is a layout primitive used to typically constrain chunks of content to a max width or parent width, and centered horizontally with padding. By default it sets the max width to 65 characters.

```svelte repl Container Preview
<script>
    import {Container, Text} from "@kahi-ui/framework";
</script>

<Container>
    <Text>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis
        sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius
        natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
    </Text>
</Container>
```

## Imports

```svelte default Container Imports
<script>
    import {Container} from "@kahi-ui/framework";
</script>
```

## Viewports

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `viewport={["mobile", "widescreen:prose"]}`

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

You can customize the `Container` to be constrained to specific Viewport sizes.

```svelte repl Svelte Viewports
<script>
    import {Container, Text} from "@kahi-ui/framework";
</script>

<Container viewport="tablet">
    <Text>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis
        sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius
        natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
    </Text>
</Container>
```
