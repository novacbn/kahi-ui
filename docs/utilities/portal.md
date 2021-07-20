+++
[[properties."Portal"]]
name="target"
description="Sets the <code>HTMLElement</code> or CSS selector used to target the new container element."
default="document.body"
types=["document.body", "HTMLElement", "string"] 

[[properties."Portal"]]
name="prepend"
description="Sets the <code>Portal</code> to mounts its self before all other elements in the new container element, instead of after."
types=["boolean"]
+++

# Portal

`Portal` is used to render a layout outside of its original containing DOM tree, moving it somewhere else.

```svelte repl Portal Preview
<script>
    import {Box, Portal} from "@kahi-ui/framework";

    let container = null;
</script>

<Box
    bind:element={container}
    palette="accent"
    padding="small"
>
    I am the new container element!
</Box>

<Portal target={container}>
    <Box padding="small">And I was moved to here!</Box>
</Portal>
```

## Imports

```svelte default Portal Imports
<script>
    import {Portal} from "@kahi-ui/framework";
</script>
```

## Compatibility

`Portal` wraps your slotted content in a `display: contents` containing element, so keep that in mind in your CSS selectors. It also only remounts its self to the target on clientside Browsers with Javascript-enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario.
