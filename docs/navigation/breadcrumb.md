+++
[[properties."Breadcrumb.Container"]]
name="separator"
description="Alters the separator rendered between each breadcrumb item."
types=["string"]

[[properties."Breadcrumb.Item"]]
name="active"
description="Alters the breadcrumb item to render bolder when active. Sets <code><a href='https://www.digitala11y.com/aria-current-state' rel='noopener noreferrer' target='_blank'>aria-current=\"page\"</a></code> on <code>Breadcrumb.Anchor</code>."
types=["boolean"]

[[properties."Breadcrumb.Anchor"]]
name="href"
description="Changes the URL that <code>Breadcrumb.Anchor</code> navigates end-users to when clicked."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="rel"
description="Sets how the <code>Breadcrumb.Anchor</code> relates to the current page, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="target"
description="Sets the target of the <code>Breadcrumb.Anchor</code> being navigated, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]
+++

# Breadcrumb

`Breadcrumb` is typically used to render a series of links with separators. With the each link left of the right-most a state in the end-user's navigation history. Or, a route hierarchy of the Web Application. e.g. directory paths

```svelte repl Breadcrumb Preview
<script>
    import {Breadcrumb} from "@kahi-ui/framework";
</script>

<Breadcrumb.Container>
    <Breadcrumb.Anchor href="#">home</Breadcrumb.Anchor
    >
    <Breadcrumb.Anchor href="#"
        >pictures</Breadcrumb.Anchor
    >
    <Breadcrumb.Anchor href="#" active
        >IMG_20191123_121131.jpg</Breadcrumb.Anchor
    >
</Breadcrumb.Container>
```

## Imports

```html default Breadcrumb Imports
<script>
    import {Breadcrumb} from "@kahi-ui/framework";

    const {Container, Anchor, Item} = Breadcrumb;
</script>
```

## Separator

You can alter the separator between items rendered via the `separator` property.

```svelte repl Breadcrumb Separator
<script>
    import {Breadcrumb} from "@kahi-ui/framework";
</script>

<Breadcrumb.Container separator=">">
    <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor
    >
    <Breadcrumb.Anchor href="#"
        >Contacts</Breadcrumb.Anchor
    >
    <Breadcrumb.Anchor href="#" active
        >John Doe</Breadcrumb.Anchor
    >
</Breadcrumb.Container>
```
