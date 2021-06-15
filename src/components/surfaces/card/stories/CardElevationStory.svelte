<script>
    import IMAGE_BACKGROUND from "../../../../storybook/assets/images/background.jpg";

    import Badge from "../../../display/badge/Badge.svelte";
    import Mosaic from "../../../layouts/mosaic/Mosaic.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Card from "../index";

</script>

<Mosaic sizing="huge" spacing="large">
    <Card.Container {...$$props} elevation="lowest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>lowest</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container {...$$props}>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>low / default</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container {...$$props} elevation="medium">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>medium</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container {...$$props} elevation="high">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>high</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container {...$$props} elevation="highest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>highest</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>
</Mosaic>
