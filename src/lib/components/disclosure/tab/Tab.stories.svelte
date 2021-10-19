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
    <Tab.Container logic_name="tab-default" logic_state="tab-default-1" alignment_x="stretch">
        <Tab.Group logic_id="tab-default-1">
            <Tab.Label palette="accent">Tab One <span>ICON</span></Tab.Label>
            <Tab.Section>
                <Heading>Tab One Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Tab.Section>
        </Tab.Group>

        <Tab.Group logic_id="tab-default-2">
            <Tab.Label palette="accent">Tab Two <span>ICON</span></Tab.Label>
            <Tab.Section>
                <Heading>Tab Two Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Tab.Section>
        </Tab.Group>

        <Tab.Group logic_id="tab-default-3">
            <Tab.Label palette="accent">Tab Three <span>ICON</span></Tab.Label>
            <Tab.Section>
                <Heading>Tab Three Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Tab.Section>
        </Tab.Group>
    </Tab.Container>
</Story>

<Story name="Lazy">
    <Tab.Container logic_name="tab-lazy" logic_state="tab-lazy-1">
        {#each TABS as name, index}
            <Tab.Group logic_id="tab-lazy-{index + 1}">
                <Tab.Label>Tab {name} <span>ICON</span></Tab.Label>
                <Tab.Section loading="lazy">
                    <Heading>Tab {name} Content</Heading>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Tab.Section>
            </Tab.Group>
        {/each}
    </Tab.Container>
</Story>

<Story name="Anchor">
    <Tab.Container>
        {#each TABS as name, index}
            <Tab.Anchor href="#" current={index === 0 ? "page" : undefined}>
                Tab {name} <span>ICON</span>
            </Tab.Anchor>

            <Tab.Section>
                <Heading>Tab {name} Content</Heading>

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

<Story name="Palette">
    <Tab.Container logic_name="tab-palette" logic_state="tab-palette-1">
        {#each PALETTES as [palette, is_default], index (palette)}
            <Tab.Group logic_id="tab-palette-{index + 1}">
                <Tab.Label palette={is_default ? undefined : palette}>
                    Tab {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab {palette.toUpperCase()} Content</Heading>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Tab.Section>
            </Tab.Group>
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
                    logic_state="tab-sizing-{sizing}-1"
                    sizing={is_default ? undefined : sizing}
                >
                    {#each TABS as tab, index (tab)}
                        <Tab.Group logic_id="tab-sizing-{sizing}-{index + 1}">
                            <Tab.Label>
                                Tab {tab}
                            </Tab.Label>

                            <Tab.Section>
                                <Heading>Tab {tab} Content</Heading>

                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                    et consectetur orci. Curabitur a egestas turpis, vitae convallis
                                    sapien. Sed pellentesque rutrum tellus, in iaculis dolor
                                    tincidunt non. Orci varius natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus.
                                </Text>
                            </Tab.Section>
                        </Tab.Group>
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
                    logic_state="tab-alignment-{alignment_x}-1"
                    alignment_x={is_default ? undefined : alignment_x}
                >
                    {#each TABS as tab, index (tab)}
                        <Tab.Group logic_id="tab-alignment-{alignment_x}-{index + 1}">
                            <Tab.Label>
                                Tab {tab}
                            </Tab.Label>

                            <Tab.Section>
                                <Heading>Tab {tab} Content</Heading>

                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                    et consectetur orci. Curabitur a egestas turpis, vitae convallis
                                    sapien. Sed pellentesque rutrum tellus, in iaculis dolor
                                    tincidunt non. Orci varius natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus.
                                </Text>
                            </Tab.Section>
                        </Tab.Group>
                    {/each}
                </Tab.Container>
            </div>
        {/each}
    </Grid.Container>
</Story>
