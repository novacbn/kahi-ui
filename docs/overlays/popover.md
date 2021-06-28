+++
[[properties.Popover]]
name="logic_id"
description="Renders a <code>&lt;input role=\"presentation\" type=\"checkbox\" /&gt;</code> as sibling before the <code>Popover</code>, which controls the visible state via CSS."
types=["string"]

[[properties.Popover]]
name="hidden"
description="Controls when the <code>Popover</code> hides its child content."
types=["boolean", "{VIEWPORT}"]

[[properties.Popover]]
name="state"
description="Controls the visible state of the <code>Popover</code> whenever <code>logic_id</code> is set."
types=["boolean"]

[[properties.Popover]]
name="captive"
description="Renders a <code>ContextBackdrop</code> as a sibling before the <code>Popover</code>, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties.Popover]]
name="dismissible"
description="Adjusts the sibling <code>ContextBackdrop</code> to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Popover]]
name="alignment_x"
description="<strong>(<code>top/bottom</code> PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the <code>Popover</code> along the horizontal axis."
default="center"
types=["center", "left", "right"]

[[properties.Popover]]
name="alignment_y"
description="<strong>(<code>left/right</code> PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the <code>Popover</code> along the vertical axis."
default="center"
types=["center", "bottom", "top"]

[[properties.Popover]]
name="placement"
description="Adjusts where the child content will be placed within the <code>Popover</code> along the vertical axis."
default="left"
types=["top", "left", "bottom", "right"]
+++

# Popover

`Popover` is typically used for hiding content that'll slide into when actived via a button or something else.

```svelte repl Popover Preview
<script>
    import {
        Card,
        ContextButton,
        Menu,
        Popover,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-preview"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open Popover
    </ContextButton>

    <Card.Container
        palette="auto-inverse"
        elevation="medium"
        max_width="content-max"
    >
        <Card.Section>
            <Menu.Container>
                <Menu.Button>
                    Copy
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+C</Text>
                </Menu.Button>

                <Menu.Button>
                    Cut
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+X</Text>
                </Menu.Button>

                <Menu.Divider />

                <Menu.Button>
                    Delete
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">DEL</Text>
                </Menu.Button>
            </Menu.Container>
        </Card.Section>
    </Card.Container>
</Popover>
```

## Imports

```svelte default Popover Imports
<script>
    import {Popover} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within the `Popover` layout, it will automatically inherit the set `logic_id` via [`id`](../stores/id.md) Svelte Store.

You can make the `Popover` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

## Hidden

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

`Popover` adds special handling for the `hidden` property, allowing you to instead customize when the child content is hidden or rendered normally.

```svelte repl Popover Hidden

```

## Dismissible

You can optionally have the `Popover` dismissible by clicking outside the `Popover` child content via the `dismissible` property.

```svelte repl Popover Dismissible

```

## Alignment

You can align `Popover` content via the `alignment_x`, and `alignment_y` properties respectively.

```svelte repl Popover Alignment

```

## Placement

You can adjust which side your content is placed on via the `placement` property.

```svelte repl Popover Placement

```
