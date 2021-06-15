# viewports

`viewports` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which returns `true` whenever a [Viewports](../framework/viewports) selected on initialization is currently active.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

<!-- prettier-ignore -->
```html repl viewports Preview
<script>
    import {Code, Heading, Text, viewports} from "@kahi-ui/framework";

    const mobile_store = viewports({mobile: true});
    const tablet_store = viewports({tablet: true});

    const desktop_store = viewports({desktop: true});
    const widescreen_store = viewports({widescreen: true});

    const combo_store = viewports({mobile: true, tablet: true});
</script>

<Heading>Viewports Enabled</Heading>

<Text>Mobile: <Code>{$mobile_store}</Code></Text>
<Text>Tablet: <Code>{$tablet_store}</Code></Text>

<Text>Desktop: <Code>{$desktop_store}</Code></Text>
<Text>Widescreen: <Code>{$widescreen_store}</Code></Text>

<Text>Combo: <Code>{$combo_store}</Code></Text>
```

## Imports

```javascript default viewports Imports
import {viewports} from "@kahi-ui/framework";
```

## Compatibility

The Store is dependent on [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
