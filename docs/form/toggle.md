# Toggle

> Useful for presenting a range of boolean options to the user.

## Check

Used for presenting an on / off input to the user.

```html render
<div class="stack" data-spacing="tiny" data-orientation="horizontal">
    <input id="snippet-check-sample" type="checkbox" data-palette="accent" checked />
    <label for="snippet-check-sample">Subscribe to Newsletter?</label>
</div>
```

### States

Checks can adjust their visuals to match its current state.

```html render
<div class="stack" data-spacing="medium">
    <label><input type="checkbox" /> — Check DEFAULT</label>

    <label><input type="checkbox" checked /> — Check ACTIVE</label>
    <label><input type="checkbox" disabled /> — Check DISABLED</label>
</div>
```

### Palettes

Checks have customizable coloring via the `data-palette` attribute.

```html render
<div class="stack" data-spacing="medium">
    <label><input type="checkbox" /> — Check DEFAULT</label>

    <label><input type="checkbox" data-palette="accent" /> — Check ACCENT</label>

    <label><input type="checkbox" data-palette="dark" /> — Check DARK</label>
    <label><input type="checkbox" data-palette="light" /> — Check LIGHT</label>

    <label><input type="checkbox" data-palette="alert" /> — Check ALERT</label>
    <label><input type="checkbox" data-palette="affirmative" /> — Check AFFIRMATIVE </label>
    <label><input type="checkbox" data-palette="negative" /> — Check NEGATIVE</label>
</div>
```

### Variations

Checks have customizable visual variations via the `data-variation` attribute.

```html render
<div class="stack" data-spacing="medium">
    <label><input type="checkbox" checked /> — Check MARK</label>

    <label><input type="checkbox" data-variation="cross" checked /> — Check CROSS</label>
</div>
```

## Radio

```html render
<div class="stack" data-spacing="medium" data-orientation="horizontal">
    <span>Select Language:</span>

    <label>
        <input name="snippet-radio-sample" type="radio" data-palette="accent" checked /> — English
    </label>
    <label>
        <input name="snippet-radio-sample" type="radio" data-palette="negative" /> — German
    </label>
</div>
```

### States

Radios can adjust their visuals to match its current state.

```html render
<div class="stack" data-spacing="medium">
    <label><input name="snippet-radio-states" type="radio" /> — Radio DEFAULT</label>

    <label><input name="snippet-radio-states" type="radio" checked /> — Radio ACTIVE</label>
    <label><input name="snippet-radio-states" type="radio" disabled /> — Radio DISABLED</label>
</div>
```

### Palettes

Radios have customizable coloring via the `data-palette` attribute.

```html render
<div class="stack" data-spacing="medium">
    <label><input name="snippet-radio-palettes" type="radio" checked /> — Radio DEFAULT</label>

    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="accent" /> — Radio ACCENT
    </label>

    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="dark" /> — Radio DARK
    </label>
    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="light" /> — Radio LIGHT
    </label>

    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="alert" /> — Radio ALERT
    </label>
    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="affirmative" /> — Radio
        AFFIRMATIVE
    </label>
    <label>
        <input name="snippet-radio-palettes" type="radio" data-palette="negative" /> — Radio
        NEGATIVE
    </label>
</div>
```

## Switch

Used as an alternate visual variant of `Check` Toggles.

```html render
<div class="stack" data-spacing="medium" data-orientation="horizontal">
    <label for="snippet-switch-sample">Enable <strong>Do Not Disturb</strong>?</label>
    <input id="snippet-switch-sample" type="checkbox" role="switch" data-palette="negative" />
</div>
```

### States

Switches can adjust their visuals to match its current state.

```html render
<div class="stack" data-spacing="medium">
    <label><input type="checkbox" role="switch" /> — Switch DEFAULT</label>

    <label><input type="checkbox" role="switch" checked /> — Switch ACTIVE</label>
    <label><input type="checkbox" role="switch" disabled /> — Switch DISABLED</label>
</div>
```

### Palettes

Switches have customizable coloring via the `data-palette` attribute.

```html render
<div class="stack" data-spacing="medium">
    <label><input type="checkbox" role="switch" /> — Switch DEFAULT</label>

    <label><input type="checkbox" role="switch" data-palette="accent" /> — Switch ACCENT</label>

    <label><input type="checkbox" role="switch" data-palette="dark" /> — Switch DARK</label>
    <label><input type="checkbox" role="switch" data-palette="light" /> — Switch LIGHT</label>

    <label><input type="checkbox" role="switch" data-palette="alert" /> — Switch ALERT</label>
    <label>
        <input type="checkbox" role="switch" data-palette="affirmative" /> — Switch AFFIRMATIVE
    </label>
    <label><input type="checkbox" role="switch" data-palette="negative" /> — Switch NEGATIVE</label>
</div>
```

## Attributes

| Attribute                         | Svelte      | Values                                                        | Description                                   |
| --------------------------------- | ----------- | ------------------------------------------------------------- | --------------------------------------------- |
| `disabled`                        | `disabled`  | `true`                                                        | Sets if the Toggle should not accept input    |
| `data-palette`                    | `palette`   | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Toggle          |
| **(CHECK ONLY)** `data-variation` | `variation` | `cross`                                                       | Sets the visual variation of the Check Toggle |
