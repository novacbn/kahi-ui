# prefersscheme

`prefersscheme` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which returns `true` whenever [`matchMedia(SCHEME)`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) is validated.

> **NOTE**: Change your Operating System's color settings to see changes.

```svelte repl prefersscheme Preview
<script>
    import {
        Code,
        Heading,
        Text,
        prefersscheme,
    } from "@kahi-ui/framework";

    const darkmode_store = prefersscheme("dark");
    const lightmode_store = prefersscheme("light");
</script>

<Heading>User Color Scheme Preferences</Heading>

<Text>
    Darkmode: <Code>{$darkmode_store}</Code>
</Text>

<Text>
    Lightmode: <Code>{$lightmode_store}</Code>
</Text>
```

## Imports

```javascript default prefersscheme Imports
import {
    prefersscheme,
    prefersdark,
    preferslight,
} from "@kahi-ui/framework";
```

## Built-in Shortcuts

The `prefersscheme` Store also comes with two preconfigured default shortcuts, `prefersdark` and `preferslight`.

```svelte repl prefersscheme Shortcuts
<script>
    import {
        Code,
        Heading,
        Text,
        prefersdark,
        preferslight,
    } from "@kahi-ui/framework";

    const darkmode_store = prefersdark();
    const lightmode_store = preferslight();
</script>

<Heading>User Color Scheme Preferences</Heading>

<Text>
    Darkmode: <Code>{$darkmode_store}</Code>
</Text>

<Text>
    Lightmode: <Code>{$lightmode_store}</Code>
</Text>
```

## Compatibility

The Store is dependent on [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
