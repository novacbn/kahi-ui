<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Radio from "../Radio.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Radio {...$$props} name="radio-size" />
    </div>

    <div>
        <Text>
            <Text is="strong">TINY</Text>
        </Text>

        <Radio {...$$props} name="radio-size" size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Radio {...$$props} name="radio-size" size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Radio {...$$props} name="radio-size" size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Radio {...$$props} name="radio-size" size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Radio {...$$props} name="radio-size" size="huge" />
    </div>
</Stack>
