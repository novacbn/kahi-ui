<script>
    import Box from "../../../surfaces/box/Box.svelte";

    import * as Grid from "../index";
</script>

<Grid.Container {...$$props} points={["6", "mobile:3", "tablet:4", "desktop:5"]} spacing="medium">
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
</Grid.Container>
