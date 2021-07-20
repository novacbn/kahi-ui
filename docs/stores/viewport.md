# viewport

`viewport` / `viewports` are [Svelte Stores](https://svelte.dev/docs#svelte_store), which returns `true` whenever a [Viewport](../framework/responsivity.md) selected in initialization is currently active.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

```svelte repl viewport Preview
<script>
    import {
        Code,
        Heading,
        Text,
        viewport,
        viewports,
    } from "@kahi-ui/framework";

    const mobile_store = viewport("mobile");
    const tablet_store = viewport("tablet");

    const desktop_store = viewport("desktop");
    const widescreen_store = viewport("widescreen");

    const combo_store = viewports({
        mobile: true,
        tablet: true,
    });
</script>

<Heading>Viewports Enabled</Heading>

<Text>Mobile: <Code>{$mobile_store}</Code></Text>
<Text>Tablet: <Code>{$tablet_store}</Code></Text>

<Text>Desktop: <Code>{$desktop_store}</Code></Text>
<Text>
    Widescreen: <Code>
        {$widescreen_store}
    </Code>
</Text>

<Text>Combo: <Code>{$combo_store}</Code></Text>
```

## Imports

```javascript default viewport Imports
import {viewport, viewports} from "@kahi-ui/framework";
```

## Compatibility

The Stores are dependent on [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
