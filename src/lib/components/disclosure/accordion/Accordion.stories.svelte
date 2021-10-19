<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../../typography/text/Text.svelte";
    import Transition from "../../utilities/transition/Transition.svelte";

    import * as Accordion from "./index";
</script>

<Meta title="Disclosure/Accordion" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Accordion.Container logic_name="accordion-default">
        <Accordion.Group logic_id="accordion-1">
            <Accordion.Label>Section 1</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-2">
            <Accordion.Label>Section 2</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-3">
            <Accordion.Label>Section 3</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>
    </Accordion.Container>
</Story>

<Story name="Inclusive">
    <Accordion.Container behavior="inclusive" logic_name="accordion-default">
        <Accordion.Group logic_id="accordion-1">
            <Accordion.Label>Section 1</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-2">
            <Accordion.Label>Section 2</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>

        <Accordion.Group logic_id="accordion-3">
            <Accordion.Label>Section 3</Accordion.Label>

            <Accordion.Section>
                <Transition animation="slide" direction="top" variation="enter">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
                        consectetur orci. Curabitur a egestas turpis, vitae convallis sapien. Sed
                        pellentesque rutrum tellus, in iaculis dolor tincidunt non. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Transition>
            </Accordion.Section>
        </Accordion.Group>
    </Accordion.Container>
</Story>
