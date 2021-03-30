# Button

> Useful for representing non-navigation actions that users can explicitly trigger.

```html render
<button data-palette="affirmative">Create new Post</button>
```

## States

Buttons can adjust their visuals to match its current state.

```html render
<button>Button DEFAULT</button>
<button aria-pressed="true">Button ACTIVE</button>
<button disabled>Button DISABLED</button>
```

## Palettes

Buttons have customizable coloring via the `data-palette` attribute.

```html render
<button>Button DEFAULT</button>

<button data-palette="accent">Button ACCENT</button>

<button data-palette="dark">Button DARK</button>
<button data-palette="light">Button LIGHT</button>

<button data-palette="alert">Button ALERT</button>
<button data-palette="affirmative">Button AFFIRMATIVE</button>
<button data-palette="negative">Button NEGATIVE</button>
```

## Sizes

Buttons have customizable sizes via the `data-size` attribute.

```html render
<button data-size="tiny">Button TINY</button>
<button data-size="small">Button SMALL</button>

<button>Button DEFAULT</button>

<button data-size="large">Button LARGE</button>
<button data-size="huge">Button HUGE</button>
```

## Variations

Buttons have customizable visual variations via the `data-size` attribute.

```html render
<button>Button BLOCK</button>

<button data-variation="clear">Button CLEAR</button>
<button data-variation="outline">Button OUTLINE</button>
```

## Shapes

Buttons have customizable shapes via the `data-shape` attribute.

```html render
<button>Block DEFAULT</button>
<button data-variation="clear">Clear DEFAULT</button>
<button data-variation="outline">Outline DEFAULT</button>

<div class="spacer" data-spacing="medium"></div>

<button data-shape="pill">Block PILL</button>
<button data-variation="clear" data-shape="pill">Clear PILL</button>
<button data-variation="outline" data-shape="pill">Outline PILL</button>
```

## Attributes

| Attribute        | Svelte      | Values                                                        | Description                                            |
| ---------------- | ----------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| `aria-pressed`   | `active`    | `true`                                                        | Sets if the Button should appear as if on / pressed    |
| `disabled`       | `disabled`  | `true`                                                        | Sets if the Button should not accept input             |
| `data-palette`   | `palette`   | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Button                   |
| `data-shape`     | `shape`     | `pill`                                                        | Sets the shape of the Button                           |
| `data-size`      | `size`      | `tiny`, `small`, `large`, `huge`                              | Sets how big the Button should appear                  |
| `data-variation` | `variation` | `clear`, `outline`                                            | Sets how the Button should visually represent its self |
