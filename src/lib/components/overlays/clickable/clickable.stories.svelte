<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import IMAGE_BACKGROUND from "../../../../../.storybook/assets/background.webp";

    import Badge from "../../display/badge/Badge.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Switch from "../../interactables/switch/Switch.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Card from "../../surfaces/card";
    import * as Tile from "../../surfaces/tile";
    import Text from "../../typography/text/Text.svelte";

    import * as Clickable from "./";
</script>

<Meta title="Overlays/Clickable" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Text is="strong">Anchor</Text>

    <Clickable.Container>
        <Card.Container style="max-width:25rem;">
            <Card.Figure>
                <img src={IMAGE_BACKGROUND} />
            </Card.Figure>

            <Card.Header>
                <Clickable.Anchor href="#">Ocean Rockies</Clickable.Anchor>
                <Spacer />
                <Badge palette="affirmative">AVAILABLE</Badge>
            </Card.Header>

            <Card.Section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Card.Section>

            <Card.Footer>
                <Button palette="accent">Book Flight</Button>
            </Card.Footer>
        </Card.Container>
    </Clickable.Container>

    <Text is="strong">Label</Text>

    <Clickable.Container>
        <Tile.Container width="content-max">
            <Tile.Section>
                <Tile.Header>Remember Login?</Tile.Header>

                <Text>
                    <Text is="small">Your session will be saved to your Browser.</Text>
                </Text>
            </Tile.Section>

            <Tile.Footer>
                <Clickable.Label for="clickable-label">
                    <Switch palette="affirmative" />
                </Clickable.Label>
            </Tile.Footer>
        </Tile.Container>
    </Clickable.Container>
</Story>
