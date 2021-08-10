<script>
    import IMAGE_BACKGROUND from "../../../../../storybook/assets/images/background.jpg";

    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Figure from "../Figure.svelte";
</script>

<Stack spacing="medium">
    <div>
        <div>
            <Text is="strong">DEFAULT</Text>

            <Figure max_width="viewport-25">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>
    </div>

    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">TINY (ICON)</Text>

            <Figure size="tiny" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">SMALL (ICON)</Text>

            <Figure size="small" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">MEDIUM (ICON)</Text>

            <Figure size="medium" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">LARGE (ICON)</Text>

            <Figure size="large" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">HUGE (ICON)</Text>

            <Figure size="huge" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>
    </Stack>

    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">TINY</Text>

            <Figure size="tiny">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">SMALL</Text>

            <Figure size="small">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>

            <Figure size="medium">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">LARGE</Text>

            <Figure size="large">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">HUGE</Text>

            <Figure size="huge">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>
    </Stack>
</Stack>
