<script>
    import APPLICATION_ROUTER from "../../router.manifest";

    import {get_default_sample} from "../../util/samples";
    import {create_workspace_from_sample, get_recent_workspace} from "../../util/workspaces";

    const {goto} = APPLICATION_ROUTER;

    async function init() {
        let identifier = await get_recent_workspace();
        if (!identifier) {
            const sample = get_default_sample();

            ({identifier} = await create_workspace_from_sample(sample));
        }

        goto(`/repl/workspace/${identifier}`);
    }

    init();
</script>
