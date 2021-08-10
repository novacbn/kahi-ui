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

        <Radio {...$$props} name="radio-palette" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="accent" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="dark" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="light" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="alert" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="affirmative" variation="flush" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Radio {...$$props} name="radio-palette" palette="negative" variation="flush" />
    </div>
</Stack>
