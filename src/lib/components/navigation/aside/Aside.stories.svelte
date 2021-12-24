<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Divider from "../../layouts/divider/Divider.svelte";
    import Mosaic from "../../layouts/mosaic/Mosaic.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Anchor from "../anchor/Anchor.svelte";
    import * as Menu from "../menu";

    import * as Aside from "./";

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
</script>

<Meta title="Navigation/Aside" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Aside.Container
        logic_id="aside-default"
        palette="dark"
        max_width="content-max"
        height="viewport-100"
        captive
        dismissible
    >
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>DISPLAY</Menu.Heading>

                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>
            <Anchor href="#">
                <Text is="small">v0.2.0</Text>
            </Anchor>
        </Aside.Footer>

        <svelte:fragment slot="open">
            <ContextButton variation="clear">+</ContextButton>
        </svelte:fragment>

        <svelte:fragment slot="close">
            <ContextButton palette="dark" variation="clear">x</ContextButton>
        </svelte:fragment>
    </Aside.Container>
</Story>

<Story name="Palette">
    <Mosaic sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default]}
            <Aside.Container palette={palette === "default" ? undefined : palette}>
                <Aside.Header>
                    Kahi UI
                    <Divider />
                </Aside.Header>

                <Aside.Section>
                    <Menu.Container>
                        <Menu.Heading>DISPLAY</Menu.Heading>

                        <Menu.Button>
                            Badge
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Button>

                        <Menu.Heading>FEEDBACK</Menu.Heading>

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
                </Aside.Section>

                <Aside.Footer>
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Aside.Footer>
            </Aside.Container>
        {/each}
    </Mosaic>
</Story>
