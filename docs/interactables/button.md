+++
[[properties.Button]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Button]]
name="size"
description="Renders the <code>Button</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Button]]
name="variation"
description="Changes the how the <code>Button</code> is rendered."
types=["clear", "outline"]

[[properties.Button]]
name="active"
description="Renders the <code>Button</code> with <code>aria-pressed</code> attribute, and styles the <code>Button</code> as if it where being clicked."
types=["boolean"]

[[properties.Button]]
name="disabled"
description="Renders the <code>Button</code> with <code>disabled</code> / <code>aria-disabled</code> attributes, and styles the <code>Button</code> partially transparent."
types=["boolean"]

[[properties.Button]]
name="type"
description="Renders the <code>Button</code> as a <code>&lt;input /&gt;</code> as a specific form type."
types=["button", "submit"]

[[properties.Button]]
name="name"
description="Sets the form name of the <code>Button</code> whenever <code>Button.type</code> is set."
types=["string"]

[[properties.Button]]
name="value"
description="Sets the form value of the <code>Button</code> whenever <code>Button.type</code> is set."
types=["string"]

[[properties.Button]]
name="href"
description="Renders the <code>Button</code> as a <code>&lt;a role=\"button\"&gt;</code> and links to the specified <code>href</code> property."
types=["string"]

[[properties.Button]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties.Button]]
name="rel"
description="Sets how the Anchor relates to the current page, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]

[[properties.Button]]
name="target"
description="Sets the target of the Anchor being navigated, see <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target' rel='noopener noreferrer' target='_blank'>MDN</a> for more information."
types=["string"]

[[properties.Button]]
name="for"
description="Renders the <code>Button</code> as a <code>&lt;label role=\"button\"&gt;</code> which targets the element ID set to the <code>for</code> property."
types=["string"]
+++

# Button

`Button` is used to usually trigger an action in the Web Application, such as submitting forms or opening an Overlay.

<!-- prettier-ignore -->
```html repl Button Preview
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button palette="accent">Click Me!</Button>
```

## Imports

```html default Button Imports
<script>
    import {Button} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Button` via the `palette` property.

<!-- prettier-ignore -->
```html repl Button Palette
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Button>This is a DEFAULT Button!</Button>
    <Button palette="accent">This is a ACCENT Button!</Button>

    <Button palette="light">This is a LIGHT Button!</Button>
    <Button palette="dark">This is a DARK Button!</Button>

    <Button palette="alert">This is a ALERT Button!</Button>
    <Button palette="affirmative">This is a AFFIRMATIVE Button!</Button>
    <Button palette="negative">This is a NEGATIVE Button!</Button>
</Stack>
```

## Size

You can change the size of the `Button` via the `size` property.

<!-- prettier-ignore -->
```html repl Button Size
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
    <Button>This is a DEFAULT Button!</Button>

    <Button size="tiny">This is a TINY Button!</Button>
    <Button size="small">This is a SMALL Button!</Button>

    <Button size="medium">This is a MEDIUM Button!</Button>

    <Button size="large">This is a LARGE Button!</Button>
    <Button size="huge">This is a HUGE Button!</Button>
</Stack>
```

## Clear

`Button` components have a special variation that renders as text with no background, that lightly fills in when clicked.

<!-- prettier-ignore -->
```html repl Button Clear
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Button variation="clear">This is a DEFAULT Button!</Button>

    <Button variation="clear" palette="accent">This is a ACCENT Button!</Button>
    <Button variation="clear" palette="light">This is a LIGHT Button!</Button>

    <Button variation="clear" palette="dark">This is a DARK Button!</Button>
    <Button variation="clear" palette="alert">This is a ALERT Button!</Button>
    <Button variation="clear" palette="affirmative">This is a AFFIRMATIVE Button!</Button>
    <Button variation="clear" palette="negative">This is a NEGATIVE Button!</Button>
</Stack>
```

## Outline

`Button` components have a special variation that renders them as text with an outline, the fills in when clicked.

<!-- prettier-ignore -->
```html repl Button Outline
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Button variation="outline">This is a DEFAULT Button!</Button>

    <Button variation="outline" palette="accent">This is a ACCENT Button!</Button>
    <Button variation="outline" palette="light">This is a LIGHT Button!</Button>

    <Button variation="outline" palette="dark">This is a DARK Button!</Button>
    <Button variation="outline" palette="alert">This is a ALERT Button!</Button>
    <Button variation="outline" palette="affirmative">This is a AFFIRMATIVE Button!</Button>
    <Button variation="outline" palette="negative">This is a NEGATIVE Button!</Button>
</Stack>
```
