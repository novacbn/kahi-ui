<script>
    import Button from "../../../interactables/button/Button.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Badge from "../Badge.svelte";
</script>

<Stack spacing="medium">
    <Text>
        Sample Text (RAISED)
        <Badge {...$$props} palette="accent" position="raised">+99</Badge>
    </Text>

    <div>
        <Button palette="accent">
            Open Inbox (FLOATED)
            <Badge {...$$props} palette="negative" position="floated">+99</Badge>
        </Button>
    </div>
</Stack>
