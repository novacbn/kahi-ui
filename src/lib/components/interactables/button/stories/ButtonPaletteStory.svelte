<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Button from "../Button.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Button {...$$props}>This is a DEFAULT Button!</Button>
    <Button {...$$props} palette="accent">This is a ACCENT Button!</Button>

    <Button {...$$props} palette="light">This is a LIGHT Button!</Button>
    <Button {...$$props} palette="dark">This is a DARK Button!</Button>

    <Button {...$$props} palette="alert">This is a ALERT Button!</Button>
    <Button {...$$props} palette="affirmative">This is a AFFIRMATIVE Button!</Button>
    <Button {...$$props} palette="negative">This is a NEGATIVE Button!</Button>
</Stack>
