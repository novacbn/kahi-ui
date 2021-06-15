<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import Heading from "../Heading.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div style="max-width:25ch;">
        <Text is="strong">H1</Text>

        <Heading {...$$props} is="h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H2</Text>

        <Heading {...$$props} is="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H3</Text>

        <Heading {...$$props} is="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H4</Text>

        <Heading {...$$props} is="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H5</Text>

        <Heading {...$$props} is="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">H6</Text>

        <Heading {...$$props} is="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Heading>
    </div>
</Stack>
