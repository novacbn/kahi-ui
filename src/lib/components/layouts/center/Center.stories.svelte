<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Center from "./Center.svelte";
</script>

<Meta title="Layouts/Center" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Box palette="inverse">
        <Center>
            <Text style="max-width:25ch;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </Center>
    </Box>
</Story>
