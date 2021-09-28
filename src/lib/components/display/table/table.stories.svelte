<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import * as Table from "./index";

    const SIZINGS = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Display/Table" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Table.Container>
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column><Text is="strong">mobile</Text></Table.Column>
                <Table.Column><Code>0px</Code></Table.Column>
                <Table.Column><Code>640px</Code></Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column><Text is="strong">tablet</Text></Table.Column>
                <Table.Column><Code>641px</Code></Table.Column>
                <Table.Column><Code>768px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">desktop</Text></Table.Column>
                <Table.Column><Code>769px</Code></Table.Column>
                <Table.Column><Code>1024px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">widescreen</Text></Table.Column>
                <Table.Column><Code>1025px</Code></Table.Column>
                <Table.Column><Code>∞</Code></Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Story>

<Story name="Borders">
    <Table.Container variation="borders">
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column><Text is="strong">mobile</Text></Table.Column>
                <Table.Column><Code>0px</Code></Table.Column>
                <Table.Column><Code>640px</Code></Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column><Text is="strong">tablet</Text></Table.Column>
                <Table.Column><Code>641px</Code></Table.Column>
                <Table.Column><Code>768px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">desktop</Text></Table.Column>
                <Table.Column><Code>769px</Code></Table.Column>
                <Table.Column><Code>1024px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">widescreen</Text></Table.Column>
                <Table.Column><Code>1025px</Code></Table.Column>
                <Table.Column><Code>∞</Code></Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Story>

<Story name="Stripes">
    <Table.Container variation="stripes">
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column><Text is="strong">mobile</Text></Table.Column>
                <Table.Column><Code>0px</Code></Table.Column>
                <Table.Column><Code>640px</Code></Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column><Text is="strong">tablet</Text></Table.Column>
                <Table.Column><Code>641px</Code></Table.Column>
                <Table.Column><Code>768px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">desktop</Text></Table.Column>
                <Table.Column><Code>769px</Code></Table.Column>
                <Table.Column><Code>1024px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">widescreen</Text></Table.Column>
                <Table.Column><Code>1025px</Code></Table.Column>
                <Table.Column><Code>∞</Code></Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Story>

<Story name="Borders + Stripes">
    <Table.Container variation={["borders", "stripes"]}>
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column><Text is="strong">mobile</Text></Table.Column>
                <Table.Column><Code>0px</Code></Table.Column>
                <Table.Column><Code>640px</Code></Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column><Text is="strong">tablet</Text></Table.Column>
                <Table.Column><Code>641px</Code></Table.Column>
                <Table.Column><Code>768px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">desktop</Text></Table.Column>
                <Table.Column><Code>769px</Code></Table.Column>
                <Table.Column><Code>1024px</Code></Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column><Text is="strong">widescreen</Text></Table.Column>
                <Table.Column><Code>1025px</Code></Table.Column>
                <Table.Column><Code>∞</Code></Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Story>

<Story name="Sizing">
    <Stack spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Table.Container variation="borders" {sizing}>
                    <Table.Header>
                        <Table.Row>
                            <Table.Heading />
                            <Table.Heading>Minimum</Table.Heading>
                            <Table.Heading>Maximum</Table.Heading>
                        </Table.Row>
                    </Table.Header>

                    <Table.Section>
                        <Table.Row>
                            <Table.Column><Text is="strong">mobile</Text></Table.Column>
                            <Table.Column><Code>0px</Code></Table.Column>
                            <Table.Column><Code>640px</Code></Table.Column>
                        </Table.Row>

                        <Table.Row>
                            <Table.Column><Text is="strong">tablet</Text></Table.Column>
                            <Table.Column><Code>641px</Code></Table.Column>
                            <Table.Column><Code>768px</Code></Table.Column>
                        </Table.Row>
                        <Table.Row>
                            <Table.Column><Text is="strong">desktop</Text></Table.Column>
                            <Table.Column><Code>769px</Code></Table.Column>
                            <Table.Column><Code>1024px</Code></Table.Column>
                        </Table.Row>
                        <Table.Row>
                            <Table.Column><Text is="strong">widescreen</Text></Table.Column>
                            <Table.Column><Code>1025px</Code></Table.Column>
                            <Table.Column><Code>∞</Code></Table.Column>
                        </Table.Row>
                    </Table.Section>

                    <Table.Footer>
                        <Table.Row>
                            <Table.Heading />
                            <Table.Heading>Minimum</Table.Heading>
                            <Table.Heading>Maximum</Table.Heading>
                        </Table.Row>
                    </Table.Footer>
                </Table.Container>
            </div>
        {/each}
    </Stack>
</Story>
