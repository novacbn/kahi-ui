# Heading

> Useful for semantically denoting a body of content as a descrete section, ordered by level.

```html render
<h1>Hello World!</h1>
```

## Levels

Section levels, therefore the font size, weight, and margins, can be customized via `<h1> ~ <h6>` tags.

```html render
<h1>Heading Level One!</h1>
<h2>Heading Level Two!</h2>
<h3>Heading Level Three!</h3>
<h4>Heading Level Four!</h4>
<h5>Heading Level Five!</h5>
<h6>Heading Level Six!</h6>
```

## Classes

The section levels can also be applied to other elements as well via the `.h1 ~ .h6` classes, for their font sizes / weights **ONLY**.

```html render
<div class="stack" data-spacing="medium">
    <span class="h1">Heading Level One! <code>.h1</code></span>
    <span class="h2">Heading Level Two! <code>.h2</code></span>
    <span class="h3">Heading Level Three! <code>.h3</code></span>
    <span class="h4">Heading Level Four! <code>.h4</code></span>
    <span class="h5">Heading Level Five! <code>.h5</code></span>
    <span class="h6">Heading Level Six! <code>.h6</code></span>
</div>
```

## Attributes

| Attribute | Svelte  | Values                       | Description                   |
| --------- | ------- | ---------------------------- | ----------------------------- |
| **N/A**   | `level` | `1`, `2`, `3`, `4`, `5`, `6` | Sets the level of the Heading |
