+++
[[properties.Overlay]]
name="logic_id"
description="Renders a <code>&lt;input role=\"presentation\" type=\"checkbox\" /&gt;</code> as sibling before the <code>Overlay</code>, which controls the visible state via CSS."
types=["string"]

[[properties.Overlay]]
name="state"
description="Controls the visible state of the <code>Overlay</code> whenever <code>logic_id</code> is set."
types=["boolean"]

[[properties.Overlay]]
name="captive"
description="Renders a <code>ContextBackdrop</code> as a sibling before the <code>Overlay</code>, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties.Overlay]]
name="dismissible"
description="Adjusts the sibling <code>ContextBackdrop</code> to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Overlay]]
name="alignment"
description="Adjusts where the child content will be placed within the <code>Overlay</code> along both axis."
default="center"
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="alignment_x"
description="Adjusts where the child content will be placed within the <code>Overlay</code> along the horizontal axis."
default="center"
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="alignment_y"
description="Adjusts where the child content will be placed within the <code>Overlay</code> along the vertical axis."
default="center"
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="spacing"
description="Adjusts the visual spacing between child content in the <code>Overlay</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Overlay]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child content in the <code>Overlay</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Overlay]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child content in the <code>Overlay</code>."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Overlay

`Overlay` is typically used for rendering full-screen content over the rest of the page, optionally including a backdrop or being toggleable.

```svelte repl Overlay Preview
<script>
    import {
        Button,
        Card,
        Code,
        ContextButton,
        Overlay,
        Text,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-preview" palette="accent"
    >Open Modal</Button
>

<Overlay
    logic_id="overlay-preview"
    captive
    dismissible
>
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>Are you sure?</Card.Header>

        <Card.Section>
            <Text>
                Are you sure you want to delete:
                <Code>important-file.docx</Code>?
            </Text>
        </Card.Section>

        <Card.Footer>
            <ContextButton variation="clear"
                >Cancel</ContextButton
            >
            <Button palette="negative">Delete</Button>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Imports

```html default Overlay Imports
<script>
    import {Overlay} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within the `Overlay` layout, it will automatically inherit the set `logic_id` via [`id`](../stores/id.md) Svelte Store.

You can make the `Overlay` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

```svelte repl Overlay Logic ID
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-toggleable">Toggle Modal</Button>

<Overlay logic_id="overlay-toggleable">
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>Toggleable Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Captive

You can optionally include a backdrop by passing via the `captive` property.

```svelte repl Overlay Captive
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-non-captive">
    Open NON CAPTIVE Modal
</Button>

<Button for="overlay-is-captive" palette="accent">
    Open CAPTIVE Modal
</Button>

<Overlay logic_id="overlay-non-captive">
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>NON CAPTIVE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>

<Overlay logic_id="overlay-is-captive" captive>
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>CAPTIVE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Dismissible

You can optionally have the `Overlay` dismissible by clicking the backdrop via the `dismissible` property.

```svelte repl Overlay Dismissible
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-non-dismissible">
    Open NON DISMISSIBLE Modal
</Button>

<Button for="overlay-is-dismissible" palette="accent">
    Open DISMISSIBLE Modal
</Button>

<Overlay logic_id="overlay-non-dismissible" captive>
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>
            NON DISMISSIBLE Modal
        </Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>

<Overlay
    logic_id="overlay-is-dismissible"
    captive
    dismissible
>
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>DISMISSIBLE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## State

> **WARNING**: If you use this to toggle the `Overlay`, instead of something like the [`ContextButton`](../utilities/contextbutton.md). It will not work on Browsers without Javascript enabled.

You can manually open / close the `Overlay` via the `state` property.

```svelte repl Overlay State
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";

    let toggle = false;

    const on_click = () => (toggle = !toggle);
</script>

<Button on:click={on_click}>Toggle Modal</Button>

<Overlay logic_id="overlay-state" bind:state={toggle}>
    <Card.Container
        palette="auto"
        max_width="viewport-75"
    >
        <Card.Header>Toggleable Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Alignment

You can align `Overlay` content via the `alignment`, `alignment_x`, and `alignment_y` properties respectively.

```svelte repl Overlay Alignment
<script>
    import {
        Button,
        Code,
        Overlay,
        Tile,
        Text,
    } from "@kahi-ui/framework";
</script>

<Overlay
    alignment_x="right"
    alignment_y="bottom"
    padding_bottom="medium"
    padding_right="medium"
>
    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="viewport-75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>important_file.docx</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>
</Overlay>
```

## Spacing

You can adjust the spacing between `Overlay` content via the `spacing`, `spacing_x`, and `spacing_y` properties respectively.

```svelte repl Overlay Spacing
<script>
    import {
        Button,
        Code,
        Overlay,
        Tile,
        Text,
    } from "@kahi-ui/framework";
</script>

<Overlay
    alignment_x="right"
    alignment_y="bottom"
    spacing="medium"
    padding_bottom="medium"
    padding_right="medium"
>
    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="viewport-75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>important_file.docx</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="viewport-75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>other_file.png</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>
</Overlay>
```
