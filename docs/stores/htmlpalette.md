# htmlpalette

`htmlpalette` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which is bound to `<html data-palette="XXX">` and returns the changes to that attribute. Defaulting to `light` if not set.

> **NOTE**: Click the color scheme button in the Navigation Sidebar to see changes.

<!-- prettier-ignore -->
```html repl htmlpalette Preview
<script>
    import {Code, Heading, Text, htmlpalette} from "@kahi-ui/framework";

    const palette_store = htmlpalette();
</script>

<Heading>
    Application Global Palette
</Heading>

<Text>
    <Code>data-palette</Code>: <Code>{$palette_store}</Code>
</Text>
```

## Imports

```javascript default htmlpalette Imports
import {htmlpalette} from "@kahi-ui/framework";
```

## Compatibility

The Store is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So if you're rendering on the server, it'll always return `false`.
