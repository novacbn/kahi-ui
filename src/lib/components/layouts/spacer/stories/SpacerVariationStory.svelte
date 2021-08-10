<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Stack from "../../stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Spacer from "../Spacer.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">BLOCK / DEFAULT</Text>

        <Box palette="dark" margin_top="small" padding_x="small" padding_y="tiny">
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">INLINE / DEFAULT</Text>

        <Box palette="dark" margin_top="small" padding_x="small" padding_y="tiny">
            LEFT
            <Spacer variation="inline" orientation="horizontal" spacing="huge" />
            RIGHT
        </Box>
    </div>
</Stack>
