<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Text from "../Text.svelte";

    const PALETTES = [
        "default",
        "accent",
        "auto",
        "inverse",
        "dark",
        "light",
        "alert",
        "affirmative",
        "negative",
    ];
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    {#each PALETTES as palette (palette)}
        <div style="max-width:25ch;">
            <Text is="strong">{palette.toUpperCase()}</Text>

            <Text {...$$props} palette={palette === "default" ? undefined : palette}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus,
                in iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </Text>
        </div>
    {/each}
</Stack>
