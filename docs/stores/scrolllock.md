# scrolllock

`scrolllock` is a [Svelte Store](https://svelte.dev/docs#svelte_store) which sets `overflow: hidden;` on an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) whenever the Store is set to `true`. Restoring the previous value of `overflow` whenever set back to `false`. Allowing for connecting Component open states like for modals, to the prevent overscrolling the main document body.

> **NOTE**: If no [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) is passed into the Store function, it'll default to the root `<html>`.

```svelte repl scrolllock Preview
<script>
    import {
        Box,
        Button,
        Heading,
        scrolllock,
    } from "@kahi-ui/framework";

    const scrolllock_store = scrolllock(
        document.querySelector(".repl-render")
    );

    const on_click = () =>
        ($scrolllock_store = !$scrolllock_store);
</script>

<Button on:click={on_click}>Toggle Scroll Lock</Button>

<Box palette="accent" padding="small">
    <Heading>Scrollable content</Heading>
    <Heading is="h2">Scrollable content</Heading>
    <Heading is="h3">Scrollable content</Heading>
    <Heading is="h4">Scrollable content</Heading>
</Box>

<Box palette="affirmative" padding="small">
    <Heading>Scrollable content</Heading>
    <Heading is="h2">Scrollable content</Heading>
    <Heading is="h3">Scrollable content</Heading>
    <Heading is="h4">Scrollable content</Heading>
</Box>

<Box palette="negative" padding="small">
    <Heading>Scrollable content</Heading>
    <Heading is="h2">Scrollable content</Heading>
    <Heading is="h3">Scrollable content</Heading>
    <Heading is="h4">Scrollable content</Heading>
</Box>

<Box palette="alert" padding="small">
    <Heading>Scrollable content</Heading>
    <Heading is="h2">Scrollable content</Heading>
    <Heading is="h3">Scrollable content</Heading>
    <Heading is="h4">Scrollable content</Heading>
</Box>
```

## Imports

```js default scrolllock Imports
import {scrolllock} from "@kahi-ui/framework";
```

## Compatibility

The Store is dependent on [`setting an element's inline styles`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#setting_styles) via Javascript. So on server, will return a [`readable`](https://svelte.dev/docs#readable) Store which will error on having a new value set.
