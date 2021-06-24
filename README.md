![Kahi UI](./.assets/logo.png)

<h1 align="center">Straight-forward Svelte UI for the Web</h1>

<br />

> **IMPORTANT**: [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) is required to use this library, as it is built in Typescript with no packaging build step. That will be fixed when [SvelteKit](https://kit.svelte.dev)'s [package command](https://kit.svelte.dev/docs#packaging) supports type generation.

> **WARNING**: This library is a work-in-progress, use at your own discretion!

## Features

-   **Svelte-first**: All Components are API designed to work well with Svelte as a first-class citizen.
-   **Progressive Enhancements**: Where possible, most logic is codified via CSS / HTML directly. With Javascript-enabled UX enhancements enabled for compatible clients.
-   **Composable**: While 30+ prebuilt Components are available, Kahi UI also provides primitives to design your Application's UI without touching CSS.
-   **Dark Mode**: Components in Kahi UI change colors when a compatible Browser views w/ Dark Mode.
-   **Framework Independent**: Even though Svelte-first, there is no hard toolchain dependencies required. You can just take the built CSS files and use with React or in a traditional SSR environment.
-   **Typescript Compatible**: Kahi UI should be fully typed, so you get easy IDE autocomplete.

## Documentation

Visit the documentation at [kahi-ui.nbn.dev](https://kahi-ui.nbn.dev).

## F.A.Q.

Visit the F.A.Q (frequently asked questions) at [kahi-ui.nbn.dev/docs/framework/faq](https://kahi-ui.nbn.dev/docs/framework/faq).

## Browser Support

-   Chrome 84+ — July 2020
-   Edge 84+ — July 2020
-   Firefox 67+ — May 2019
-   Safari 14.1+ — April 2021
-   Internet Explorer — **UNSUPPORTED**

## Installation

Open your terminal and install via `npm`:

```bash
npm install github:novacbn/kahi-ui#0.2.9
```

Install current in-development code:

```bash
npm install github:novacbn/kahi-ui
```

## Usage

First if your toolchain supports it, import the required CSS files from `@kahi-ui/framework/dist`:

```javascript
import "@kahi-ui/framework/dist/kahi-ui.framework.css";
```

Otherwise download the required CSS files from [Releases](https://github.com/novacbn/kahi-ui/releases/latest) and use `<link rel="stylesheet">`:

```html
<html>
    <head>
        <link rel="stylesheet" href="/path/to/kahi-ui.framework.css" />
    </head>
</html>
```

Next, import Components by their variable name from `@kahi-ui/framework`:

<!-- prettier-ignore -->
```html
<script>
    import {Button, Text} from "@kahi-ui/framework";

    let clicks = 0;

    function on_click(event) {
        clicks++;
    }
</script>

<Text>{clicks}</Text>
<Button on:click={on_click}>Add +1</Button>
```

Some Components are multi-part patterns, so you'll need to import their namespaces:

<!-- prettier-ignore -->
```html
<script>
    import {Button, Card, Text} from "@kahi-ui/framework";
</script>

<Card.Container>
    <Card.Figure>
        <img src="/path/to/card/header/image.png" />
    </Card.Figure>

    <Card.Header>
        Lorem Ipsum
    </Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="affirmative">Open Details</Button>
    </Card.Footer>
</Card.Container>

```

## License

Kahi UI is licensed under the [MIT license](./LICENSE).
