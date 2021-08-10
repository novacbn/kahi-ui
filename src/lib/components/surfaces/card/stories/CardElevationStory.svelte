<script>
    import IMAGE_BACKGROUND from "../../../../../storybook/assets/images/background.jpg";

    import Badge from "../../../display/badge/Badge.svelte";
    import Mosaic from "../../../layouts/mosaic/Mosaic.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Card from "../index";

    const ELEVATIONS = [
        ["lowest", true],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["highest", false],
    ];
</script>

<Mosaic sizing="huge" spacing="large">
    {#each ELEVATIONS as [elevation, is_default] (elevation)}
        <Card.Container {...$$props} {elevation}>
            <Card.Figure>
                <img src={IMAGE_BACKGROUND} />
            </Card.Figure>

            <Card.Header>
                Ocean Rockies
                <Spacer />
                <Badge>
                    {elevation}
                    {is_default ? " / default" : ""}
                </Badge>
            </Card.Header>

            <Card.Section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Card.Section>
        </Card.Container>
    {/each}
</Mosaic>
