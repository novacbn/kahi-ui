# Divider

> Useful for separating content out into logical visual sectioning.

```html
<h4>My Blog Post #1 — <small>2020/10/10</small></h4>
<hr />

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla lacinia nulla, et
    commodo leo elementum ac. Cras quis lectus finibus, sodales neque vitae, dictum risus. Donec
    commodo ac quam eu rhoncus.
</p>

<span role="separator">MORE BLOG POSTS</span>
<span>My Blog Post #2</span>, <span>My Blog Post #3</span>
```

## Palettes

Dividers have customizable coloring via the `data-palette` attribute.

### Dividers

```html
Divider DEFAULT
<hr />

Divider ACCENT
<hr data-palette="accent" />

Divider DARK
<hr data-palette="dark" />

Divider LIGHT
<hr data-palette="light" />

Divider ALERT
<hr data-palette="alert" />

Divider AFFIRMATIVE
<hr data-palette="affirmative" />

Divider NEGATIVE
<hr data-palette="negative" />
```

### Separator

```html
<span role="separator">Separator DEFAULT</span>

<span role="separator" data-palette="accent">Separator ACCENT</span>

<span role="separator" data-palette="dark">Separator DARK</span>
<span role="separator" data-palette="light">Separator LIGHT</span>

<span role="separator" data-palette="alert">Separator ALERT</span>
<span role="separator" data-palette="affirmative">Separator AFFIRMATIVE</span>
<span role="separator" data-palette="negative">Separator NEGATIVE</span>
```

## Attributes

| Attribute      | Svelte    | Values                                                        | Description                           |
| -------------- | --------- | ------------------------------------------------------------- | ------------------------------------- |
| `data-palette` | `palette` | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Divider |
