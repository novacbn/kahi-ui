<script>
    import Box from "../../../surfaces/box/Box.svelte";

    import Stack from "../Stack.svelte";

</script>

<Stack {...$$props}>
    <Box palette="alert" style="width:3rem;height:3rem;" />
    <Box palette="affirmative" style="width:3rem;height:3rem;" />
    <Box palette="negative" style="width:3rem;height:3rem;" />
</Stack>
