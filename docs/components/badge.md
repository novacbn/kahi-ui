# Badge

> Useful for displaying additional ancillary information in a subtle fashion.

```html render
<span class="badge" data-palette="accent">css</span>
<span class="badge" data-palette="accent">html</span>
<span class="badge" data-palette="accent">svelte</span>
```

## Palettes

Badges have customizable coloring via the `data-palette` attribute.

```html render
<span class="badge">Badge DEFAULT</span>

<span class="badge" data-palette="accent">Badge ACCENT</span>

<span class="badge" data-palette="dark">Badge DARK</span>
<span class="badge" data-palette="light">Badge LIGHT</span>

<span class="badge" data-palette="alert">Badge ALERT</span>
<span class="badge" data-palette="affirmative">Badge AFFIRMATIVE</span>
<span class="badge" data-palette="negative">Badge NEGATIVE</span>
```

## Sizes

Badges have customizable sizes via the `data-size` attribute.

```html render
<span class="badge" data-size="tiny">Badge TINY</span>
<span class="badge" data-size="small">Badge SMALL</span>

<span class="badge">Badge DEFAULT</span>

<span class="badge" data-size="large">Badge LARGE</span>
<span class="badge" data-size="huge">Badge HUGE</span>
```

## Shapes

Badges have customizable shapes via the `data-shape` attribute.

```html render
<span class="badge">Badge DEFAULT</span>

<span class="badge" data-shape="pill">Badge PILL</span>
```

## Positioning

Badges can be made to appear "hovering" on a parent container via the `data-position` attribute.

```html render
<span>
    This is sample text.
    <span class="badge" data-position="raised">Badge RAISED</span>
</span>

<div class="spacer" data-spacing="huge"></div>

<button>
    This is a sample Button
    <span class="badge" data-palette="accent" data-position="floated">Badge FLOATED</span>
</button>
```

## Animations

Badges can be customized to have animations to grab a user's attention.

```html render
<button palette="accent">
    Open Inbox
    <span class="badge" data-palette="negative" data-position="floated" data-animation="pulse">
        99+
    </span>
</button>
```

## Attributes

| Attribute        | Svelte      | Values                                                        | Description                                                     |
| ---------------- | ----------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| `data-animation` | `animation` | `pulse`                                                       | Sets the animation currently being played on the Badge          |
| `data-palette`   | `palette`   | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Badge                             |
| `data-position`  | `position`  | `floated`, `raised`                                           | Sets how the Badge should be positioned in the parent container |
| `data-shape`     | `shape`     | `pill`                                                        | Sets the shape of the Badge                                     |
| `data-size`      | `size`      | `tiny`, `small`, `large`, `huge`                              | Sets how big the Badge should appear                            |
