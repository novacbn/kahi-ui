<script>
    import IMAGE_BACKGROUND from "../../../../../storybook/assets/images/background.jpg";

    import Badge from "../../../display/badge/Badge.svelte";
    import Button from "../../../interactables/button/Button.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Card from "../index";
</script>

<Card.Container {...$$props} style="max-width:25rem;" variation="flush">
    <Card.Figure>
        <img src={IMAGE_BACKGROUND} />
    </Card.Figure>

    <Card.Header>
        Ocean Rockies
        <Spacer />
        <Badge palette="affirmative">AVAILABLE</Badge>
    </Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="accent">Book Flight</Button>
    </Card.Footer>
</Card.Container>
