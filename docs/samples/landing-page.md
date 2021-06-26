# Landing Page

## Landing Preview

> TODO: Something more impressive can and should be made...?

Displayed in the main landing page of [kahi-ui.nbn.dev](https://kahi-ui.nbn.dev).

```svelte repl Landing Preview
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container class="landing-preview">
    <Card.Header>
        Ocean Rockies
        <Spacer />
        <Badge palette="affirmative">AVAILABLE</Badge>
    </Card.Header>

    <Card.Figure>
        <img src={IMAGE_BACKGROUND} />
    </Card.Figure>

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

<style>
    :global(.landing-preview) {
        max-width: 35ch;
    }
</style>
```
