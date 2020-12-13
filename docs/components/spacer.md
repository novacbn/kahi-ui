# Spacer

> Useful for providing visual spacing to break up content, for easier digestion.

```html
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
<div class="spacer" data-spacing="huge"></div>
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
```

## Inline

Spacers can be customized to be inline for spacing things like icons.

```html
<button>
    Close Window
    <span class="spacer" data-orientation="horizontal" data-spacing="medium"></span>
    X
</button>
```

## Spacing

> **NOTE**: `data-spacing` values can be delimited by viewports, e.g. `data-spacing="small huge+small"`

Spacers have customizable spacing between on between elements.

### Block

```html
<p>Spacer TINY</p>
<div class="spacer spacing-block" data-spacing="tiny"></div>

<p>Spacer SMALL</p>
<div class="spacer spacing-block" data-spacing="small"></div>

<p>Spacer MEDIUM</p>
<div class="spacer spacing-block" data-spacing="medium"></div>

<p>Spacer LARGE</p>
<div class="spacer spacing-block" data-spacing="large"></div>

<p>Spacer HUGE</p>
<div class="spacer spacing-block" data-spacing="huge"></div>

<style>
    .spacer.spacing-block {
        width: 100%;

        border: 1px solid hsl(var(--palette-dark-base));
        margin-bottom: var(--spacing-block-small);
    }
</style>
```

### Inline

```html
<p>Spacer<span class="spacer" data-orientation="horizontal" data-spacing="tiny"></span>TINY</p>
<p>Spacer<span class="spacer" data-orientation="horizontal" data-spacing="small"></span>SMALL</p>
<p>Spacer<span class="spacer" data-orientation="horizontal" data-spacing="medium"></span>MEDIUM</p>
<p>Spacer<span class="spacer" data-orientation="horizontal" data-spacing="large"></span>LARGE</p>
<p>Spacer<span class="spacer" data-orientation="horizontal" data-spacing="huge"></span>HUGE</p>
```

## Orientation

Spacers can be customized to provide vertical **OR** horizontal spacing.

### Block

```html
<div class="stack orientation-block" data-spacing="small">
    <span>Block VERTICAL</span>
    <div class="spacer" data-spacing="huge"></div>
    <span>Block VERTICAL</span>
</div>

<div class="stack orientation-block" data-spacing="small" data-orientation="horizontal">
    <span>Block HORIZONTAL</span>
    <div class="spacer" data-orientation="horizontal" data-spacing="huge"></div>
    <span>Block HORIZONTAL</span>
</div>

<style>
    .stack.orientation-block:first-child {
        margin-bottom: var(--spacing-block-huge);
    }

    .stack.orientation-block > .spacer {
        border: 1px solid hsl(var(--palette-dark-base));
    }

    .stack.orientation-block:not([data-orientation]) > .spacer {
        width: 100%;
    }

    .stack.orientation-block[data-orientation="horizontal"] > .spacer {
        height: 3.3ex;
    }
</style>
```

### Inline

```html
<button>
    Inline
    <span class="spacer" data-orientation="horizontal" data-spacing="huge"></span>
    HORIZONTAL
</button>
```

## Attributes

| Attribute          | Svelte        | Values                                                     | Description                                              |
| ------------------ | ------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| `data-orientation` | `orientation` | `orientation`                                              | Sets the axis orientation of the Spacer                  |
| `data-spacing`     | `spacing`     | `tiny`, `small`, `medium`, `large`, `huge`, `*+(VIEWPORT)` | Sets the amount of visual spacing provided by the Spacer |
| `N/A`              | `inline`      | `false`, `true`                                            | **(SVELTE ONLY)** Renders the Spacer as `<span>`         |
