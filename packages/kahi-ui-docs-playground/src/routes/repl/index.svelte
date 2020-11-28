<script>
    import {join} from "uristorage";

    import {SCRIPT_SAMPLES, WORKSPACE_RECENT} from "../../util/constants";

    import {generate_id} from "../../util/random";
    import {APPLICATION_ROUTER} from "../../util/router";
    import {get_filesystem} from "../../util/storage";

    const {goto} = APPLICATION_ROUTER;

    const filesystem = get_filesystem();

    async function init() {
        let identifier;
        if (await filesystem.exists(WORKSPACE_RECENT)) {
            identifier = await filesystem.read_file_text(WORKSPACE_RECENT);
        } else {
            identifier = generate_id();
            const path = join(identifier, "Application.svelte");

            await filesystem.create_directory(identifier);
            await filesystem.write_file_text(path, SCRIPT_SAMPLES.basic);

            await filesystem.write_file_text(WORKSPACE_RECENT, identifier);
        }

        goto(`/repl/${identifier}`);
    }

    init();
</script>
