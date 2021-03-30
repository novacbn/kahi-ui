# Getting Started

## Installation

### NPM

Inside your project's directory, use NPM to install the repository as a dependency:

> **NOTE**: Depending on your Terminal, you might have to quote the repository. e.g. `"github:novacbn/kahi-ui#0.1.0"`

```sh
npm install github:novacbn/kahi-ui#0.1.0
```

Then some where in your code, import the Framework and Theme CSS distributables. For instance in a [SvelteKit](https://kit.svelte.dev), you can add it to a `$layout.svelte` file:

```html
<script>
    import "node_modules/@kahi-ui/framework/dist/kahi-ui.framework.css";
    import "node_mouldes/@kahi-ui/framework/dist/themes/kahi-ui.theme.default.css";
</script>
```

### Stylesheet

If you're not using some sort of "build pipeline" where the NPM method is applicable or just old-fashioned, head over to the [Releases](https://github.com/novacbn/kahi-ui/releases) and download the latest built CSS files. Then link them in your `<head>` element:

```html
<html>
    <head>
        <link rel="stylesheet" href="/path/to/kahi-ui.framework.min.css" />
        <link rel="stylesheet" href="/path/to/kahi-ui.theme.default.min.css" />
    </head>
</html>
```
