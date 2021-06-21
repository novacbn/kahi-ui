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
            <Text is="strong">TINY</Text>
        </Text>

        <Switch {...$$props} size="tiny" />
    </div>

    <div>
        <Text>
            <Text is="strong">SMALL</Text>
        </Text>

        <Switch {...$$props} size="small" />
    </div>

    <div>
        <Text>
            <Text is="strong">MEDIUM</Text>
        </Text>

        <Switch {...$$props} size="medium" />
    </div>

    <div>
        <Text>
            <Text is="strong">LARGE</Text>
        </Text>

        <Switch {...$$props} size="large" />
    </div>

    <div>
        <Text>
            <Text is="strong">HUGE</Text>
        </Text>

        <Switch {...$$props} size="huge" />
    </div>
</Stack>
