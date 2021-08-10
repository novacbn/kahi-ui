<script>
    import Box from "../../../surfaces/box/Box.svelte";
    import Button from "../../../interactables/button/Button.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Group from "../Group.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Box palette="dark" padding="small">
            <Group {...$$props}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>

        <Box palette="dark" padding="small">
            <Group {...$$props} orientation="vertical">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>
</Stack>
