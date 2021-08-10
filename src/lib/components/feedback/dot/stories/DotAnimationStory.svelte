<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Dot from "../Dot.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Dot {...$$props} />
    </div>

    <div>
        <Text>
            <Text is="strong">PULSE</Text>
        </Text>

        <Dot {...$$props} animation="pulse" />
    </div>
</Stack>
