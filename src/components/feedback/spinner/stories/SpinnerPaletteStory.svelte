<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Spinner from "../Spinner.svelte";

</script>

<Stack spacing="medium" orientation="horizontal">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Spinner {...$$props} />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Spinner {...$$props} palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Spinner {...$$props} palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Spinner {...$$props} palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Spinner {...$$props} palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Spinner {...$$props} palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Spinner {...$$props} palette="negative" />
    </div>
</Stack>
