<script>
    import IMAGE_BACKGROUND from "../../../../storybook/assets/images/background.jpg";

    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Figure from "../Figure.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Figure variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>

    <div>
        <Text is="strong">CONTAIN</Text>

        <Figure fit="contain" variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>

    <div>
        <Text is="strong">COVER</Text>

        <Figure fit="cover" variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>

    <div>
        <Text is="strong">FILL</Text>

        <Figure fit="fill" variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>

    <div>
        <Text is="strong">NONE</Text>

        <Figure fit="none" variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>

    <div>
        <Text is="strong">SCALE-DOWN</Text>

        <Figure fit="scale-down" variation="icon">
            <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
        </Figure>
    </div>
</Stack>
