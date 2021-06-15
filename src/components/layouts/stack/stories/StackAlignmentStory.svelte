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
        <Text is="strong">CENTER X/Y</Text>

        <Box palette="dark" padding="small">
            <Stack {...$$props} alignment="center" style="width:6rem;height:12rem;">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">STRETCH X</Text>

        <Box palette="dark" padding="small">
            <Stack {...$$props} alignment="stretch" style="width:6rem;height:12rem;">
                <Box palette="alert" style="min-width:3rem;min-height:3rem;" />
                <Box palette="affirmative" style="min-width:3rem;height:3rem;" />
                <Box palette="negative" style="min-width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">LEFT X</Text>

        <Box palette="dark" padding="small">
            <Stack {...$$props} alignment_x="left" style="width:6rem;">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">RIGHT X</Text>

        <Box palette="dark" padding="small" style="width:6rem;">
            <Stack {...$$props} alignment_x="right">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">TOP Y</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} alignment_y="top" style="height:12rem;">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>

    <div>
        <Text is="strong">BOTTOM Y</Text>

        <Box palette="dark" padding="small" width="content-min">
            <Stack {...$$props} alignment_y="bottom" style="height:12rem;">
                <Box palette="alert" style="width:3rem;height:3rem;" />
                <Box palette="affirmative" style="width:3rem;height:3rem;" />
                <Box palette="negative" style="width:3rem;height:3rem;" />
            </Stack>
        </Box>
    </div>
</Stack>
