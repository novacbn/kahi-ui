+++
[[properties."Aside.Container"]]
name="logic_id"
description="Alters the <code>Aside.Container</code> to be collapsible on Mobile / Tablet Viewports by wrapping the layout in a <code><a href='../overlays/offscreen'>Offscreen</a></code> Component."
types=["string"]

[[properties."Aside.Container"]]
name="state"
description="Controls the visible state of the <code>Aside.Container</code> whenever <code>logic_id</code> is set."
types=["boolean"]

[[properties."Aside.Container"]]
name="captive"
description="Renders a <code>ContextBackdrop</code> as a sibling before the <code>Aside.Container</code>, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties."Aside.Container"]]
name="dismissible"
description="Adjusts the sibling <code>ContextBackdrop</code> to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties."Aside.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Aside.Container"]]
name="placement"
description="Adjusts which side the content divider border is placed, and which side the <code>Aside.Container</code> slides in from when the <code>logic_id</code> property is set."
default="left"
types=["left", "right"]

[[properties."Aside.Container"]]
name="variation"
description="Adjusts the <code>Aside.Container</code> to remain at the top of the Viewport, even when the parent body / element is scrolled."
types=["sticky"]
+++

# Aside

`Aside` is used to vertically present the end-user with actions and links that can be accessed anytime on the Web Application.

```svelte repl Aside Preview
<script>
    import {
        Anchor,
        Aside,
        Divider,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Aside.Container
    palette="dark"
    max_width="content-max"
>
    <Aside.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider />
    </Aside.Header>

    <Aside.Section>
        <Menu.Container>
            <Menu.Heading>DISPLAY</Menu.Heading>

            <Menu.Button>
                Badge
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Heading>FEEDBACK</Menu.Heading>

            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button active>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Container>
    </Aside.Section>

    <Aside.Footer>
        <Anchor href="#">
            <Text is="small">v0.2.0</Text>
        </Anchor>
    </Aside.Footer>
</Aside.Container>
```

## Palette

You can change the color palette of the `Aside` via the `palette` property.

```svelte repl Aside Palette
<script>
    import {
        Anchor,
        Aside,
        Divider,
        Menu,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="medium" spacing="medium">
    <Aside.Container>
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DEFAULT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="accent">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ACCENT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="dark">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DARK</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="light">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>LIGHT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="alert">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ALERT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="affirmative">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>AFFIRMATIVE</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="negative">
        <Aside.Header>
            Kahi UI
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>NEGATIVE</Aside.Footer>
    </Aside.Container>
</Mosaic>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within the `Aside.Container` layout, it will automatically inherit the set `logic_id` via [`id`](../stores/id.md) Svelte Store.

> **NOTE**: Interally when the `logic_id` property is set, the `Aside.Container` wrapped in an [`Offscreen`](../overlays/offscreen.md) Component to provide the collapsing functionality.

You can make the `Overlay` collapsible on Mobile and Tablet Viewports via the `logic_id` property. And then place two [`ContextButton`](../utilities/contextbutton.md) Components as the last children of a `Aside.Container`. Where they'll be floated over the Web Application content, with the first one being the open button. And the second one being the close button.

```svelte repl Aside Logic ID
<script>
    import {
        Anchor,
        Aside,
        ContextButton,
        Divider,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Aside.Container
    logic_id="aside-logic-id"
    palette="dark"
    max_width="content-max"
    captive
    dismissible
>
    <Aside.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider />
    </Aside.Header>

    <Aside.Section>
        <Menu.Container>
            <Menu.Heading>DISPLAY</Menu.Heading>

            <Menu.Button>
                Badge
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Heading>FEEDBACK</Menu.Heading>

            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button active>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Container>
    </Aside.Section>

    <Aside.Footer>
        <Anchor href="#">
            <Text is="small">v0.2.0</Text>
        </Anchor>
    </Aside.Footer>

    <ContextButton variation="clear">+</ContextButton>
    <ContextButton palette="dark" variation="clear">
        x
    </ContextButton>
</Aside.Container>
```

## Placement

> **IMPORTANT**: The `placement` property does **NOT** affect how it will appear in your layout. You need to manually handle that.

You can adjust which side the content divider border will appear, and which side a collapsible `Aside.Container` will slide out from via the `placement` property.

```svelte repl Aside Placement
<script>
    import {
        Anchor,
        Aside,
        ContextButton,
        Divider,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Aside.Container
    logic_id="aside-logic-id"
    placement="right"
    palette="dark"
    max_width="content-max"
    captive
    dismissible
>
    <Aside.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider />
    </Aside.Header>

    <Aside.Section>
        <Menu.Container>
            <Menu.Heading>DISPLAY</Menu.Heading>

            <Menu.Button>
                Badge
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Heading>FEEDBACK</Menu.Heading>

            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button active>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Container>
    </Aside.Section>

    <Aside.Footer>
        <Anchor href="#">
            <Text is="small">v0.2.0</Text>
        </Anchor>
    </Aside.Footer>

    <ContextButton variation="clear">+</ContextButton>
    <ContextButton palette="dark" variation="clear">
        x
    </ContextButton>
</Aside.Container>
```
