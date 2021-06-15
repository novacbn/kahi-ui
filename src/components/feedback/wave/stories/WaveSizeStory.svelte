<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Wave from "../Wave.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Wave {...$$props} />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Wave {...$$props} size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Wave {...$$props} size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Wave {...$$props} size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Wave {...$$props} size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Wave {...$$props} size="huge" />
    </div>
</Stack>
