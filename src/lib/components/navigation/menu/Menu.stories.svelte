<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Form from "../../interactables/form";
    import Radio from "../../interactables/radio/Radio.svelte";
    import * as Mosaic from "../../layouts/mosaic";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import * as Menu from "./";

    const PALETTES = [
        ["default", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
    ];
</script>

<Meta title="Navigation/Menu" />

<Template>
    <slot />
</Template>

<Story name="Default">
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

<Story name="Sub Menu">
    <Menu.Container>
        <Menu.Heading>
            DISPLAY
            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
                    <Menu.Button>
                        Badge
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Heading>

        <Menu.Heading>
            FEEDBACK

            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
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
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Heading>
    </Menu.Container>
</Story>

<Story name="Text Divider">
    <Menu.Container>
        <Menu.Divider>
            DISPLAY
            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
                    <Menu.Button>
                        Badge
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Divider>

        <Menu.Divider>
            FEEDBACK

            <svelte:fragment slot="sub-menu">
                <Menu.SubMenu>
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
                </Menu.SubMenu>
            </svelte:fragment>
        </Menu.Divider>
    </Menu.Container>
</Story>

<Story name="Palette">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <Menu.Container>
                <Menu.Heading>
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}

                    <svelte:fragment slot="sub-menu">
                        <Menu.SubMenu>
                            <Menu.Button palette={is_default ? undefined : palette} active>
                                Dot
                                <Spacer />
                                <span>ICON</span>
                            </Menu.Button>

                            <Menu.Button palette={is_default ? undefined : palette}>
                                Spinner
                                <Spacer />
                                <span>ICON</span>
                            </Menu.Button>
                        </Menu.SubMenu>
                    </svelte:fragment>
                </Menu.Heading>
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
