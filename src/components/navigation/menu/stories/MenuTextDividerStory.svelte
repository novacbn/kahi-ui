<script lang="ts">
    import Spacer from "../../../layouts/spacer/Spacer.svelte";

    import * as Menu from "../index";

</script>

<Menu.Container>
    <Menu.Divider>
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
    </Menu.Divider>

    <Menu.Divider>
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
    </Menu.Divider>
</Menu.Container>
