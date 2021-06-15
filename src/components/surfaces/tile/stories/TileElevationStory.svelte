<script>
    import IMAGE_AVATAR from "../../../../storybook/assets/images/avatar.png";

    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Tile from "../index";

</script>

<Stack orientation="horizontal" spacing="large" variation="wrap">
    <Tile.Container {...$$props} elevation="lowest" width="content-max">
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
            <Text is="small">lowest</Text>
        </Tile.Footer>
    </Tile.Container>

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
            <Text is="small">low / default</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="medium" width="content-max">
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
            <Text is="small">medium</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="high" width="content-max">
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
            <Text is="small">high</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container {...$$props} elevation="highest" width="content-max">
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
            <Text is="small">highest</Text>
        </Tile.Footer>
    </Tile.Container>
</Stack>
