<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Stack from "../../stack/Stack.svelte";

    import Divider from "../Divider.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Box palette="dark" padding="small" style="width:12rem;">
            <Divider {...$$props}>DEFAULT</Divider>
        </Box>
    </div>

    <div>
        <Box
            palette="dark"
            padding="small"
            style="display:inline-flex;justify-content:center;width:3rem;height:12rem;"
        >
            <Divider {...$$props} orientation="vertical">VERTICAL</Divider>
        </Box>
    </div>
</Stack>
