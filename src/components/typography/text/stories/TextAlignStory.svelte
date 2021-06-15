<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Text from "../Text.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div style="max-width:25ch;">
        <Text is="strong">DEFAULT</Text>

        <Text {...$$props}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">CENTER</Text>

        <Text {...$$props} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">JUSTIFY</Text>

        <Text {...$$props} align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LEFT</Text>

        <Text {...$$props} align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">RIGHT</Text>

        <Text {...$$props} align="right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>
