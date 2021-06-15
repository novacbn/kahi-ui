<script lang="ts">
    import Spacer from "../../../layouts/spacer/Spacer.svelte";

    import * as Menu from "../index";

</script>

<Menu.Container>
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
</Menu.Container>
