+++
[[properties."Card.Container"]]
name="elevation"
description="Alters how \"high\" the <code>Card</code> appears to be off the page."
default="low"
types=["lowest", "low", "medium", "high", "highest"]

[[properties."Card.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Card

`Card` is a multi-part surface pattern for displaying a section of content in a long-form vertical format.

```svelte repl Card Preview
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

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
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="accent">Book Flight</Button>
    </Card.Footer>
</Card.Container>
```

## Imports

```html default Card Imports
<script>
    import {Card} from "@kahi-ui/framework";

    const {
        Container,
        Figure,
        Footer,
        Header,
        Section,
    } = Card;
</script>
```

## Palette

You can change the color palette of the `Card` via the `palette` property.

```svelte repl Card Palette
<script>
    import {
        Badge,
        Button,
        Card,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="large" spacing="medium">
    <Card.Container>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>DEFAULT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="accent">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>ACCENT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="dark">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>DARK</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="light">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LIGHT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="alert">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>ALERT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="affirmative">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>AFFIRMATIVE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="negative">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>NEGATIVE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>
</Mosaic>
```

## Elevation

You can set how "high" your `Card` will appear to be over top the page via the `elevation` property.

```svelte repl Card Elevation
<script>
    import {
        Badge,
        Button,
        Card,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="large" spacing="large">
    <Card.Container elevation="lowest">
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
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container>
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
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="medium">
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
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="high">
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
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="highest">
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
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>
    </Card.Container>
</Mosaic>
```
