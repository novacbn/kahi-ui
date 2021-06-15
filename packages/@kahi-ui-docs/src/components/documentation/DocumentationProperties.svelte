<script lang="ts">
    import {Code, Divider, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import type {IArticleProperties} from "../../../../@kahi-ui-docs-kit/shared";

    export let properties: IArticleProperties;

    $: _components = Object.entries(properties);

</script>

<Heading is="h2" id="properties">Properties</Heading>

{#each _components as [component, properties] (component)}
    <Heading is="h3" id="properties-{component.toLowerCase()}">{component}</Heading>

    <Stack spacing="medium">
        {#each properties as property (property.name)}
            <div>
                <Heading
                    is="h4"
                    id="properties-{component.toLowerCase()}-{property.name.toLowerCase()}"
                >
                    <Code>{property.name}</Code>
                </Heading>

                <Divider />
                <Stack spacing="medium">
                    <Stack orientation="horizontal" spacing="huge">
                        <Text is="strong">Description</Text>

                        <Spacer />
                        <Text is="span" align="right">
                            {@html property.description}
                        </Text>
                    </Stack>

                    <Stack orientation="horizontal" spacing="huge">
                        <Text is="strong">Types</Text>

                        <Spacer />
                        <Stack
                            orientation="horizontal"
                            alignment_x="right"
                            spacing="small"
                            variation="wrap"
                        >
                            {#each property.types as type (type)}
                                <Code>
                                    {type}
                                    {#if type === property.default}
                                        <Text is="strong">(DEFAULT)</Text>
                                    {/if}
                                </Code>
                            {/each}
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        {/each}
    </Stack>
{/each}

<style>
    :global(h2#properties ~ .stack h4) {
        margin-top: 1em;
        margin-bottom: 0.25em;
    }

</style>
