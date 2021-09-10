![Kahi UI](./.assets/logo.png)

<h1 align="center">Straight-forward Svelte UI for the Web</h1>

<br />

> **WARNING**: This library is a work-in-progress, use at your own discretion!

## Features

-   **Svelte-first**: All Components are API designed to work well with Svelte as a first-class citizen.
-   **Progressive Enhancements**: Where possible, most logic is codified via CSS / HTML directly. With Javascript-enabled UX enhancements enabled for compatible clients.
-   **Composable**: While 30+ prebuilt Components are available, Kahi UI also provides primitives to design your Application's UI without touching CSS.
-   **Dark Mode**: Components in Kahi UI change colors when a compatible Browser views w/ Dark Mode.
-   **Framework Independent**: Even though Svelte-first, there is no hard toolchain dependencies required. You can just take the built CSS files and use with React or in a traditional SSR environment.
-   **Typescript Native**: Kahi UI tries to be fully typed by using TypeScript as its base language, so you get a complete IDE experience.

## Documentation

> Looking for documentation source? Visit [github.com/kahi-framework/kahi-ui.nbn.dev](https://github.com/kahi-framework/kahi-ui.nbn.dev).

Visit the documentation at [kahi-ui.nbn.dev](https://kahi-ui.nbn.dev).

## F.A.Q.

Visit the F.A.Q (frequently asked questions) at [kahi-ui.nbn.dev/docs/framework/faq](https://kahi-ui.nbn.dev/docs/framework/faq).

## Need Help?

File [a new issue](https://github.com/novacbn/kahi-ui/issues/new) or visit the official [Discord Server](https://kahi-ui.nbn.dev/chat).

## Browser Support

-   Chrome 87+ — November 2020
-   Edge 87+ — November 2020
-   Firefox 67+ — May 2019
-   Safari 14.1+ — April 2021
-   Edge _(Pre Chromium)_ — **UNSUPPORTED**
-   Internet Explorer — **UNSUPPORTED**

## Installation

Open your terminal and install via `npm`:

```bash
npm install @kahi-ui/framework
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
