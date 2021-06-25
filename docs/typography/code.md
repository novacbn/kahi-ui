+++
[[properties.Code]]
name="is"
description="Changes the HTML tag used for rendering the text, and the text formatting."
default="code"
types=["code", "pre"]

[[properties.Code]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Code

`Code` is used to render inline monospaced text, typically for showing programming code / application configuration to an end-user.

```svelte repl Code Preview
<script>
    import {Code} from "@kahi-ui/framework";
</script>

<Code>
    import * as Kahi from "@kahi-ui/framework";
</Code>
```

## Imports

```html default Code Imports
<script>
    import {Code} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the Component via `data-palette`.

```svelte repl Code Palette
<script>
    import {
        Code,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="code-palette"
    alignment_x="left"
    spacing="medium"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Code>
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Code palette="accent">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Code palette="dark">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Code palette="light">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Code palette="alert">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Code palette="affirmative">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Code palette="negative">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>
</Stack>

<style>
    :global(.code-palette code) {
        display: block;
    }
</style>
```

## Code Block

You can display blocks of code via a `<pre>` HTML tag by passing `is="pre"`.

<!-- prettier-ignore -->
```svelte repl Code Block
<script>
    import {Code} from "@kahi-ui/framework";
</script>

<Code is="pre">
import math from "a-math-library";
const result = math.add(1, 1);
console.log("Our value is:", result);
</Code>
```
