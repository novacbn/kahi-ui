<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Text from "../../../typography/text/Text.svelte";
    import Stack from "../../stack/Stack.svelte";

    import Divider from "../Divider.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box
            palette="dark"
            padding="small"
            style="display:flex;align-items:center;height:2rem;width:6rem;"
        >
            <Divider {...$$props} />
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>

        <Box palette="dark" padding="small" style="width:min-content;height:6rem;">
            <Divider orientation="vertical" {...$$props} />
        </Box>
    </div>
</Stack>
