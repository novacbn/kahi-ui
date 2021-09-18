<script>
    import IMAGE_AVATAR from "../../../../storybook/assets/images/avatar.png";

    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Tile from "./index";

    const ELEVATIONS = [
        ["lowest", true],
        ["low", false],
        ["medium", false],
        ["high", false],
        ["highest", false],
    ];

    const ORIENTATIONS = [
        ["horizontal", true],
        ["vertical", false],
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

<Meta title="Surfaces/Tile" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Tile.Container width="content-max">
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
</Story>

<Story name="Flush">
    <Tile.Container variation="flush" width="content-max">
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
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Tile.Container width="content-max" {palette}>
                <Tile.Figure shape="pill">
                    <img src={IMAGE_AVATAR} />
                </Tile.Figure>

                <Tile.Section>
                    <Tile.Header>
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Tile.Header>

                    <Text>
                        <Text is="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Text>
                </Tile.Section>
            </Tile.Container>
        {/each}
    </Stack>
</Story>

<Story name="Elevation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Tile.Container width="content-max" {elevation}>
                <Tile.Figure shape="pill">
                    <img src={IMAGE_AVATAR} />
                </Tile.Figure>

                <Tile.Section>
                    <Tile.Header>
                        {`${elevation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Tile.Header>

                    <Text>
                        <Text is="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Text>
                </Tile.Section>
            </Tile.Container>
        {/each}
    </Stack>
</Story>

<Story name="Sizing">
    <Stack orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Tile.Container width="content-max" {sizing}>
                <Tile.Figure shape="pill">
                    <img src={IMAGE_AVATAR} />
                </Tile.Figure>

                <Tile.Section>
                    <Tile.Header>
                        {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Tile.Header>

                    <Text>
                        <Text is="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Text>
                </Tile.Section>
            </Tile.Container>
        {/each}
    </Stack>
</Story>

<Story name="Footer Orientation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <Tile.Container width="content-max">
                <Tile.Figure shape="pill">
                    <img src={IMAGE_AVATAR} />
                </Tile.Figure>

                <Tile.Section>
                    <Tile.Header>
                        {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Tile.Header>

                    <Text>
                        <Text is="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Text>
                </Tile.Section>

                <Tile.Footer {orientation}>
                    <Button palette="affirmative" size="small">Confirm</Button>
                    <Button palette="negative" size="small">Cancel</Button>
                </Tile.Footer>
            </Tile.Container>
        {/each}
    </Stack>
</Story>
