<script>
    import Box from "../../../surfaces/box/Box.svelte";

    import * as Grid from "../index";
</script>

<Grid.Container {...$$props} points={["6", "mobile:3", "tablet:4", "desktop:5"]} spacing="medium">
    <Box palette="alert" style="height:3rem;" />
    <Grid.Item span_x={["4", "mobile:1", "tablet:2", "desktop:3"]} span_y="1">
        <Box palette="affirmative" />
    </Grid.Item>
    <Box palette="negative" style="height:3rem;" />

    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />
    <Box palette="alert" style="height:3rem;" />

    <Box palette="alert" style="height:3rem;" />
    <Box palette="affirmative" style="height:3rem;" />
    <Box palette="negative" style="height:3rem;" />

    <Grid.Item span_x="3" span_y="2">
        <Box palette="negative" />
    </Grid.Item>
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
