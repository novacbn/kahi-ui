<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Switch from "../Switch.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text>
            <Text is="strong">DEFAULT</Text>
        </Text>

        <Switch {...$$props} />
    </div>

    <div>
        <Text>
            <Text is="strong">ACCENT</Text>
        </Text>

        <Switch {...$$props} palette="accent" />
    </div>

    <div>
        <Text>
            <Text is="strong">DARK</Text>
        </Text>

        <Switch {...$$props} palette="dark" />
    </div>

    <div>
        <Text>
            <Text is="strong">LIGHT</Text>
        </Text>

        <Switch {...$$props} palette="light" />
    </div>

    <div>
        <Text>
            <Text is="strong">ALERT</Text>
        </Text>

        <Switch {...$$props} palette="alert" />
    </div>

    <div>
        <Text>
            <Text is="strong">AFFIRMATIVE</Text>
        </Text>

        <Switch {...$$props} palette="affirmative" />
    </div>

    <div>
        <Text>
            <Text is="strong">NEGATIVE</Text>
        </Text>

        <Switch {...$$props} palette="negative" />
    </div>
</Stack>
