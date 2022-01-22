<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "../stack";

    import Container from "./Container.svelte";

    const IS = [
        ["div", true],
        ["article", false],
        ["main", false],
    ];
</script>

<Meta title="Layouts/Container" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Container>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Container>
</Story>

<Story name="Elements">
    <Stack.Container spacing="medium">
        {#each IS as [is, is_default] (is)}
            <Container is={is_default ? undefined : is}>
                <Text is="strong">
                    {`${is.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </Container>
        {/each}
    </Stack.Container>
</Story>
