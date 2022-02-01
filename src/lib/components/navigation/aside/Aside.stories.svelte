<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Divider from "../../layouts/divider/Divider.svelte";
    import * as Mosaic from "../../layouts/mosaic";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Anchor from "../anchor/Anchor.svelte";
    import * as Menu from "../menu";

    import * as Aside from "./";

    const PALETTES = [
        ["auto", true],
        ["inverse", false],
        ["accent", false],
        ["neutral", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const PLACEMENTS = [
        ["left", true],
        ["right", false],
    ];
</script>

<Meta title="Navigation/Aside" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Aside.Container palette="light" max_width="content-max" height="viewport-100">
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
                <Text is="small">v0.5.0</Text>
            </Anchor>
        </Aside.Footer>
    </Aside.Container>
</Story>

<Story name="Palette">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <Aside.Container palette={palette === "default" ? undefined : palette}>
                <Aside.Header>
                    Kahi UI
                    <Divider />
                </Aside.Header>

                <Aside.Section>
                    <Menu.Container>
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
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Aside.Footer>
            </Aside.Container>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Sticky">
    {#each PLACEMENTS as [placement, is_default] (placement)}
        <Aside.Container
            palette="inverse"
            variation="sticky"
            max_width="content-max"
            height="viewport-100"
            {placement}
        >
            <Aside.Header>
                <Anchor href="#">Kahi UI</Anchor>
                <Divider />
            </Aside.Header>

            <Aside.Section>
                <Menu.Container>
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
                {`${placement.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
            </Aside.Footer>
        </Aside.Container>
    {/each}
</Story>
