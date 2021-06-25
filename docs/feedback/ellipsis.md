+++
[[properties.Ellipsis]]
name="character"
description="Changes the character being rendered for the animation."
types=["string"]
+++

# Ellipsis

`Ellipsis` is a text-based indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Ellipsis Preview
<script>
    import {
        Button,
        Ellipsis,
        Heading,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack alignment_x="left" spacing="medium">
    <Button disabled>
        <span>
            Submit
            <Ellipsis />
        </span>
    </Button>

    <Heading>
        Loading
        <Ellipsis />
    </Heading>
</Stack>
```

## Imports

```html default Ellipsis Imports
<script>
    import {Ellipsis} from "@kahi-ui/framework";
</script>
```

## Character

You can customize the text character used for the animation via the `character` property.

```html repl Ellipsis Character
<script>
    import {
        Ellipsis,
        Heading,
    } from "@kahi-ui/framework";
</script>

<Heading>
    Loading
    <Ellipsis character="?" />
</Heading>
```
