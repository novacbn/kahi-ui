<script>
    import Box from "../../../surfaces/box/Box.svelte";

    import Mosaic from "../Mosaic.svelte";

</script>

<Mosaic {...$$props} sizing="huge" spacing="medium">
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />

    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />

    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />

    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />

    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />

    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />

    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
</Mosaic>
