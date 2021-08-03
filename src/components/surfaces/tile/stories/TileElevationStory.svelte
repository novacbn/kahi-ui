<script>
    import IMAGE_AVATAR from "../../../../storybook/assets/images/avatar.png";

    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Tile from "../index";

    const ELEVATIONS = [
        ["lowest", true],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["highest", false],
    ];
</script>

<Stack orientation="horizontal" spacing="large" variation="wrap">
    {#each ELEVATIONS as [elevation, is_default] (elevation)}
        <Tile.Container {...$$props} width="content-max" {elevation}>
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
                <Text is="small">
                    {elevation}
                    {is_default ? " / default" : ""}
                </Text>
            </Tile.Footer>
        </Tile.Container>
    {/each}
</Stack>
