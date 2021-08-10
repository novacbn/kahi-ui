<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Button from "../Button.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Button {...$$props} variation="outline">This is a DEFAULT Button!</Button>
    <Button {...$$props} variation="outline" palette="accent">This is a ACCENT Button!</Button>

    <Button {...$$props} variation="outline" palette="light">This is a LIGHT Button!</Button>
    <Button {...$$props} variation="outline" palette="dark">This is a DARK Button!</Button>

    <Button {...$$props} variation="outline" palette="alert">This is a ALERT Button!</Button>
    <Button {...$$props} variation="outline" palette="affirmative"
        >This is a AFFIRMATIVE Button!</Button
    >
    <Button {...$$props} variation="outline" palette="negative">This is a NEGATIVE Button!</Button>
</Stack>
