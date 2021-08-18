<script>
    import Stack from "../../../layouts/stack/Stack.svelte";

    import Badge from "../Badge.svelte";

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];
</script>

<Stack spacing="medium" orientation="horizontal" variation="wrap">
    {#each PALETTES as [palette, is_default] (palette)}
        <Badge {...$$props} palette={is_default ? undefined : palette}>
            This is a {palette.toUpperCase()} Badge
        </Badge>
    {/each}
</Stack>
