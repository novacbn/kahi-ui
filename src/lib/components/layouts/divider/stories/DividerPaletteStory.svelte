<script>
    import Text from "../../../typography/text/Text.svelte";
    import Mosaic from "../../mosaic/Mosaic.svelte";

    import Divider from "../Divider.svelte";

</script>

<Mosaic sizing="large" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Divider {...$$props} />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <Divider {...$$props} palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <Divider {...$$props} palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <Divider {...$$props} palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <Divider {...$$props} palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <Divider {...$$props} palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <Divider {...$$props} palette="negative" />
    </div>
</Mosaic>
