<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Button from "../Button.svelte";
</script>

<Stack alignment_y="top" orientation="horizontal" spacing="medium" variation="wrap">
    <Button {...$$props}>This is a DEFAULT Button!</Button>

    <Button {...$$props} href="https://google.com" target="_blank" rel="noopener noreferrer">
        This is an ANCHOR Button!
    </Button>

    <Button {...$$props} value="This is an INPUT Button!" />
    <Button {...$$props} type="submit" value="This is a SUBMIT Button!" />
    <Button {...$$props} type="reset" value="This is a RESET Button!" />
</Stack>
