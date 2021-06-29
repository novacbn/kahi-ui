+++
[[properties.Offscreen]]
name="logic_id"
description="Renders a <code>&lt;input role=\"presentation\" type=\"checkbox\" /&gt;</code> as sibling before the <code>Offscreen</code>, which controls the visible state via CSS."
types=["string"]

[[properties.Offscreen]]
name="hidden"
description="Controls when the <code>Offscreen</code> hides its child content."
types=["boolean", "{VIEWPORT}"]

[[properties.Offscreen]]
name="state"
description="Controls the visible state of the <code>Offscreen</code> whenever <code>logic_id</code> is set."
types=["boolean"]

[[properties.Offscreen]]
name="captive"
description="Renders a <code>ContextBackdrop</code> as a sibling before the <code>Offscreen</code>, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties.Offscreen]]
name="dismissible"
description="Adjusts the sibling <code>ContextBackdrop</code> to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Offscreen]]
name="alignment"
description="Adjusts where the child content will be placed within the <code>Offscreen</code> along both axis."
default="stretch"
types=["center", "stretch"]

[[properties.Offscreen]]
name="alignment_x"
description="<strong>(<code>top/bottom</code> PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the <code>Offscreen</code> along the horizontal axis."
default="stretch"
types=["center", "stretch", "left", "right"]

[[properties.Offscreen]]
name="alignment_y"
description="<strong>(<code>left/right</code> PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the <code>Offscreen</code> along the vertical axis."
default="stretch"
types=["center", "stretch", "bottom", "top"]

[[properties.Offscreen]]
name="placement"
description="Adjusts where the child content will be placed within the <code>Offscreen</code> along the vertical axis."
default="left"
types=["top", "left", "bottom", "right"]
+++

# Offscreen

`Offscreen` is typically used for hiding content that'll slide into when actived via a button or something else.

```svelte repl Offscreen Preview
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-preview" palette="accent">
    Open Offscreen
</Button>

<Offscreen
    logic_id="offscreen-preview"
    placement="top"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            Well, hello there!
        </Stack>
    </Box>
</Offscreen>
```

## Imports

```svelte default Offscreen Imports
<script>
    import {Offscreen} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within the `Offscreen` layout, it will automatically inherit the set `logic_id` via [`id`](../stores/id.md) Svelte Store.

You can make the `Offscreen` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

## Hidden

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

`Offscreen` adds special handling for the `hidden` property, allowing you to instead customize when the child content is hidden offscreen or rendered normally.

```svelte repl Offscreen Hidden
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button
    for="offscreen-hidden"
    palette="accent"
    hidden={["tablet", "desktop", "widescreen"]}
>
    Open HIDDEN Offscreen
</Button>

<Offscreen
    logic_id="offscreen-hidden"
    placement="top"
    hidden="mobile"
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                hidden={[
                    "tablet",
                    "desktop",
                    "widescreen",
                ]}
            >
                X
            </ContextButton>

            I was HIDDEN on MOBILE!
        </Stack>
    </Box>
</Offscreen>
```

## Captive

You can optionally include a backdrop by passing via the `captive` property.

```svelte repl Offscreen Captive
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-non-captive" palette="accent">
    Open NON CAPTIVE Offscreen
</Button>

<Button for="offscreen-is-captive" palette="accent">
    Open CAPTIVE Offscreen
</Button>

<Offscreen
    logic_id="offscreen-non-captive"
    placement="top"
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a NON CAPTIVE Offscreen.
        </Stack>
    </Box>
</Offscreen>

<Offscreen
    logic_id="offscreen-is-captive"
    placement="top"
    hidden
    captive
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a CAPTIVE Offscreen.
        </Stack>
    </Box>
</Offscreen>
```

## Dismissible

You can optionally have the `Offscreen` dismissible by clicking the backdrop via the `dismissible` property.

```svelte repl Offscreen Dismissible
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button
    for="offscreen-non-dismissible"
    palette="accent"
>
    Open NON DISMISSIBLE Offscreen
</Button>

<Button
    for="offscreen-is-dismissible"
    palette="accent"
>
    Open DISMISSIBLE Offscreen
</Button>

<Offscreen
    logic_id="offscreen-non-dismissible"
    placement="top"
    hidden
    captive
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a NON DISMISSIBLE Offscreen.
        </Stack>
    </Box>
</Offscreen>

<Offscreen
    logic_id="offscreen-is-dismissible"
    placement="top"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a DISMISSIBLE Offscreen.
        </Stack>
    </Box>
</Offscreen>
```

## Placement

You can adjust which side your content is hidden on via the `placement` property.

```svelte repl Offscreen Placement
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-placement" palette="accent">
    Open PLACED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-placement"
    placement="left"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack spacing="medium">
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I was PLACED on the LEFT!
        </Stack>
    </Box>
</Offscreen>
```

## Alignment

You can align `Offscreen` content via the `alignment`, `alignment_x`, and `alignment_y` properties respectively.

```svelte repl Offscreen Alignment
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-alignment" palette="accent">
    Open ALIGNED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-alignment"
    placement="top"
    alignment_x="right"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I was ALIGNED to the RIGHT!
        </Stack>
    </Box>
</Offscreen>
```
