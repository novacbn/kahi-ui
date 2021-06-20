+++
[[properties."*"]]
name="class"
description="Sets a class name(s) on the Component."
types=["string"]

[[properties."*"]]
name="style"
description="Sets inline CSS properties on the Component."
types=["string"]

[[properties."*"]]
name="id"
description="Sets an identifier that other Components can target or useful for querying DOM by association."
types=["string"]

[[properties."*"]]
name="name"
description="Sets an identifier that will be used in form submissions or targettable by specific Components like <code>Anchor</code>."
types=["string"]

[[properties."*"]]
name="title"
description="Sets text for a tooltip whenever an end-user hovers the Component, and useful for assistive technologies."
types=["string"]

[[properties."*"]]
name="tabindex"
description="Alters how the Browser will cycle through the elements within the Component's current stacking context."
types=["number", "string"]
+++

# HTML5

All Components have access to several common HTML5 global attributes.

## class

[`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) allows you to apply CSS classes that you've defined to Components. However, you will have to use `:global` on your class names to bypass Svelte's local scoping.

```html repl HTML5 class
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

<style>
    :global(.my-text) {
        color: red;
    }
</style>
```

## style

[`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) allows you to apply inline CSS properties to Components.

```html repl HTML5 style
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text style="color:red;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
```

## id

[`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) allows you to set an identifier that other elements can target or targettable for scrolling by a [URL fragment](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash).

<!-- prettier-ignore -->
```html repl HTML5 id
<script>
    import {Anchor, Heading, Spacer} from "@kahi-ui/framework";
</script>

<Anchor href="#target-heading">Scroll to Heading!</Anchor>

<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Heading id="target-heading">Hello World!</Heading>
```

## name

[`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/name) allows you to set an identifier for the Component to set its value to in a form, or, can targettable by an [`Anchor`](../navigation/anchor.md).

```html repl HTML5 name
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor target="target-iframe" href="/">Open Landing Page</Anchor>
<iframe name="target-iframe" width="100%" height="256"></iframe>
```

## title

[`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) allows you to set a timed effect to show a text tooltip whenever an end-user hovers for long enough. Typically you don't want to rely on this attribute for the UI. Rather use it for semantic and assistive purposes.

```html repl HTML5 title
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text title="I am some additional text!">Hover me!</Text>
```

## tabindex

[`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) allows you to configure how the Browser cycles through elements in the current stacking context when they press their tab keyboard button, or similar.

<!-- prettier-ignore -->
```html repl HTML5 tabindex
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button tabindex="3">Index #3</Button>
<Button tabindex="1">Index #1</Button>
<Button tabindex="-1">Unselectable</Button>
<Button tabindex="4">Index #4</Button>
<Button tabindex="2">Index #2</Button>
```
