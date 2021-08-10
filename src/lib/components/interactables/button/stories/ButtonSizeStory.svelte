<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Button from "../Button.svelte";

</script>

<Stack alignment_y="top" orientation="horizontal" spacing="medium" variation="wrap">
    <Button {...$$props}>This is a DEFAULT Button!</Button>

    <Button {...$$props} size="tiny">This is a TINY Button!</Button>
    <Button {...$$props} size="small">This is a SMALL Button!</Button>

    <Button {...$$props} size="medium">This is a MEDIUM Button!</Button>

    <Button {...$$props} size="large">This is a LARGE Button!</Button>
    <Button {...$$props} size="huge">This is a HUGE Button!</Button>
</Stack>
