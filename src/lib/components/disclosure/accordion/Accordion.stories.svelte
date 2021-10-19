<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../../typography/text/Text.svelte";
    import Transition from "../../utilities/transition/Transition.svelte";

    import * as Accordion from "./index";

    const ACCORDIONS = ["One", "Two", "Three"];
</script>

<Meta title="Disclosure/Accordion" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Accordion.Container logic_name="accordion-default">
        <Accordion.Group logic_id="accordion-default-1">
            <Accordion.Label palette="accent">
                Section One

                <svelte:fragment slot="close">
                    <Text is="span">&blacktriangledown;</Text>
                </svelte:fragment>

                <svelte:fragment slot="open">
                    <Text is="span">&blacktriangleright;</Text>
                </svelte:fragment>
            </Accordion.Label>

            <Accordion.Section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-default-2">
            <Accordion.Label palette="accent">
                Section Two

                <svelte:fragment slot="close">
                    <Text is="span">&blacktriangledown;</Text>
                </svelte:fragment>

                <svelte:fragment slot="open">
                    <Text is="span">&blacktriangleright;</Text>
                </svelte:fragment>
            </Accordion.Label>

            <Accordion.Section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-default-3">
            <Accordion.Label palette="accent">
                Section Three

                <svelte:fragment slot="close">
                    <Text is="span">&blacktriangledown;</Text>
                </svelte:fragment>

                <svelte:fragment slot="open">
                    <Text is="span">&blacktriangleright;</Text>
                </svelte:fragment>
            </Accordion.Label>

            <Accordion.Section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Accordion.Section>
        </Accordion.Group>
    </Accordion.Container>
</Story>

<Story name="Inclusive">
    <Accordion.Container behavior="inclusive" logic_name="accordion-inclusive">
        {#each ACCORDIONS as name, index}
            <Accordion.Group logic_id="accordion-inclusive-{index + 1}">
                <Accordion.Label palette="accent">
                    Section {name}

                    <svelte:fragment slot="close">
                        <Text is="span">&blacktriangledown;</Text>
                    </svelte:fragment>

                    <svelte:fragment slot="open">
                        <Text is="span">&blacktriangleright;</Text>
                    </svelte:fragment>
                </Accordion.Label>

                <Accordion.Section>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Accordion.Section>
            </Accordion.Group>
        {/each}
    </Accordion.Container>
</Story>

<Story name="Transition + Exclusive">
    <Accordion.Container logic_name="accordion-transition-exclusive">
        {#each ACCORDIONS as name, index}
            <Accordion.Group logic_id="accordion-transition-exclusive-{index + 1}">
                <Accordion.Label palette="accent">Section {name}</Accordion.Label>

                <Accordion.Section>
                    <Transition animation="slide" direction="top">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                            consectetur orci. Curabitur a egestas turpis, vitae convallis sapien.
                            Sed pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus.
                        </Text>
                    </Transition>
                </Accordion.Section>
            </Accordion.Group>
        {/each}
    </Accordion.Container>
</Story>

<Story name="Transition + Inclusive">
    <Accordion.Container behavior="inclusive" logic_name="accordion-transition-inclusive">
        {#each ACCORDIONS as name, index}
            <Accordion.Group logic_id="accordion-transition-inclusive-{index + 1}">
                <Accordion.Label palette="accent">Section {name}</Accordion.Label>

                <Accordion.Section>
                    <Transition animation="slide" direction="top">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                            consectetur orci. Curabitur a egestas turpis, vitae convallis sapien.
                            Sed pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus.
                        </Text>
                    </Transition>
                </Accordion.Section>
            </Accordion.Group>
        {/each}
    </Accordion.Container>
</Story>
