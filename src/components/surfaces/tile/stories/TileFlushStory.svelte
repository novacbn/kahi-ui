<script>
    import IMAGE_AVATAR from "../../../../storybook/assets/images/avatar.png";

    import Button from "../../../interactables/button/Button.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Tile from "../index";
</script>

<Tile.Container {...$$props} width="content-max" variation="flush">
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
        <Button palette="affirmative" size="small">Add Friend</Button>
        <Button palette="negative" size="small">Ban User</Button>
    </Tile.Footer>
</Tile.Container>
