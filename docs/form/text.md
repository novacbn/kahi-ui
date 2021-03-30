# Text

> Useful for gathering string-based input from users.

```html render
<label for="snippet-text-1">Enter you name:</label>
<input id="snippet-text-1" type="text" value="John Doe" />
```

## States

Texts can adjust their visuals to match its current state.

```html render
<div class="stack" data-spacing="medium">
    <input type="text" value="Text DEFAULT" />

    <input type="text" value="Text DISABLED" disabled />
    <input type="text" value="Text READONLY" readonly />
</div>
```

## Placeholder

Texts can display placeholder text if there is no input via the `placeholder` attribute.

```html render
<input type="email" placeholder="Enter your E-Mail to register, e.g. foo@bar.com" />
```

## Inputs Types

Texts can customize how they receive input from the user via the `type` attribute.

```html render
<div class="stack" data-spacing="medium">
    <input type="text" value="Text DEFAULT" />

    <input type="email" value="Text E-MAIL" />
    <input type="password" value="Text PASSWORD" />
    <input type="search" value="Text SEARCH" />
    <input type="url" value="Text URL" />
</div>
```

## Validation

Texts can be customized to automatically match their palette to current validation state via the `data-validate` attribute.

```html render
<input type="url" minlength="5" value="httuuuuup://www.google.com" data-validate />
```

## Palettes

Texts have customizable coloring via the `data-palette` attribute.

```html render
<div class="stack" data-spacing="medium">
    <input type="text" value="Text DEFAULT" />

    <input type="text" data-palette="accent" value="Text ACCENT" />

    <input type="text" data-palette="dark" value="Text DARK" />
    <input type="text" data-palette="light" value="Text LIGHT" />

    <input type="text" data-palette="alert" value="Text ALERT" />
    <input type="text" data-palette="affirmative" value="Text AFFIRMATIVE" />
    <input type="text" data-palette="negative" value="Text NEGATIVE" />
</div>
```

## Shapes

Texts have customizable shapes via the `data-shape` attribute.

```html render
<div class="stack" data-spacing="medium">
    <input type="text" value="Text DEFAULT" />
    <input type="text" data-shape="pill" value="Text Pill" />
</div>
```

## TextArea

```html render
<textarea placeholder="Enter your comment to post..."></textarea>
```

## Attributes

| Attribute       | Svelte        | Values                                                        | Description                                                             |
| --------------- | ------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `disabled`      | `disabled`    | `true`                                                        | Sets if the Text should not accept input                                |
| `placeholder`   | `placeholder` | `string`                                                      | Sets the placeholder text that should appear if there is no input       |
| `readonly`      | `readonly`    | `true`                                                        | Sets if the Text should not accept input but not visually changed       |
| `data-palette`  | `palette`     | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Button                                    |
| `data-shape`    | `shape`       | `pill`                                                        | Sets the shape of the Button                                            |
| `data-validate` | `validate`    | `true`                                                        | Sets if the Text should visually adapt to if the current input is valid |
