<script>
    import {join} from "uristorage";

    import {SCRIPT_SAMPLES} from "../../util/constants";
    import {APPLICATION_ROUTER} from "../../util/router";
    import {get_filesystem} from "../../util/storage";
    import {create_workspace, get_recent_workspace} from "../../util/workspaces";

    const {goto} = APPLICATION_ROUTER;

    const filesystem = get_filesystem();

    async function init() {
        let identifier = await get_recent_workspace();
        if (!identifier) {
            let path;
            ({identifier, path} = await create_workspace());

            const sample_path = join(path, "Application.svelte");
            await filesystem.write_file_text(sample_path, SCRIPT_SAMPLES.basic);
        }

        goto(`/repl/${identifier}`);
    }

    init();
</script>
