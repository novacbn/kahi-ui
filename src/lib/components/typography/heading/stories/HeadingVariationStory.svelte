<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import Heading from "../Heading.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div style="max-width:25ch;">
        <Text is="strong">DEFAULT</Text>

        <Heading {...$$props}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">TRUNCATE</Text>

        <Heading {...$$props} variation="truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
