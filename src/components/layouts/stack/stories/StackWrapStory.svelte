<script>
    import Box from "../../../surfaces/box/Box.svelte";

    import Stack from "../Stack.svelte";

</script>

<Stack {...$$props} orientation="horizontal" spacing="huge" variation="wrap">
    <Box palette="alert" style="width:6rem;height:6rem;" />
    <Box palette="affirmative" style="width:6rem;height:6rem;" />
    <Box palette="negative" style="width:6rem;height:6rem;" />

    <Box palette="alert" style="width:6rem;height:6rem;" />
    <Box palette="affirmative" style="width:6rem;height:6rem;" />
    <Box palette="negative" style="width:6rem;height:6rem;" />

    <Box palette="alert" style="width:6rem;height:6rem;" />
    <Box palette="affirmative" style="width:6rem;height:6rem;" />
    <Box palette="negative" style="width:6rem;height:6rem;" />

    <Box palette="alert" style="width:6rem;height:6rem;" />
    <Box palette="affirmative" style="width:6rem;height:6rem;" />
    <Box palette="negative" style="width:6rem;height:6rem;" />

    <Box palette="alert" style="width:6rem;height:6rem;" />
    <Box palette="affirmative" style="width:6rem;height:6rem;" />
    <Box palette="negative" style="width:6rem;height:6rem;" />
</Stack>
