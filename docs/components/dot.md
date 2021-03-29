# Dot

> Useful for calling the user's attention to a specific place in your interface.

```html render
<span class="dot" data-palette="negative" data-animation="pulse"></span>
<span class="spacer" data-spacing="tiny"></span>
Screen recording is currently active!
```

## Palettes

Dots have customizable coloring via the `data-palette` attribute.

```html render
<div class="stack" data-spacing="tiny">
    <span><span class="dot"></span> — Dot DEFAULT</span>

    <span><span class="dot" data-palette="accent"></span> — Dot ACCENT</span>

    <span><span class="dot" data-palette="dark"></span> — Dot DARK</span>
    <span><span class="dot" data-palette="light"></span> — Dot LIGHT</span>

    <span><span class="dot" data-palette="alert"></span> — Dot ALERT</span>
    <span><span class="dot" data-palette="affirmative"></span> — Dot AFFIRMATIVE</span>
    <span><span class="dot" data-palette="negative"></span> — Dot NEGATIVE</span>
</div>
```

## Positioning

Dots can be made to appear "hovering" on a parent container via the `data-position` attribute.

```html render
<span>
    Dot RAISED
    <span class="dot" data-position="raised"></span>
</span>

<div class="spacer" data-spacing="huge"></div>

<button>
    Dot RAISED
    <span class="dot" data-palette="alert" data-position="floated"></span>
</button>
```

## Animations

Dots can be customized to have animations to grab a user's attention.

```html render
<button data-palette="affirmative" data-variation="outline">
    Save Available Changes?
    <span class="dot" data-palette="negative" data-position="floated" data-animation="pulse"></span>
</button>
```

## Attributes

| Attribute        | Svelte      | Values                                                        | Description                                                   |
| ---------------- | ----------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data-animation` | `animation` | `pulse`                                                       | Sets the animation currently being played on the Dot          |
| `data-palette`   | `palette`   | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Dot                             |
| `data-position`  | `position`  | `floated`, `raised`                                           | Sets how the Dot should be positioned in the parent container |
