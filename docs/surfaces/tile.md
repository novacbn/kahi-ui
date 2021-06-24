+++
[[properties."Tile.Container"]]
name="elevation"
description="Alters how \"high\" the <code>Tile</code> appears to be off the page."
default="low"
types=["lowest", "low", "medium", "high", "highest"]

[[properties."Tile.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["accent", "dark", "light", "alert", "affirmative", "negative"]
+++

# Tile

`Tile` is a multi-part surface pattern for displaying a section of content in a short-form horizontal format.

<!-- prettier-ignore -->
```html repl Tile Preview
<script>
    import {Button, Text, Tile} from "@kahi-ui/framework";
</script>

<Tile.Container {...$$props} width="content-max">
    <Tile.Figure shape="pill">
        <img src={IMAGE_AVATAR} />
    </Tile.Figure>

    <Tile.Section>
        <Tile.Header>NovacBN</Tile.Header>

        <Text>
            <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
        </Text>
    </Tile.Section>

    <Tile.Footer>
        <Button palette="affirmative">Add Friend</Button>
        <Button palette="negative">Ban User</Button>
    </Tile.Footer>
</Tile.Container>
```

## Imports

```html default Tile Imports
<script>
    import {Tile} from "@kahi-ui/framework";

    const {Container, Figure, Footer, Header, Section} = Tile;
</script>
```

## Palette

You can change the color palette of the `Tile` via the `palette` property.

```html repl Tile Palette
<script>
    import {Stack, Text, Tile} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Tile.Container {...$$props} width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">DEFAULT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="accent" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">ACCENT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="dark" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">DARK</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="light" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">LIGHT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="alert" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">ALERT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="affirmative" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">AFFIRMATIVE</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} palette="negative" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">NEGATIVE</Text>
        </Tile.Footer>
    </Tile.Container>
</Stack>
```

## Elevation

You can set how "high" your `Tile` will appear to be over top the page via the `elevation` property.

```html repl Tile Elevation
<script>
    import {Stack, Text, Tile} from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="large" variation="wrap">
    <Tile.Container {...$$props} elevation="lowest" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">lowest</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">low / default</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="medium" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">medium</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="high" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">high</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="highest" width="content-max">
        <Tile.Figure shape="pill">
            <img src="{IMAGE_AVATAR}" />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">joined 2018 &bullet; last online 2021/05/29</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">highest</Text>
        </Tile.Footer>
    </Tile.Container>
</Stack>
```
