<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Form from "../../interactables/form";
    import Radio from "../../interactables/radio/Radio.svelte";
    import * as Mosaic from "../../layouts/mosaic";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Stack from "../../layouts/stack";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Menu from "./";

    const PALETTES = [
        ["subtle", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["neutral", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
    ];

    const SIZINGS = [
        ["medium", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Navigation/Menu" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Menu.Container>
        <Menu.Button>
            Dot
            <Spacer />
            <span>ICON</span>
        </Menu.Button>

        <Menu.Button>
            Spinner
            <Spacer />
            <span>ICON</span>
        </Menu.Button>
    </Menu.Container>
</Story>

<Story name="Section">
    <Menu.Container>
        <Menu.Heading>DISPLAY</Menu.Heading>

        <Menu.Section>
            <Menu.Button>
                Badge
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>

        <Menu.Heading>FEEDBACK</Menu.Heading>

        <Menu.Section>
            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>
</Story>

<Story name="Divider">
    <Mosaic.Container sizing="medium" spacing="medium">
        <div>
            <Text is="strong">SEPARATOR DIVIDER / DEFAULT</Text>

            <Menu.Container>
                <Menu.Section>
                    <Menu.Button>
                        Badge
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>

                <Menu.Heading />

                <Menu.Section>
                    <Menu.Button>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </Menu.Container>
        </div>

        <div>
            <Text is="strong">HEADING DIVIDER</Text>

            <Menu.Container>
                <Menu.Heading variation="divider">DISPLAY</Menu.Heading>

                <Menu.Section>
                    <Menu.Button>
                        Badge
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>

                <Menu.Heading variation="divider">FEEDBACK</Menu.Heading>

                <Menu.Section>
                    <Menu.Button>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </Menu.Container>
        </div>
    </Mosaic.Container>
</Story>

<Story name="Label">
    <Menu.Container>
        <Form.Group logic_name="menu-label-story" logic_state="off">
            <Menu.Label for="menu-label-off">
                Off
                <Spacer />
                <Radio value="off" palette="negative" variation="flush" />
            </Menu.Label>

            <Menu.Label for="menu-label-on">
                On
                <Spacer />
                <Radio value="on" palette="affirmative" variation="flush" />
            </Menu.Label>
        </Form.Group>
    </Menu.Container>
</Story>

<Story name="Palette">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <Menu.Container palette={is_default ? undefined : palette}>
                <Menu.Heading>
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Menu.Heading>

                <Menu.Section>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </Menu.Container>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Subtle">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <Box padding="small" palette={is_default ? undefined : palette}>
                <Menu.Container>
                    <Menu.Heading variation="divider">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Menu.Heading>

                    <Menu.Section>
                        <Menu.Button active>
                            Dot
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>

                        <Menu.Button>
                            Spinner
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>
                    </Menu.Section>
                </Menu.Container>
            </Box>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Sizing">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Menu.Container sizing={is_default ? undefined : sizing}>
                <Menu.Heading>
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Menu.Heading>

                <Menu.Section>
                    <Menu.Button active>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Section>
            </Menu.Container>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Orientation">
    <Stack.Container alignment_y="top" orientation="horizontal" spacing="medium" variation="wrap">
        {#each ORIENTATIONS as [orientation, is_default] (orientation)}
            <div>
                <Text is="strong">
                    {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Menu.Container orientation={is_default ? undefined : orientation}>
                    <Menu.Button active>Item #1</Menu.Button>
                    <Menu.Button>Item #2</Menu.Button>
                </Menu.Container>
            </div>
        {/each}
    </Stack.Container>
</Story>
