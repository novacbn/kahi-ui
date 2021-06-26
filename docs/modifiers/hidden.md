+++
[[properties."*"]]
name="hidden"
description="Alters the Component to not render anything and take up physical space in a page's layout."
types=["boolean", "{VIEWPORT}"]
+++

# Hidden

All Components have access to the `data-hidden` global HTML attribute via the `hidden` property. Unlike the standard [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) HTML attribute, `data-hidden` supports [Responsivity](../framework/responsivity.md).

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```svelte repl Hidden Preview
<script>
    import {Box} from "@kahi-ui/framework";
</script>

<Box palette="accent" hidden={["mobile", "tablet"]}>
    I am visible on Desktop / Widescreen Viewports.
</Box>

<Box
    palette="affirmative"
    hidden={["desktop", "widescreen"]}
>
    I am visible on Mobile / Tablet Viewports.
</Box>
```
