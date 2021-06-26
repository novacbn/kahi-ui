# darkmode

`darkmode` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which returns `true` whenever either [`<html data-palette="dark">`](./htmlpalette.md) or [`prefersscheme("dark")`](./prefersscheme.md) is validated.

> **NOTE**: Click the color scheme button in the Navigation Sidebar to see changes.

```svelte repl darkmode Preview
<script>
    import {Text, darkmode} from "@kahi-ui/framework";

    const darkmode_store = darkmode();
</script>

<Text>
    {$darkmode_store
        ? "Darkmode is enabled!"
        : "Lightmode is enabled!"}
</Text>
```

## Imports

```javascript default darkmode Imports
import {darkmode} from "@kahi-ui/framework";
```

## Compatibility

The Store is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) / [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
