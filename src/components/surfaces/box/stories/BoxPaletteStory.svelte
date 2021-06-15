<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Box from "../Box.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Box {...$$props}>This is a <b>DEFAULT</b> Box!</Box>

    <Box {...$$props} palette="accent">This is a <b>ACCENT</b> Box!</Box>

    <Box {...$$props} palette="dark">This is a <b>DARK</b> Box!</Box>
    <Box {...$$props} palette="light">This is a <b>LIGHT</b> Box!</Box>

    <Box {...$$props} palette="alert">This is a <b>ALERT</b> Box!</Box>
    <Box {...$$props} palette="affirmative">This is a <b>AFFIRMATIVE</b> Box!</Box>
    <Box {...$$props} palette="negative">This is a <b>NEGATIVE</b> Box!</Box>
</Stack>
