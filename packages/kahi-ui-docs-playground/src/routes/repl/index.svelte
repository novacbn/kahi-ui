<script>
    import {SCRIPT_SAMPLES} from "../../util/constants";
    import {APPLICATION_ROUTER} from "../../util/router";
    import {create_workspace, get_recent_workspace} from "../../util/workspaces";

    const {goto} = APPLICATION_ROUTER;

    async function init() {
        let identifier = await get_recent_workspace();
        if (!identifier) {
            let filesystem;
            ({identifier, filesystem} = await create_workspace());

            await filesystem.write_file_text("Application.svelte", SCRIPT_SAMPLES.basic);
        }

        goto(`/repl/${identifier}`);
    }

    init();
</script>
