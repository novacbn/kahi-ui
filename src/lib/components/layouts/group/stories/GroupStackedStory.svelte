<script>
    import IMAGE_AVATAR from "../../../../../storybook/assets/images/avatar.png";

    import Figure from "../../../embedded/figure/Figure.svelte";
    import Text from "../../../typography/text/Text.svelte";
    import Stack from "../../stack/Stack.svelte";

    import Group from "../Group.svelte";
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />

        <Group {...$$props} variation="stacked">
            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Stack alignment_y="center" padding_left="small">
                <Text is="small">+7</Text>
            </Stack>
        </Group>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>
        <br />

        <Group {...$$props} variation="stacked" orientation="vertical">
            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure variation="icon" size="medium" shape="pill">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Stack alignment_x="center" padding_top="small">
                <Text is="small">+7</Text>
            </Stack>
        </Group>
    </div>
</Stack>
