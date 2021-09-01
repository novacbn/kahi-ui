<script>
    import IMAGE_BACKGROUND from "../../../../storybook/assets/images/background.jpg";

    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Badge from "../../display/badge/Badge.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Card from "./index";
    import Button from "../../interactables/button/Button.svelte";
    import Mosaic from "../../layouts/mosaic/Mosaic.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    const ELEVATIONS = [
        ["lowest", true],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["highest", false],
    ];

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const SIZINGS = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Surfaces/Card" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Card.Container style="max-width:25rem;">
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
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>

        <Card.Footer>
            <Button palette="accent">Book Flight</Button>
        </Card.Footer>
    </Card.Container>
</Story>

<Story name="Flush">
    <Card.Container variation="flush" style="max-width:25rem;">
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
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>

        <Card.Footer>
            <Button palette="accent">Book Flight</Button>
        </Card.Footer>
    </Card.Container>
</Story>

<Story name="Palette">
    <Mosaic sizing="huge" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <Card.Container {palette}>
                <Card.Figure>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    Ocean Rockies
                    <Spacer />
                    <Badge>
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Badge>
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>

                <Card.Footer>
                    <Button>Book Flight</Button>
                </Card.Footer>
            </Card.Container>
        {/each}
    </Mosaic>
</Story>

<Story name="Elevation">
    <Mosaic sizing="huge" spacing="medium">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Card.Container {elevation}>
                <Card.Figure>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    Ocean Rockies
                    <Spacer />
                    <Badge>
                        {`${elevation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Badge>
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>

                <Card.Footer>
                    <Button>Book Flight</Button>
                </Card.Footer>
            </Card.Container>
        {/each}
    </Mosaic>
</Story>

<Story name="Sizing">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Card.Container style="max-width:25rem;" {sizing}>
                <Card.Header>
                    Ocean Rockies
                    <Spacer />
                    <Badge style="font-size:0.75em;">
                        {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Badge>
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>

                <Card.Footer>
                    <Button size={sizing}>Book Flight</Button>
                </Card.Footer>
            </Card.Container>
        {/each}
    </Stack>
</Story>
