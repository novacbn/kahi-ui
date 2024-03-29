<script>
    import IMAGE_BACKGROUND from "../../../../../.storybook/assets/background.webp";

    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Badge from "../../display/badge/Badge.svelte";
    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import * as Card from "./index";

    const ELEVATIONS = [
        ["lower", true],
        ["none", false],
        ["lowest", false],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["higher", false],
        ["highest", false],
    ];

    const FITS = [
        ["fill", true],
        ["contain", false],
        ["cover", false],
        ["none", false],
        ["scale-down", false],
    ];

    const ORIENTATIONS = [
        ["horizontal", true],
        ["vertical", false],
    ];

    const PALETTES = [
        ["auto", true],
        ["inverse", false],
        ["accent", false],
        ["neutral", false],
        ["off", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const RADIUS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SHAPES = [
        ["circle", false],
        ["pill", false],
    ];

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SPACINGS = [
        ["small", true],
        ["none", false],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Surfaces/Card" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Card.Container width="huge">
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
    <Card.Container variation="flush" width="huge">
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
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Card.Container palette={is_default ? undefined : palette} width="huge">
                <Card.Figure>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elevation">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Card.Container elevation={is_default ? undefined : elevation} width="huge">
                <Card.Header>
                    {`${elevation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Card.Container sizing={is_default ? undefined : sizing} width="huge">
                <Card.Header>
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Figure - Fit">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FITS as [fit, is_default] (fit)}
            <Card.Container width="huge">
                <Card.Figure fit={is_default ? undefined : fit}>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    {`${fit.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Figure - Radius">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <Card.Container width="huge">
                <Card.Figure radius={is_default ? undefined : radius}>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Figure - Shape">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Card.Container width="huge">
                <Card.Figure shape={is_default ? undefined : shape}>
                    <img src={IMAGE_BACKGROUND} />
                </Card.Figure>

                <Card.Header>
                    {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Footer - Orientation">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <Card.Container width="huge">
                <Card.Header>
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>

                <Card.Footer orientation={is_default ? undefined : orientation}>
                    <Button variation="clear">Cancel</Button>
                    <Button palette="accent">Confirm</Button>
                </Card.Footer>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Footer - Spacing">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <Card.Container width="huge">
                <Card.Header>
                    {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Card.Header>

                <Card.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Card.Section>

                <Card.Footer spacing={is_default ? undefined : spacing}>
                    <Button variation="clear">Cancel</Button>
                    <Button palette="accent">Confirm</Button>
                </Card.Footer>
            </Card.Container>
        {/each}
    </Stack.Container>
</Story>
