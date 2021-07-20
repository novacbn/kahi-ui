# mediaquery

`mediaquery` / `mediaqueries` are [Svelte Stores](https://svelte.dev/docs#svelte_store), which returns `true` whenever a provided [Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) is currently active.

```svelte repl mediaquery Prevew
<script>
    import {
        Code,
        Heading,
        Text,
        mediaquery,
        mediaqueries,
    } from "@kahi-ui/framework";

    const standard_hd_store = mediaquery(
        "(min-width: 1280px) and (min-height: 720px)"
    );

    const ratio_store = mediaquery(
        "(aspect-ratio: 16/9)"
    );

    // By default `mediaqueries` has `or` behavior, which means if any query is valid, then
    // `true` is returned by the Store
    //
    // However in this case, we want `and` behavior, meaning all queries have to be valid
    // for `true` to be returned
    const combo_store = mediaqueries(
        [
            "(min-width: 1280px) and (min-height: 720px)",
            "(aspect-ratio: 16/9)",
        ],
        {behavior: "and"}
    );
</script>

<Heading>Queries Enabled</Heading>

<Text>sHD: <Code>{$standard_hd_store}</Code></Text>
<Text>16:9: <Code>{$ratio_store}</Code></Text>

<Text>sHD + 16:9: <Code>{$combo_store}</Code></Text>
```

## Imports

```javascript default mediaquery Imports
import {
    mediaquery,
    mediaqueries,
} from "@kahi-ui/framework";
```

## Compatibility

The Stores are dependent on [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
