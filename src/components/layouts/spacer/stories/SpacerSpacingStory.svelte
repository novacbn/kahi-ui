<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Text from "../../../typography/text/Text.svelte";
    import Stack from "../../stack/Stack.svelte";

    import Spacer from "../Spacer.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">TINY</Text>
        <Box palette="dark" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="tiny" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box palette="dark" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="small" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box palette="dark" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="medium" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box palette="dark" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="large" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box palette="dark" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>
</Stack>
