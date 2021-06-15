<script>
    import IMAGE_BACKGROUND from "../../../../storybook/assets/images/background.jpg";

    import Mosaic from "../../../layouts/mosaic/Mosaic.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import Figure from "../Figure.svelte";

</script>

<Mosaic spacing="medium" sizing="huge">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure>
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">PILL</Text>
        <Figure shape="pill">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">ROUNDED</Text>
        <Figure shape="rounded">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>
</Mosaic>
