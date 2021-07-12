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

        <Check {...$$props} variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Check {...$$props} palette="accent" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Check {...$$props} palette="dark" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Check {...$$props} palette="light" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Check {...$$props} palette="alert" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Check {...$$props} palette="affirmative" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Check {...$$props} palette="negative" variation="flush" />
    </div>
</Stack>
