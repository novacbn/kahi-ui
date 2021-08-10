<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Stack from "../Stack.svelte";

</script>

<Stack alignment_y="top" orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props}>
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">HORIZONTAL</Text>

        <Box palette="dark" padding="small">
            <Stack {...$$props} orientation="horizontal">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>
</Stack>
