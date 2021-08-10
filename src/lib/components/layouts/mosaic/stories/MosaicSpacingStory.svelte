<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Stack from "../../stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Mosaic from "../Mosaic.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny" spacing="tiny">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny" spacing="small">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny" spacing="medium">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny" spacing="large">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Mosaic {...$$props} sizing="tiny" spacing="huge">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
            </Mosaic>
        </Box>
    </div>
</Stack>
