# Anchor

> Usually used for allowing the user to prompt the Browser to perform navigation to a predetermined location.

```html render
Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">google.com</a>!
```

## Attributes

| Attribute      | Svelte    | Values                                                                              | Description                                                                        |
| -------------- | --------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `aria-current` | `current` | [`Current Token`](https://www.digitala11y.com/aria-current-state/)                  | Allows for assistive software to pick up that the Anchor is active and the context |
| `href`         | `href`    | [`URL`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)      | Sets the target URL to navigate the Browser to                                     |
| `rel`          | `rel`     | [`Link Type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)         | Sets the relationship of the Anchor to the current location                        |
| `target`       | `target`  | [`Target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) | Sets the context the Browser should navigate in when the Anchor is clicked         |
