<script>
    import {join} from "uristorage";

    import {Box} from "@kahi-ui/svelte";

    import {PIPELINE_RESULT_TYPES} from "svelte-pipeline";

    import {pipeline} from "../../stores/pipeline";
    import {get_filesystem} from "../../util/storage";

    import Layout from "../$layout.svelte";

    const store = pipeline();
    const filesystem = get_filesystem();

    let script = "";

    export let params = {};

    async function read_script(identifier) {
        const path = join(identifier, "Application.svelte");

        script = await filesystem.read_file_text(path);
    }

    async function write_script(identifier, text) {
        const path = join(identifier, "Application.svelte");

        await filesystem.write_file_text(path, text);
    }

    $: if (!script && params.identifier) read_script(params.identifier);
    $: if (params.identifier) write_script(params.identifier, script);

    $: if (script) $store = script;

    let Component, err;
    $: {
        const result = $store;
        if (result) {
            if (result.type === PIPELINE_RESULT_TYPES.error) {
                Component = null;
                err = result.message;
            } else {
                Component = result.module.exports.default;
                err = null;
            }
        } else (Component = null), (err = null);
    }

    $: console.log({script});
    $: console.log({Component, err});
</script>

{#if err}
    <Box palette="negative" variation="outline">{err}</Box>
{/if}

<textarea bind:value={script} />

{#if Component && script}
    <svelte:component this={Component} />
{/if}
