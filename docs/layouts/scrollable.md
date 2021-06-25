# Scrollable

`Scrollable` is a layout primitive for encapsulating a given available space into its own scrollable context.

```html repl Scrollable Preview
<script>
    import {
        Heading,
        Scrollable,
    } from "@kahi-ui/framework";
</script>

<Scrollable
    style="width:24rem;height:10rem;white-space:nowrap;"
>
    <Heading>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>

    <Heading is="h2">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>

    <Heading is="h3">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>

    <Heading is="h4">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>

    <Heading is="h5">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>

    <Heading is="h6">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        mus.
    </Heading>
</Scrollable>
```

## Imports

```html default Scrollable Imports
<script>
    import {Scrollable} from "@kahi-ui/framework";
</script>
```
