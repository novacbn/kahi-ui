<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Grid from "../../layouts/grid";
    import Heading from "../../typography/heading/Heading.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Tab from "./index";

    const ALIGNMENTS_X = [
        ["left", true],
        ["right", false],
        ["center", false],
        ["stretch", false],
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

    const TABS = ["One", "Two", "Three"];
</script>

<Meta title="Disclosure/Tab" component={Tab.Container} />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Tab.Container logic_name="tab-default" logic_state="tab-1" alignment_x="stretch">
        <Tab.Label id="tab-1" palette="accent">Tab One <span>ICON</span></Tab.Label>
        <Tab.Section>
            <Heading>Tab One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Tab.Section>

        <Tab.Label id="tab-2" palette="accent">Tab Two <span>ICON</span></Tab.Label>
        <Tab.Section>
            <Heading>Tab Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Tab.Section>

        <Tab.Label id="tab-3" palette="accent">Tab Three <span>ICON</span></Tab.Label>
        <Tab.Section>
            <Heading>Tab Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Tab.Section>
    </Tab.Container>
</Story>

<Story name="Palette">
    <Tab.Container logic_name="tab-palette" logic_state="tab-default">
        {#each PALETTES as [palette, is_default] (palette)}
            <Tab.Label
                id="tab-{is_default ? 'default' : palette}"
                palette={is_default ? undefined : palette}
            >
                Tab {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
            </Tab.Label>

            <Tab.Section>
                <Heading>Tab {palette.toUpperCase()} Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Tab.Section>
        {/each}
    </Tab.Container>
</Story>

<Story name="Sizing">
    <Grid.Container points={["2", "tablet:1", "mobile:1"]} spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Tab.Container
                    logic_name="tab-sizing-{sizing}"
                    logic_state="tab-One-{sizing}"
                    sizing={is_default ? undefined : sizing}
                >
                    {#each TABS as tab (tab)}
                        <Tab.Label id="tab-{tab}-{sizing}">
                            Tab {tab}
                        </Tab.Label>

                        <Tab.Section>
                            <Heading>Tab {tab} Content</Heading>

                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                                consectetur orci. Curabitur a egestas turpis, vitae convallis
                                sapien. Sed pellentesque rutrum tellus, in iaculis dolor tincidunt
                                non. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                            </Text>
                        </Tab.Section>
                    {/each}
                </Tab.Container>
            </div>
        {/each}
    </Grid.Container>
</Story>

<Story name="Alignment">
    <Grid.Container points={["2", "tablet:1", "mobile:1"]} spacing="medium">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <div>
                <Text is="strong">
                    {`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Tab.Container
                    logic_name="tab-alignment-{alignment_x}"
                    logic_state="tab-One-{alignment_x}"
                    alignment_x={is_default ? undefined : alignment_x}
                >
                    {#each TABS as tab (tab)}
                        <Tab.Label id="tab-{tab}-{alignment_x}">
                            Tab {tab}
                        </Tab.Label>

                        <Tab.Section>
                            <Heading>Tab {tab} Content</Heading>

                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                                consectetur orci. Curabitur a egestas turpis, vitae convallis
                                sapien. Sed pellentesque rutrum tellus, in iaculis dolor tincidunt
                                non. Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                            </Text>
                        </Tab.Section>
                    {/each}
                </Tab.Container>
            </div>
        {/each}
    </Grid.Container>
</Story>
