<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Divider from "../../layouts/divider/Divider.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";
    import ContextButton from "../../utilities/contextbutton/ContextButton.svelte";

    import Anchor from "../anchor/Anchor.svelte";
    import * as Menu from "../menu";

    import * as Omni from "./";

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

<Meta title="Navigation/Omni" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Omni.Container logic_id="omni-default" palette="dark" width="viewport-100" captive dismissible>
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            <Anchor href="#">
                <Text is="small">v0.2.0</Text>
            </Anchor>

            <Spacer />
            <ContextButton palette="light" variation="clear">+</ContextButton>
            <ContextButton palette="light" variation="clear">x</ContextButton>
        </Omni.Header>

        <Omni.Footer>
            <Omni.Section>
                <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]}>
                    <Menu.Button palette="light" variation="clear" active>Docs</Menu.Button>
                    <Menu.Button palette="light" variation="clear">Playground</Menu.Button>
                    <Menu.Button palette="light" variation="clear">Storybook</Menu.Button>
                </Menu.Container>
            </Omni.Section>

            <Omni.Section>
                <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]}>
                    <Menu.Button palette="light" variation="clear">GitHub</Menu.Button>
                </Menu.Container>
            </Omni.Section>
        </Omni.Footer>
    </Omni.Container>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <Omni.Container
                max_width="content-max"
                palette={palette === "default" ? undefined : palette}
            >
                <Omni.Header>
                    Kahi UI
                    <Divider orientation="vertical" />
                    <Text is="small">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Omni.Header>

                <Omni.Footer>
                    <Omni.Section>
                        <Menu.Container>
                            <Menu.Button variation="clear">GitHub</Menu.Button>
                        </Menu.Container>
                    </Omni.Section>
                </Omni.Footer>
            </Omni.Container>
        {/each}
    </Stack>
</Story>
