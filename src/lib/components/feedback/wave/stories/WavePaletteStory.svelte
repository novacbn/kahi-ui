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
            <Text is="strong">ACCENT</Text>
        </Text>

        <Wave {...$$props} palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Wave {...$$props} palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Wave {...$$props} palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Wave {...$$props} palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Wave {...$$props} palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Wave {...$$props} palette="negative" />
    </div>
</Stack>
