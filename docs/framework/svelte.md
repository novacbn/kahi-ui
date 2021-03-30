# Svelte

The Framework offers first-class bindings for Svelte via the [`@kahi-ui/svelte`](https://github.com/novacbn/kahi-ui-svelte) package.

## Installation

Inside your project's directory, use NPM to install the repository as a dependency:

> **NOTE**: Depending on your Terminal, you might have to quote the repository. e.g. `"github:novacbn/kahi-ui-svelte#0.1.0"`

```sh
npm install github:novacbn/kahi-ui-svelte#0.1.0
```

## Usage

Most of the bindings are 1:1 with matching semantic naming:

```html
<script>
    import {Button, Heading} from "@kahi-ui/svelte";

    let count = 0;
</script>

<Heading>I have been pressed {count} times!</Heading>

<Button on:click={(event) => count++;}>+1 Count</Button>
```
