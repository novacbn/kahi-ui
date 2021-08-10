<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Stack from "../../stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Grid from "../index";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" spacing="tiny" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" spacing="small" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" spacing="medium" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" spacing="large" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="dark" padding="small">
            <Grid.Container {...$$props} points="3" spacing="huge" style="width:12rem;">
                <Box palette="alert" style="height:3rem;" />
                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />

                <Box palette="affirmative" style="height:3rem;" />
                <Box palette="negative" style="height:3rem;" />
                <Box palette="alert" style="height:3rem;" />
            </Grid.Container>
        </Box>
    </div>
</Stack>
