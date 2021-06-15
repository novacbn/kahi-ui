<script>
    import Button from "../../../interactables/button/Button.svelte";
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Dot from "../Dot.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Text>
        Sample Text (RAISED)
        <Dot {...$$props} palette="accent" position="raised" />
    </Text>

    <div>
        <Button palette="accent">
            Open Inbox (FLOATED)
            <Dot {...$$props} palette="negative" position="floated" />
        </Button>
    </div>
</Stack>
