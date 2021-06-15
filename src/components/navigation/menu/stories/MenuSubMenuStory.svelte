<script lang="ts">
    import Spacer from "../../../layouts/spacer/Spacer.svelte";

    import * as Menu from "../index";

</script>

<Menu.Container>
    <Menu.Heading>
        DISPLAY
        <svelte:fragment slot="sub-menu">
            <Menu.SubMenu>
                <Menu.Button>
                    Badge
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.SubMenu>
        </svelte:fragment>
    </Menu.Heading>

    <Menu.Heading>
        FEEDBACK

        <svelte:fragment slot="sub-menu">
            <Menu.SubMenu>
                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.SubMenu>
        </svelte:fragment>
    </Menu.Heading>
</Menu.Container>
