<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../../typography/text/Text.svelte";

    import * as Stack from "../stack";

    import Container from "./Container.svelte";

    const VIEWPORTS = [
        ["prose", true],
        ["mobile", false],
        ["tablet", false],
        ["desktop", false],
        ["widescreen", false],
    ];
</script>

<Meta title="Layouts/Container" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Container>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Container>
</Story>

<Story name="Viewport">
    <Stack.Container spacing="medium">
        {#each VIEWPORTS as [viewport, is_default] (viewport)}
            <Container {viewport}>
                <Text is="strong">
                    {`${viewport.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
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
