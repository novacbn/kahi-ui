# Responsivity

Kahi UI supports responsive design out of the box for the majority of its Components. Such as [Grid](../layouts/grid.md), where you can define how many items are displayed at each Viewport.

## Viewports

As mentioned above, Kahi UI has the concept of four pre-defined breakpoints that are known as Viewports. Which are only active whenever the Browser window's width is within two sizes.

| Viewport   | Minimum  | Maximum  |
| ---------- | -------- | -------- |
| mobile     | `0px`    | `640px`  |
| tablet     | `641px`  | `768px`  |
| desktop    | `769px`  | `1024px` |
| widescreen | `1025px` | `∞`      |

## Syntax

To be able to use Viewport-specific values, you just need to prefix your values with `{VIEWPORT}:`, e.g. `<Grid points="mobile:3">`. But then you can't specify default values or other Viewport-specifics. For that you need to pass an array in like below.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```svelte repl Responsivity Syntax
<script>
    import {Box, Grid} from "@kahi-ui/framework";
</script>

<Grid.Container
    class="responsivity-syntax"
    points={["5", "mobile:2", "tablet:3", "desktop:4"]}
    spacing="medium"
>
    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />

    <Box palette="negative" />
    <Box palette="alert" />
    <Box palette="affirmative" />

    <Box palette="affirmative" />
    <Box palette="negative" />
    <Box palette="alert" />

    <Box palette="negative" />
    <Box palette="alert" />
    <Box palette="affirmative" />

    <Box palette="alert" />
    <Box palette="affirmative" />
    <Box palette="negative" />
</Grid.Container>

<style>
    :global(.responsivity-syntax .box) {
        height: 3rem;
    }
</style>
```
