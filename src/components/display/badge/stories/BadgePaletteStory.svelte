<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Badge from "../Badge.svelte";

</script>

<Stack spacing="medium" orientation="horizontal" variation="wrap">
    <Badge {...$$props}>This is a DEFAULT Badge</Badge>
    <Badge {...$$props} palette="accent">This is a ACCENT Badge</Badge>

    <Badge {...$$props} palette="dark">This is a DARK Badge</Badge>
    <Badge {...$$props} palette="light">This is a LIGHT Badge</Badge>

    <Badge {...$$props} palette="alert">This is a ALERT Badge</Badge>
    <Badge {...$$props} palette="affirmative">This is a AFFIRMATIVE Badge</Badge>
    <Badge {...$$props} palette="negative">This is a NEGATIVE Badge</Badge>
</Stack>
