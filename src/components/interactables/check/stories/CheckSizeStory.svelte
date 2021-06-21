<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Check from "../Check.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Check {...$$props} />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Check {...$$props} size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Check {...$$props} size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Check {...$$props} size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Check {...$$props} size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Check {...$$props} size="huge" />
    </div>
</Stack>
