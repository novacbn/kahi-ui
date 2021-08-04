<script>
    import Mosaic from "../../../layouts/mosaic/Mosaic.svelte";
    import Spacer from "../../../layouts/spacer/Spacer.svelte";

    import * as Menu from "../index";

    const PALETTES = [
        ["default", true],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];
</script>

<Mosaic sizing="medium" spacing="medium">
    {#each PALETTES as [palette, is_default] (palette)}
        <Menu.Container>
            <Menu.Heading>
                {palette.toUpperCase()}
                <svelte:fragment slot="sub-menu">
                    <Menu.SubMenu>
                        <Menu.Label palette={is_default ? undefined : palette} active>
                            Dot
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Label>

                        <Menu.Label palette={is_default ? undefined : palette}>
                            Spinner
                            <Spacer />
                            <span>ICON</span>
                        </Menu.Label>
                    </Menu.SubMenu>
                </svelte:fragment>
            </Menu.Heading>
        </Menu.Container>
    {/each}
</Mosaic>
