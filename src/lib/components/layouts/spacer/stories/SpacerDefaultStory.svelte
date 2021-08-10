<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Stack from "../../stack/Stack.svelte";

    import Spacer from "../Spacer.svelte";

</script>

<Box palette="dark" padding_x="small" padding_y="tiny">
    <Stack orientation="horizontal">
        LEFT
        <Spacer />
        RIGHT
    </Stack>
</Box>
