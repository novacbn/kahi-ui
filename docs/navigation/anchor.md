+++
[[properties.Anchor]]
name="current"
description="Changes the <code><a href='https://www.digitala11y.com/aria-current-state' rel='noopener noreferrer' target='_blank'>aria-current</a></code> attribute, telling screen readers how to handle the link."
types=["date", "location", "page", "step", "time", "true"]

[[properties.Anchor]]
name="disabled"
description="Changes the <code><a href='https://www.digitala11y.com/aria-disabled-state' rel='noopener noreferrer' target='_blank'>aria-disabled</a></code> attribute, telling screen readers how to handle the link and altering it to be greyed-out."
types=["boolean"]

[[properties.Anchor]]
name="href"
description="Changes the URL that <code>Anchor</code> navigates end-users to when clicked."
types=["string"]

[[properties.Anchor]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties.Anchor]]
name="rel"
description="Sets how the <code>Anchor</code> relates to the current page, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]

[[properties.Anchor]]
name="target"
description="Sets the target of the <code>Anchor</code> being navigated, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]
+++

# Anchor

`Anchor` are used for navigating from page to page, or to external websites.

```svelte repl Anchor Preview
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Goto google.com
</Anchor>
```

## Imports

```html default Anchor Imports
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>
```

## Internal Navigation

When navigating only to an internal Web Application route, you can just set `href` property with no other properties.

```svelte repl Anchor Internal Navigation
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor href="#">Kahi UI</Anchor>
```

## External Navigation

When navigating to external links, for **security purposes** it's recommended to set [`rel="noopener"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener) to prevent [`Window.opener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) from being set on the newly opened page. And also to set [`rel="noreferrer"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer) for **privacy purposes**, to prevent the Browser from sending the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header to the new page.

```svelte repl Anchor External Navigation
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Goto google.com
</Anchor>
```
