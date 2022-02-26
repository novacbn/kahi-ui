<script>
    import IMAGE_AVATAR from "../../../../../.storybook/assets/avatar.webp";

    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import * as Tile from "./index";

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

<Meta title="Surfaces/Tile" />

<Template>
    <slot />
</Template>

<Story name="Preview">
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
            <Button palette="affirmative" sizing="small">Add Friend</Button>
            <Button palette="negative" sizing="small">Ban User</Button>
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
            <Button palette="affirmative" sizing="small">Add Friend</Button>
            <Button palette="negative" sizing="small">Ban User</Button>
        </Tile.Footer>
    </Tile.Container>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Tile.Container width="content-max" palette={is_default ? undefined : palette}>
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
    </Stack.Container>
</Story>

<Story name="Elevation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEVATIONS as [elevation, is_default] (elevation)}
            <Tile.Container width="content-max" elevation={is_default ? undefined : elevation}>
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
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Tile.Container width="content-max" sizing={is_default ? undefined : sizing}>
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
    </Stack.Container>
</Story>

<Story name="Footer Orientation">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <Tile.Container width="content-max">
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

                <Tile.Footer orientation={is_default ? undefined : orientation}>
                    <Button palette="affirmative" sizing="small">Confirm</Button>
                    <Button palette="negative" sizing="small">Cancel</Button>
                </Tile.Footer>
            </Tile.Container>
        {/each}
    </Stack.Container>
</Story>

<Story name="Footer Spacing">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each SPACINGS as [spacing, is_default] (spacing)}
            <Tile.Container width="content-max">
                <Tile.Section>
                    <Tile.Header>
                        {`${spacing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Tile.Header>

                    <Text>
                        <Text is="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Text>
                </Tile.Section>

                <Tile.Footer spacing={is_default ? undefined : spacing}>
                    <Button palette="affirmative" sizing="small">Confirm</Button>
                    <Button palette="negative" sizing="small">Cancel</Button>
                </Tile.Footer>
            </Tile.Container>
        {/each}
    </Stack.Container>
</Story>
