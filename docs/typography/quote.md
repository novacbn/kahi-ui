# Quote

> Useful for calling out to the user that a body of text is a quote from another source.

```html render
<blockquote>
    <p>
        A block quotation (also known as a long quotation or extract) is a quotation in a written
        document, that is set off from the main text as a paragraph, or block of text.
    </p>

    <p>
        It is typically distinguished visually using indentation and a different typeface or smaller
        size quotation. It may or may not include a citation, usually placed at the bottom.
    </p>

    <cite>
        <a href="#">Said no one, ever.</a>
    </cite>
</blockquote>
```

## Palettes

Quotes have customizable coloring via the `data-palette` attribute.

```html render
<blockquote>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote DEFAULT</cite>
</blockquote>

<blockquote data-palette="accent">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote ACCENT</cite>
</blockquote>

<blockquote data-palette="dark">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote DARK</cite>
</blockquote>

<blockquote data-palette="light">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote LIGHT</cite>
</blockquote>

<blockquote data-palette="alert">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote ALERT</cite>
</blockquote>

<blockquote data-palette="affirmative">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote AFFIRMATIVE</cite>
</blockquote>

<blockquote data-palette="negative">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur,
        viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis.
    </p>

    <cite>Quote NEGATIVE</cite>
</blockquote>
```

## Attributes

| Attribute      | Svelte    | Values                                                        | Description                         |
| -------------- | --------- | ------------------------------------------------------------- | ----------------------------------- |
| `data-palette` | `palette` | `accent`, `dark`, `light`, `alert`, `affirmative`, `negative` | Sets the color visuals of the Quote |
