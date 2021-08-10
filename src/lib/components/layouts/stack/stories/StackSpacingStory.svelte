<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Stack from "../Stack.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
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
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} spacing="tiny">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} spacing="small">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} spacing="medium">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} spacing="large">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} spacing="huge">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>
</Stack>
