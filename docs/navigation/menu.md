# Menu

`Menu` renders a nestable list of actionable buttons and links. Typically used in context menus or used as the main content body of [`Aside`](./aside.md).

<!-- prettier-ignore -->
```html repl Menu Preview
<script>
    import {Menu, Spacer, Text} from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Button>
        Copy
        <Spacer />
        <Text is="kbd">CTRL+C</Text>
    </Menu.Button>

    <Menu.Button>
        Cut
        <Spacer />
        <Text is="kbd">CTRL+X</Text>
    </Menu.Button>

    <Menu.Divider />

    <Menu.Button>
        Delete
        <Spacer />
        <Text is="kbd">DEL</Text>
    </Menu.Button>
</Menu.Container>
```

## Imports

```html default Menu Imports
<script>
    import {Menu} from "@kahi-ui/framework";

    const {Container, Anchor, Button, Divider, Heading, Item, SubMenu} = Menu;
</script>
```

## Sub Menus

You can nest more menus via `<Menu.SubMenu>` Component and using `<svelte:fragment slot="sub-menu">` in `<Menu.Divider>` or `<Menu.Heading>` Components.

<!-- prettier-ignore -->
```html repl Menu Sub Menu
<script>
    import {Box, Menu, Spacer, Text} from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Heading>
            FEEDBACK
            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Heading>

        <Menu.Heading>
            OVERLAYS
            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
                    <Menu.Button>
                        Overlay
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>
</Box>
```

## Text Divider

In place of `<Menu.Heading>` you can also use `<Menu.Divider>` with text content.

<!-- prettier-ignore -->
```html repl Menu Text Divider
<script>
    import {Box, Menu, Spacer, Text} from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Divider>
            FEEDBACK
            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <Text is="span">ICON</Text>
                    </Menu.Button>
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Divider>
    </Menu.Container>
</Box>
```
